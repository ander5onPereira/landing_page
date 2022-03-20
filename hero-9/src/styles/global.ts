import { createGlobalStyle } from "styled-components";
import Back1 from "../assets/EllipseBlue1.png";
import Back2 from "../assets/EllipseBlue2.png";
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
    background: url(${Back2}) no-repeat ,url(${Back1}) no-repeat ;
    background-size: 42%,48%;
    background-position: top right,top right;
    font-family: "Poppins",sans-serif;
  }
  bottom {
    background-color: none;
    border:none ;
    outline:none;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }
  a{
    text-decoration:none ;
    outline:none ;
  }
`;
export default GlobalStyle;
