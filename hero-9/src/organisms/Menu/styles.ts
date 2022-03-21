import styled from "styled-components";

interface PropsMobile{
  type?: string;
  active?: boolean;
}
export const MenuList = styled.ul`
  margin-left: auto;
  @media (max-width: 720px) {
    ${(props: PropsMobile) =>
      props.active
        ? `
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      `
        : `
        display: none;
      `}
  }
`;
export const ItemList = styled.li`
  display: inline-block;
  margin-right: 1.6rem;
  font-weight: 500;
  align-items: center;
  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    font-size: x-large;
  }

  &:hover {
    a {
      color: var(--primary);
    }
  }
  a {
    color: var(--darkblue);
    transition: color 0.5s ease;
  }
`;
