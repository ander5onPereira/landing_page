import styled from "styled-components";
interface PropsButton {
  type?: string;
  active?: boolean;
}
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
  @media (max-width: 720px) {
    margin: 0;
    :hover {
      background-color: transparent;
      border: 0.06rem solid var(--primary);
      color: var(--gray);
      box-shadow: none;
    }
    :active {
      background-color: var(--primary);
      color: var(--white);
      transition: all 0.5s;
    }
    ${(props: PropsButton) => !props.active && `display:none;`}
  }
`;
