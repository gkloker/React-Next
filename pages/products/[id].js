import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Layout from "../../components/layout/Layout";
import Error404 from "../../components/layout/404";
import { Field, InputSubmit } from "../../components/ui/Form";
import {Button} from "../../components/ui/Button";

const ProductContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }  
`;

const Product = () => {
  // Component state
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  // Routing to get id
  const router = useRouter();
  const {query: {id}} = router;

  // Context firebase
  const {firebase, user} = useContext(FirebaseContext);

  useEffect(() => {
    if (id) {
      const getProduct = async () => {
        const productQuery = await firebase.db.collection("products").doc(id);
        const product = await productQuery.get();

        if (product.exists) {
          setProduct(product.data());
        } else {
          setError(true);
        }
      }
      getProduct();
    }
  }, [id]);

  if (Object.keys(product).length === 0) return "Loading...";
  const {
    url,
    imageUrl,
    comments,
    votes,
    created,
    name,
    description,
    company,
    owner
  } = product;

  return (
    <Layout>
      <>
        {error && <Error404/>}

        <div className="container">
          <h1 css={css`
            text-align: center;
            margin-top: 5rem;
          `}>{name}</h1>

          <ProductContainer>
            <div>
              <p>Created: {formatDistanceToNow(new Date(created))}</p>
              <p>By: {owner.name} from {company} </p>
              <img src={imageUrl} alt=""/>
              <p>{description}</p>

              {user && (
                <>
                  <h2>Add a comment</h2>
                  <form>
                    <Field>
                      <input
                      type="text"
                      name="message"
                      />
                    </Field>
                    <InputSubmit
                    type="submit"
                    value="Add Comment"
                    />
                  </form>
                </>
              )}

              <h2 css={css`
                margin: 2rem 0;
              `}>Comments</h2>
              {comments.map(comment => (
                <li>
                  <p>{comment.name}</p>
                  <p>Write by: {comment.userName}</p>
                </li>
              ))}
            </div>
            <aside>
              <Button
                target="_blank"
                bgColor="true"
                href={url}
              >Visit URL</Button>

              <div css={css`
                margin-top: 5rem;
              `}>
                <p css={css`
                  text-align: center;
                `}
                >{votes} Votes</p>

                {user && (
                  <Button>Vote</Button>
                )}
              </div>
            </aside>
          </ProductContainer>
        </div>
      </>
    </Layout>
  );
}

export default Product;