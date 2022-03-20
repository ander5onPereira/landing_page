import styled from "styled-components";

export const Container = styled.button`
  width: 130px;
  height: 42px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-left: 25px;
  transition: all 0.5s ease-out;
  :hover {
    background-color: var(--primary);
    color: var(--white);
    box-shadow: 0 0 4px 1px var(--gray);
  }
`;
