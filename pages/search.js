import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import ProductDetails from "../components/layout/ProductDetails";
import useProducts from "../hooks/useProducts";

const Search = () => {
  const router = useRouter();
  const {query: {q}} = router;

  // all products
  const {products} = useProducts("created");
  const [findProduct, setFindProduct] = useState([]);

  useEffect(() => {
    const search = q.toLocaleLowerCase();
    const filter = products.filter(product => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
      )
    });
    setFindProduct(filter);
  }, [q, products]);

  return (
    <div>
      <Layout>
        <div className="products-list">
          <div className="container">
            <div className="bg-white">
              {findProduct.map(product => (
                < ProductDetails key={product.id} product={product}/>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Search;