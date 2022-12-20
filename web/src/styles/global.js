import { createGlobalStyle } from 'styled-components';

 const Global = createGlobalStyle`
  
  :root {
    --primary-color: #27b1bf;
    --link-color: #176585;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: whitesmoke;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default Global;