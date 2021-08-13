import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  
  background-color: var(--subnav);
`;

export const Nav = styled.nav`
  height: 2.5rem;

  display: flex;
  align-items: center;

  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Anchor = styled.a`
  color: var(--text);
`;

export const List = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
`;

export const AnchorHeading = styled.h5`
  font-size: 0.875rem;
  font-weight: 400;
`;

export const ListItem = styled.li`
  margin-right: 0.5rem;
`;