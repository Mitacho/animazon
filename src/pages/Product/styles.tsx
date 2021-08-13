import styled from "styled-components";

export const Main = styled.main`
  padding: 1rem;

  background-color: var(--bg);
`;

export const ProductDetails = styled.section`
  display: grid;
  grid-template-columns: 20rem 1.5fr 0.75fr;
  justify-content: center;
  grid-gap: 1rem;

  @media(max-width: 1180px) {
    grid-template-columns: 20rem 3fr;
  }

  @media(max-width: 856px) {
    grid-template-columns: 100%;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 1rem;

  background-color: var(--bg-accent);

  border-radius: 0.25rem;
  border: 1px solid rgba(50, 50, 50, 0.15);
`;

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerRowSpacedBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;

  margin: 1rem 0;
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

export const TextRating = styled.span`
  margin-left: 1rem;

  font-size: 1rem;
  font-weight: 400;
  
  color: var(--text-blue);
`;

export const TextStock = styled.span`
  font-size: 1rem;
  font-weight: 400;
  
  color: var(--text-blue);
`;

export const Figure = styled.figure`
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;

  color: var(--text-dark);
`;

export const SectionSubtitle = styled.h3`
  margin: 1rem 0;

  font-size: 1.15rem;
  font-weight: 600;

  color: var(--text-dark);
`;

export const Description = styled.ul`
  list-style-position: inside;
`;

export const DescriptionListItem = styled.li`
  color: var(--text-dark);
`;

export const BuySection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 400;

  color: var(--text-red);
`;

export const Shipping = styled.p`
  margin: 2rem 0;

  font-size: 1rem;
  font-weight: 400;

  color: var(--text-dark);
`;

export const Button = styled.button`
  cursor: pointer;

  margin-top: 0.5rem;
  padding: 1rem;

  background-color: var(--brand);
`;

export const ButtonText = styled.span`
  font-size: 1rem;
  font-weight: 400;

  color: var(--text-dark);
`;