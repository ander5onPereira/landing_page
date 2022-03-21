import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;

