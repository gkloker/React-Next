import React, { useState, useContext } from "react";
import { css } from "@emotion/react";
import Router, { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
import { FirebaseContext } from "../firebase";
import Error404 from "../components/layout/404";

// Validations
import useValidation from "../hooks/useValidation";
import validateCreateProduct from "../helpers/validateCreateProduct";

const INITIAL_STATE = {
  name: "",
  company: "",
  image: "",
  url: "",
  description: ""
}

const NewProduct = () => {
  // State from images
  const [imageName, setImageName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const [msgError, setMsgError] = useState(false);

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidation(INITIAL_STATE, validateCreateProduct, createProduct);

  const {name, company, image, url, description} = values;

  // Hook routing to redirect
  const router = useRouter();

  // Context operations crud firebase
  const {user,firebase} = useContext(FirebaseContext);

  async function createProduct() {
    // If user logout go to login
    if (!user) {
      return router.push("/login");
    }

    // Create object new product
    const product = {
      name,
      company,
      url,
      imageUrl,
      description,
      votes: 0,
      comments: [],
      created: Date.now(),
      owner: {
        id: user.uid,
        name: user.displayName
      }
    }

    // Insert in DB
    firebase.db.collection("products").add(product);
  }

  const handleUploadStart = () => {
    setProgress(0);
    setUploading(true);
  }

  const handleProgress = (progress) => setProgress({progress});

  const handleUploadError = (error) => {
    setUploading(error);
    console.log(error);
  }

  const handleUploadSuccess = (filename) => {
    setProgress(100);
    setUploading(false);
    setImageName(filename);
    firebase
      .storage
      .ref("products")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        setImageUrl(url);
      });
  };

  return (
    <div>
      <Layout>
        {!user ? <Error404 /> : (
          <>
            <h1
              css={css`
              text-align: center;
              margin-top: 5rem;
            `}
            >New Product</h1>
            <Form
              onSubmit={handleSubmit}
              noValidate
            >
              <fieldset>
                <legend>General Information</legend>

                <Field>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                {errors.name && <Error>{errors.name}</Error>}

                <Field>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your Company"
                    name="company"
                    value={company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                {errors.company && <Error>{errors.company}</Error>}

                <Field>
                  <label htmlFor="image">Image</label>
                  <FileUploader
                    accept="image/*"  //Acept images any format
                    id="image"
                    name="image"
                    randomizeFilename
                    storageRef={firebase.storage.ref("products")}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handleProgress}
                  />
                </Field>

                <Field>
                  <label htmlFor="url">URL</label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    placeholder="URL Product"
                    value={url}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                {errors.url && <Error>{errors.url}</Error>}
              </fieldset>

              <fieldset>
                <legend>About your product</legend>

                <Field>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Field>
                {errors.description && <Error>{errors.description}</Error>}
              </fieldset>


              {msgError && <Error>{msgError}</Error>}
              <InputSubmit
                type="submit"
                value="Create Product"
              />
            </Form>
          </>
        )}
      </Layout>
    </div>
  )
}

export default NewProduct;