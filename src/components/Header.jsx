import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Buttons = styled.button`
  padding: 1rem 1.5rem;
  background-color: #eeef;
  border: none;
  border-radius: 8px;
  margin-top: 2rem;

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }

  &:last-child {
    margin-left: 2rem;
  }
`;

export default function Header() {
  return (
    <>
      <Container>
        <Buttons>
          <Link to="/">Produtos</Link>
        </Buttons>
        <Buttons>
          <Link to="contact">Contato</Link>
        </Buttons>
      </Container>
    </>
  );
}
