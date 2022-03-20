import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 5rem;
  background-color: var(--secundary);
  color: var(--white);
  width: 10.2rem;
  height: 5.1rem;
  border-radius: 0.8rem;
  text-align: left;
  padding: 0.7rem;
  overflow: hidden;
  animation: showOnActivity 1s linear forwards;
  opacity: 0;
  top: 3.3rem;

  small {
    font-size: 1rem;
  }
  div {
    display: flex;
    align-items: center;
    span {
      font-size: 2rem;
      font-weight: 400;
      margin-right: 0.3rem;
    }
  }
  i {
    width: 10.2rem;
    height: 5.1rem;
    position: absolute;
    border-radius: 3.3rem;

    &.circle1 {
      left: 6.9rem;
      top: -1.3rem;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      );
    }
    &.circle2 {
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      );
      left: 5.4rem;
      bottom: -3.3rem;
      transform: rotate(45deg);
    }
    &.circle3 {
      border: 0.1rem solid rgba(255, 255, 255, 0.3);
      transform: rotate(-72deg);
      top: -3.6rem;
      left: 3.1rem;
    }
  }
  @keyframes showOnActivity {
    from {
      opacity: 0;
      top: -3.3rem;
    }

    to {
      opacity: 1;
      top: 7rem;
    }
  }
`;
