import styled from "styled-components";

export const Main = styled.main`
  padding: 1rem;
`;

export const ProductList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-gap: 1rem;
  justify-content: center;

  margin-top: 4rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;

  text-transform: capitalize;

  color: var(--text-dark);
`;

export const Centered = styled.div`
  display: flex;
  place-items: center;
`;

export const Text = styled.h3`
  text-align: center;
  vertical-align: center;

  font-size: 2rem;
  
  color: var(--text-dark);
`;