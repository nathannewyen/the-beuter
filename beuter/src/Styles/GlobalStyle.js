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
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    font-family: ${fonts.GothamBlack};
    font-size: ${fontSizes.xl};
    color: black;
  }
`
export default GlobalStyle;