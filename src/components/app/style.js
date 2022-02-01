import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  
  body,
  html {
    margin: 0;    
  }
  
  html {
    height: 100%;
    margin-left: calc(100vw - 100%);
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;  
    color: ${(props) => props.theme.colorBlackForText};
    background-color: ${(props) => props.theme.colorBackground};
}`;
