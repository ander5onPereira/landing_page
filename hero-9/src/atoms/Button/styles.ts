import styled from "styled-components";

export const Container = styled.button`
  width: 8.6rem;
  height: 2.8rem;
  border-radius: 0.3rem;
  border: 0.06rem solid var(--primary);
  background-color: transparent;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-left: 1.6rem;
  transition: all 0.5s ease-out;
  :hover {
    background-color: var(--primary);
    color: var(--white);
    box-shadow: 0 0 0.25rem 0.06rem var(--gray);
  }
`;
