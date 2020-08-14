import {
  createGlobalStyle
} from 'styled-components';
import theme from './theme';
const {
  fontSizes,
  fonts
} = theme;

const GlobalStyle = createGlobalStyle `
  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0px;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    font-family: system-ui;
    font-size: ${fontSizes.xl};
    letter-spacing: 0.5px;
    color: black;
  }
`
export default GlobalStyle;