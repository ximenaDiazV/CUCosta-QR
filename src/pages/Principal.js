import React from "react";
import { createGlobalStyle } from "styled-components";
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
      <SeccionDeslizante />
    </>
  );
};

export default Principal;
