import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit } from "../components/ui/Form";
import useValidation from "../hooks/useValidation";
import validateCreateAccount from "../helpers/validateCreateAccount";

const CreateAccount = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    password: ""
  }

  const {
    values,
    errors,
    submitForm,
    handleSubmit,
    handleChange
  } = useValidation(INITIAL_STATE, validateCreateAccount, createAccound);

  function createAccound() {
    console.log("Creating account");
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
        <Form>
          <Field>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              name="name"
            />
          </Field>
          <Field>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              name="email"
            />
          </Field>
          <Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              name="password"
            />
          </Field>

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