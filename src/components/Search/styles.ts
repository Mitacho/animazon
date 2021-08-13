import styled from "styled-components";

export const Form = styled.form`
  height: 2.5rem;
  width: 800px;

  display: flex;
  align-items: center;

  border-radius: 0.25rem;
`;

export const Select = styled.select`
  height: 100%;
  width: 4rem;

  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;

  background-color: var(--bg-accent-secondary);
  color: var(--text-dark);

  border-radius: 0.25rem 0 0 0.25rem;
  border-right: 1px solid rgba(50, 50, 50, 0.15);

  padding: 0 0.5rem;

  option {
    background-color: var(--bg-accent-secondary);
    color: var(--text-dark);
  }
`;

export const SearchButton = styled.button`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;

  cursor: pointer;

  background-color: var(--brand);
  color: var(--text-dark);

  border-radius: 0 0.25rem 0.25rem 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  padding: 1rem;

  background-color: var(--bg-accent);
  color: var(--text-dark);

  ::placeholder {
    color: var(--text-dark);
  }
`;