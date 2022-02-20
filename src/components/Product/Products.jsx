import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Head from "../Head";
import { Container } from "../Header";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  transform: translateX(-20px);
  opacity: 0;
  animation: anime 0.3s forwards;

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  @keyframes anime {
    to {
      transform: initial;
      opacity: initial;
    }
  }
`;

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts(url) {
    const response = await fetch(url);
    const json = await response.json();
    setProducts(json);
  }

  useEffect(() => {
    getProducts("https://ranekapi.origamid.dev/json/api/produto");
  }, []);

  return (
    <>
      <Head title="Ranek | Produtos" />
      <Container>
        <h1>Produtos</h1>
        <ProductsContainer>
          {products.map((product) => (
            <Link to={`product/${product.id}`} key={product.id}>
              <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
              <h2>{product.nome}</h2>
            </Link>
          ))}
        </ProductsContainer>
        {products.length < 1 && <p>Carregando ...</p>}
      </Container>
    </>
  );
}
