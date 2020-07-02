import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 770px) {
      font-size: 50%;
    }
  }

  body {
    font-size: 1.6rem;
    background-color: #222;
  }

  html,
  body {
    height: 100vh;
    font-family: "Source Sans Pro";
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }
`;
