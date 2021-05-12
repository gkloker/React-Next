import React, { useState } from "react";
import { css } from "@emotion/react";
import Router from "next/router";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";
import firebase from "../firebase";

// Validations
import useValidation from "../hooks/useValidation";
import validateLogin from "../helpers/validateLogin";

const INITIAL_STATE = {
  email: "",
  password: ""
}

const Login = () => {
  const [msgError, setMsgError] = useState(false);

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidation(INITIAL_STATE, validateLogin, SignIn);

  async function SignIn() {
    try {
      await firebase.login(values.email, values.password);
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
        >Login</h1>
        <Form
          onSubmit={handleSubmit}
          noValidate
        >
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
            value="Sign in"
          />
        </Form>
      </Layout>
    </div>
  )
}

export default Login;