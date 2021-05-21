import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import ProductDetails from "../components/layout/ProductDetails";

const Home = () => {
  const [products, setProducts] = useState([]);

  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const getProducts = () => {
      firebase.db.collection("products").orderBy("created", "desc").onSnapshot(SnaptshotManager);
    }
    getProducts();
  }, []);

  function SnaptshotManager(snaptshot) {
    const products = snaptshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    setProducts(products);
  }

  return (
    <div>
      <Layout>
        <div className="products-list">
          <div className="container">
            <div className="bg-white">
              {products.map(product => (
                < ProductDetails key={product.id} product={product}/>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home;