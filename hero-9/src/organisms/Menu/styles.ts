import styled from "styled-components";

export const MenuList = styled.ul`
  margin-left: auto;
`;
export const ItemList = styled.li`
  display: inline-block;
  margin-right: 1.6rem;
  font-weight: 500;

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
