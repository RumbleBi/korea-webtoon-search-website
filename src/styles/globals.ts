import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --font-color: #fff;
  --font-size-lg: 1.5rem;
  --font-size-md: 1rem;
  --font-size-sm: 0.625rem;
  --background-main: #6b3fa0;
}
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }
  input,
  select,
  button {
    border: none;
    outline: none;
    box-sizing: border-box;
    background: none;
  }
  button {
    background: none;
    cursor: pointer;
  }
  ol,
  li,
  ul {
    list-style: none;
  }
`;
export default GlobalStyle;
