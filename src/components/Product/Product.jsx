import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Head from "../Head";
import { Container } from "../Header";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
  transform: translateX(-20px);
  opacity: 0;
  animation: anime 0.3s forwards;

  img {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  span {
    background-color: #91fb5d;
    padding: 0.5rem;
    border-radius: 8px;
  }

  @keyframes anime {
    to {
      transform: initial;
      opacity: initial;
    }
  }
`;

export default function Product() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  async function getProduct(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setProduct(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [params.id]);

  if (product === null) return null;

  return (
    <Container>
      <Head title={`Ranek | ${product.nome}`} description="Produtos" />
      {!product && <p>Carregando ...</p>}
      <ProductContainer>
        <div>
          {product.fotos.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.titulo} />
          ))}
        </div>
        <div>
          <h2>Produto: {product.nome}</h2>
          <span>R$ {product.preco}</span>
          <p>{product.descricao}</p>
        </div>
      </ProductContainer>
    </Container>
  );
}
