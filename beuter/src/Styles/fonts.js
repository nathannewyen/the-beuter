import {
    css
} from 'styled-components';

import GothamBlackWOFF2 from '../Fonts/GothamBold.woff2';
import GothamBookWOOF2 from '../Fonts/GothamBook.woff2';
import GothamMediumWOFF2 from '../Font/GothamMedium.woff2';
import GothamLightWOFF2 from '../Fonts/GothamLight.ttf';

const FontFaces = css `
@font-face {
    font-family: 'Gotham';
    src: local('Gotham'), local('Gotham'),
    url(${GothamBlackWOFF2}) format('woff2'),
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Gotham';
    src: local('Gotham'), local('Gotham'),
    url(${GothamBookWOOF2}) format('woff2'),
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Gotham';
    src: local('Gotham'), local('Gotham'),
    url(${GothamMediumWOFF2}) format('woff2'),
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Gotham';
    src: local('Gotham'), local('Gotham'),
    url(${GothamLightWOFF2}) format('woff2'),
    font-weight: 300;
    font-style: normal;
}
`

export default FontFaces;