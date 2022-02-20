import React from "react";
import Head from "./Head";
import { Container } from "./Header";
import ImageContact from "../assets/contato.jpg";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
`;

const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  transform: translateX(-20px);
  opacity: 0;
  animation: anime 0.3s forwards;
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-top: 1rem;
    }
  }

  @keyframes anime {
    to {
      transform: initial;
      opacity: initial;
    }
  }
`;

export default function Contact() {
  return (
    <>
      <Container>
        <Head title="Ranek | Contato" />
        <h1>Contato</h1>
        <Infos>
          <Image src={ImageContact} alt="contato" />
          <div>
            <h2>Entre em contato</h2>
            <ul>
              <li>wellington@email.com</li>
              <li>(15) 99999-9999</li>
              <li>Rua fulano de tal, 23 - Brazil</li>
            </ul>
          </div>
        </Infos>
      </Container>
    </>
  );
}
