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

const ProductOwner = styled.p`
  padding: .5rem 2rem;
  background-color: #DA552F;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const Product = () => {
  // Component state
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [comment, setComment] = useState({});
  const [pingDB, setPingDB] = useState(true);

  // Routing to get id
  const router = useRouter();
  const {query: {id}} = router;

  // Context firebase
  const {firebase, user} = useContext(FirebaseContext);

  useEffect(() => {
    if (id && pingDB) {
      const getProduct = async () => {
        const productQuery = await firebase.db.collection("products").doc(id);
        const product = await productQuery.get();

        if (product.exists) {
          setProduct(product.data());
          setPingDB(false);
        } else {
          setError(true);
          setPingDB(false);
        }
      }
      getProduct();
    }
  }, [id]);

  if (Object.keys(product).length === 0 && !error) return "Loading...";
  const {
    url,
    imageUrl,
    comments,
    votes,
    created,
    name,
    description,
    company,
    owner,
    isVoted
  } = product;

  // Validate votes
  const voteProduct = () => {
    if (!user) return router.push("/login");

    // Get and sum new vote
    const totalVotes = votes + 1;

    // Verify if user voted
    if (isVoted.includes(user.uid)) return;

    // Save id user voted
    const voted = [...isVoted, user.uid];

    // Update db
    firebase.db.collection("products").doc(id).update({
      votes: totalVotes,
      isVoted: voted
    });

    // Update state
    setProduct({
      ...product,
      votes: totalVotes
    });

    setPingDB(true);
  }

  const onChangeComment = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    })
  }

  const addComment = (e) => {
    e.preventDefault();

    if (!user) return router.push("/login");

    // Info user comment
    comment.userId = user.uid;
    comment.userName = user.displayName;

    const newComments = [...comments, comment];

    // Update DB
    firebase.db.collection("products").doc(id).update({
      comments: newComments
    });

    // Update state
    setProduct({
      ...product,
      comments: newComments
    });

    setPingDB(true);
  }

  // Identify if the comment is the owner
  const isOwner = (id) => {
    if (owner.id === id) return true;
  }

  // Is owner to remove product?
  const isOwnerToRemove = () => {
    if (!user) return false;

    if (owner.id === user.uid) return true;
  }

  // Delete product
  const deleteProduct = async () => {
    if(!user) return router.push("/login");
    if (owner.id !== user.uid) return router.push("/");

    try {
      await firebase.db.collection("products").doc(id).delete();
      router.push("/");

    } catch (error) {
      console.log(error);
    }
  }

  return (
      <Layout>
        <>
          {error ? <Error404/> : (
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
                      <form
                        onSubmit={addComment}
                      >
                        <Field>
                          <input
                            type="text"
                            name="message"
                            onChange={onChangeComment}
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
                  {comments.length === 0 ? "There are no comments" : (
                    <ul>
                      {comments.map(comment => (
                        <li css={css`
                          border: 1px solid #e1e1e1;
                          padding: 2rem;
                        `}>
                          <p>{comment.message}</p>
                          <p>Write by:
                            <span css={css`
                              font-weight: bold;
                            `}>{" "}{comment.userName}</span>
                          </p>
                          {isOwner(comment.userId) && <ProductOwner>Is Owner</ProductOwner>}
                        </li>
                      ))}
                    </ul>
                  )}
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
                    `}>{votes} Votes</p>

                    {user && (
                      <Button
                        onClick={voteProduct}
                      >Vote</Button>
                    )}
                  </div>
                </aside>
              </ProductContainer>

              {isOwnerToRemove() &&
                <Button
                  onClick={deleteProduct}
                >Delete Product</Button>
              }
            </div>
          )}
        </>
      </Layout>
  );
}

export default Product;