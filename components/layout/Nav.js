import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../firebase";

const Navigation = styled.nav`
  padding-left: 2rem;
  
  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--grey2);
    font-family: "PT Sans", sans-serif;
    
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Nav = () => {
  const {user} = useContext(FirebaseContext);
  return (
    <Navigation>
      <Link href="/">Home</Link>
      <Link href="/populars">Popular</Link>
      {user && (
        <Link href="/new-product">New Product</Link>
      )}
    </Navigation>
  )
}

export default Nav;