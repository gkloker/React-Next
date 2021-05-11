import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Search from "../ui/Search";
import Nav from "./Nav";
import { Button } from "../ui/Button";


const ContenedorHeader = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: var(--orange);
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  margin-right: 2rem;
`;


const Header = () => {
  const user = false;

  return (
    <header
      css={css`
        border-bottom: 2px solid var(--grey3);
        padding: 1rem 0;
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>P</Logo>
          </Link>

          <Search />

          <Nav />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            
          `}
        >
          {user ? (
            <>
              <p
                css={css`
                margin-right: 2rem;
              `}
              >Hola: Gabriel</p>

              <Button
                bgColor="true"
              >Logout</Button>
            </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    bgColor="true"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/create-account">
                  <Button>
                    Create Account
                  </Button>
                </Link>
              </>
            )}
        </div>
      </ContenedorHeader>
    </header>
  )
}

export default Header;