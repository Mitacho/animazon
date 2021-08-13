import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: var(--nav);
`;

export const Nav = styled.nav`
  height: 3.75rem;
  width: 100%;

  display: flex;
  align-items: center;

  padding: 1rem;

  @media(max-width: 1300px) {
    display: none;
  }
`;

export const ResponsiveNav = styled.nav`
  height: 3.75rem;
  width: 100%;

  display: none;

  padding: 1rem;
  
  @media(max-width: 1300px) {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.35rem;
  font-weight: 700;
`;

export const Anchor = styled.a`
  color: var(--text);
`;

export const List = styled.ul`
  width: 100%;

  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  display: grid;
  place-items: center;

  margin: 0 0.25rem;
`;

export const Text = styled.span`
`;

export const TextSmall = styled.span`
  font-size: 0.75rem;
`;

export const TextMedium = styled.h3`
  font-size: 1rem;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;

  cursor: pointer;
`;