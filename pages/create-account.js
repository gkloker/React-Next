import React, { useState } from "react";
import { css } from "@emotion/react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
import firebase from "../firebase";

// Validations
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../helpers/validateCreateAccount";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
}

const CreateAccount = () => {
  const [msgError, setMsgError] = useState(false);

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidation(INITIAL_STATE, validateCreateAccount, createAccound);

  async function createAccound() {
    try {
      await firebase.register(values.name, values.email, values.password);
      Router.push("/");
    } catch (error) {
      console.log("There are an error: ", error.message);
      setMsgError(error.message);
    }
  }

  return (
    <div>
      <Layout>
        <h1
          css={css`
            text-align: center;
            margin-top: 5rem;
          `}
        >Create Account</h1>
        <Form
          onSubmit={handleSubmit}
          noValidate
        >
          <Field>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>
          {errors.name && <Error>{errors.name}</Error>}

          <Field>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>
          {errors.email && <Error>{errors.email}</Error>}

          <Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Field>
          {errors.password && <Error>{errors.password}</Error>}

          {msgError && <Error>{msgError}</Error>}
          <InputSubmit
            type="submit"
            value="Create Account"
          />
        </Form>
      </Layout>
    </div>
  )
}

export default CreateAccount;