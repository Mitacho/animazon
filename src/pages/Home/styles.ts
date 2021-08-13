import styled from "styled-components";

export const Main = styled.main`
  padding-bottom: 1rem;

  background-color: var(--bg);
`;

export const ProductList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 20rem);
  grid-gap: 1rem;
  justify-content: center;

  margin-top: 4rem;
`;

export const Centered = styled.div`
  display: grid;
  place-items: center;
`;

export const Text = styled.h3`
  text-align: center;
  vertical-align: center;

  font-size: 2rem;
  
  color: var(--text-dark);
`;