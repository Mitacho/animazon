import styled from "styled-components";

export const Card = styled.div`
  min-height: 21.875rem;
  min-width: 18.75rem;
  height: 21.875rem;
  width: 18.75rem;

  padding: 1rem;
  margin: 0 1rem;

  border-radius: 0.25rem;
  border: 1px solid rgba(50, 50, 50, 0.15);

  background-color: var(--bg-accent);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Figcaption = styled.figcaption`
  margin-bottom: 1rem;
`;

export const FigcaptionText = styled.h3`
  font-size: 1.25rem;

  color: var(--text-dark);
`;