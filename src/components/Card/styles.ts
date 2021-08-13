import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1rem;

  border-radius: 0.25rem;
  border: 1px solid rgba(50, 50, 50, 0.15);

  background-color: var(--bg-accent);
`;

export const Image = styled.img`
  width: 100%;
  height: 12.5rem;

  object-fit: cover;
`;

export const Figure = styled.figure`
`;

export const Figcaption = styled.figcaption`
  width: 100%;

  margin: 0.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg-accent);
`;

export const FigcaptionText = styled.h3`
  font-size: 1.15rem;
  font-weight: 400;

  color: var(--text-dark);
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;

  margin-top: 1rem;
`;

export const Currency = styled.small`
  font-size: 0.75rem;

  margin-right: 0.25rem;
  
  color: var(--text-dark);
`;

export const Amount = styled.span`
  font-size: 1.25rem;
  font-weight: 600;

  color: var(--text-dark);
`;

export const Shipping = styled.p`
  margin-top: 0.5rem;
`;

export const Text = styled.span`
  font-size: 1.25rem;

  color: var(--text-dark);
`;

export const PrimeText = styled.span`
  font-weight: 600;
  font-size: 1.15rem;

  color: var(--text-blue-secondary);
`;

export const TextBold = styled.b`
  font-weight: 600;
  font-size: 1.45rem;

  color: var(--text-dark);
`;