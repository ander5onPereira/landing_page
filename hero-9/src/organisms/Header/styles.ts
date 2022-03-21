import styled from "styled-components";

export const Box = styled.header`
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px){
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
