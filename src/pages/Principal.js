import React from "react";
import { createGlobalStyle, StyleSheetManager } from "styled-components";
import SeccionDeslizante from "./SeccionDeslizante";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16rem; /* Tamaño base de la fuente */
  }
`;

const Principal = () => {

  return (
    <>
      <GlobalStyle />
      <StyleSheetManager shouldForwardProp={(prop) => !['marginRight', 'bgColor', 'marginLeft'].includes(prop)}>
        <SeccionDeslizante />
      </StyleSheetManager>
    </>
  );
};

export default Principal;
