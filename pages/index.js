import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import { FirebaseContext } from "../firebase";
import ProductsDetails from "../components/layout/ProductsDetails";

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

    console.log("index.js :", products);
    setProducts(products);
  }

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <div className="bg-white">
              {products.map(product => (
                <ProductsDetails key={product.id} product={product}/>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home;