import { createGlobalStyle } from "styled-components";
import Back1 from "../assets/EllipseBlue1.png";
import Back2 from "../assets/EllipseBlue2.png";
const GlobalStyle = createGlobalStyle`
  :root{
    --white:#FFFFFF;
    --background:#F8FDFF;
    --primary:#17a4d0;
    --secundary:#daaaff;
    --darkblue:#1e255e;
    --gray:#555;
  }
  *{
    padding:0 ;
    margin:0 ;
    box-sizing:border-box ;
  }
  html,body{
    height: 100vh;
    @media(max-width:1080px){
      font-size: 93.75%; //15px
    }
    @media(max-width:720px){
      font-size: 87.5%; //14px
    }
  }
  body{
    background-color: var(--background);
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
