import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  display: grid;
  place-items: center;

  padding: 3rem 0;

  background-color: rgb(218, 247, 255);
`;

export const MessageContainer = styled.div`
  display: flex;

  max-width: 800px;
`;

export const Cards = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  overflow-x: auto;

  margin-top: 4rem;
  
  @media(min-width: 984px) {
    justify-content: center;
  }
`;

export const Centered = styled.div`
  display: grid;
  place-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  vertical-align: center;

  font-size: 2rem;
  
  color: var(--text-dark);
`;

export const Image = styled.img`
  display: none;

  height: 50%;
  width: 50%;
  
  @media(min-width: 1300px) {
    display: block;
  }
`;