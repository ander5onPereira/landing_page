import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0 ;
    margin:0 ;
    box-sizing:border-box ;
  }
  html,body{
    height: 100vh;
  }
  body{
    background-color: #F8FDFF;
  }
  bottom {
    background-color: none;
    border:none ;
    outline:none;
  }
  a{
    text-decoration:none ;
    outline:none ;
  }
`;
export default GlobalStyle;
