import styled from "styled-components";

export const Container = styled.button`
  width: 130px;
  height: 42px;
  border-radius: 5px;
  border: 1px solid #17a4d0;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  margin-left: 25px;
  transition: all 0.5s ease-out;
  :hover {
    background-color: #17a4d0;
    color: #ffffff;
    box-shadow: 0 0 4px 1px #555;
  }
`;
