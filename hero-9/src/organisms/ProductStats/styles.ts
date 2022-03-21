import styled from "styled-components";

export const Container = styled.div`
  text-align: right;
  position: relative;
  width: 50%;
  img {
    margin-left: 7.2rem;
  }
  @media (max-width: 960px) {
    width: 70%;
    img {
      width: 40rem;
    }
  }
  @media (max-width: 720px) {
    width: 95%;
    img {
      width: 30rem;
    }
  }
`;
