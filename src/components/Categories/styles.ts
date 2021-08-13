import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  overflow-x: auto;

  margin-top: 4rem;

  @media(min-width: 1200px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  margin: 0 1rem;

  border-radius: 0.25rem;
  border: 1px solid rgba(50, 50, 50, 0.15);

  background-color: var(--bg-accent);
`;

export const Image = styled.img`
  width: 15.625rem;
  height: 15.625rem;
`;

export const Figure = styled.figure`
  position: relative;
`;

export const Figcaption = styled.figcaption`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.90);

  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
`;

export const FigcaptionText = styled.h3`
  font-size: 1.25rem;

  color: var(--text-blue);
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