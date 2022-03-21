import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  h1 {
    color: var(--darkblue);
    font-size: 3.5rem;
    font-weight: bold;
  }
  h6 {
    font-size: 1.1rem;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    padding-right: 10rem;
    margin-top: 1.6rem;
  }
  @media (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      text-align: center;
    }
    h6 {
      text-align: center;
    }
  }

  @media (max-width: 720px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    h1 {
      font-size: 2.5rem;
      text-align: center;
    }
    h6 {
      padding: 0;
      text-align: center;
    }
  }
`;
