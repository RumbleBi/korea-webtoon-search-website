import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  --color-text: #fff;
}
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
    color: white;
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
