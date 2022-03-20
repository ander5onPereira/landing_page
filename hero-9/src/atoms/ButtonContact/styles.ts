import styled from "styled-components";

export const Container = styled.button`
  background-color: var(--primary);
  color: var(--white);
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  border: 1px solid var(--primary);
  margin-top: 50px;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: #fff;
    color: var(--primary);
  }
`;
