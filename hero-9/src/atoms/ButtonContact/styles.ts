import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--primary);
  color: var(--white);
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  width: 13.3rem;
  height: 4rem;
  border-radius: 6.6rem;
  border: 0.06rem solid var(--primary);
  margin-top: 3.3rem;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: #fff;
    color: var(--primary);
  }
`;
