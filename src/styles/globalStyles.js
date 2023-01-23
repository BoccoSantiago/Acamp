import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
html{
    margin: 0;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    max-width: 100vw;
    padding: 0;
    margin: 0;
}

 body{
    display: flex;
    justify-content: center;
    margin: 0;
    overflow-x: hidden;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background-color: ${colors.dirtyWhite};
   
  }

  h1{
    font-weight: 600;
    font-style: normal;
    font-size: 48px ;
    line-height: 53px;
    letter-spacing: -2px;
    margin: 0;
    color: ${colors.black}; 
  }
  h2{
    font-weight: 600;
    font-style: normal;
    font-size: 36px;
    margin: 0;
    line-height: 110%;
    letter-spacing: -1px;
    color: ${colors.black}; 
  }

  h3{
    font-weight: 600;
    font-style: normal;
    margin: 0;
    font-size: 26px;
    line-height: 120%;
    letter-spacing: -1px;
    color: ${colors.black}; 
  }

  h4{
    font-weight: 600;
    font-style: normal;
    margin: 0;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: -0.5px;
    color: ${colors.black}; 
  }
  h5 {
    font-weight: 600;
    font-style: normal;
    margin: 0;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.5px;
    color: ${colors.black}; 
  }

  h6 {
    font-weight: 500;
    font-style: normal;
    margin: 0;
    font-size: 12px;
    line-height: 140%;
    color: ${colors.black}; 
  
  }



`;

export default GlobalStyle;
