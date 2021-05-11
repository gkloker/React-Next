import React from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/react";

const InputText = styled.input`
  border: 1px solid var(--grey3);
  padding: 1rem;
  min-width: 300px;
`;

const InputSubmit = styled.button`
  width: 3rem;
  height: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
  background-repeat: no-repeat;
  background-color: white;
  position: absolute;
  right: 1rem;
  top: 1px;
  border: none;
  text-indent: -9999px;
  
  &:hover {
    cursor: pointer;
  }
`;

const Search = () => {
  return (
    <form
      css={css`
        position: relative;
      `}
    >
      <InputText
        type="text"
        placeholder="Search Products"
      />
      <InputSubmit type="submit">Search</InputSubmit>
    </form>
  )
}

export default Search;