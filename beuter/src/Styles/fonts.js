import {
    css
} from 'styled-components';

import GothamBlack from '../Fonts/GothamBold.ttf';
import GothamBook from '../Fonts/GothamBook.ttf';
import GothamMedium from '../Font/GothamMedium.tff'
import GothamLight from '../Fonts/GothamLight.ttf';

const FontFaces = css `
@font-face {
    font-family: 'Gotham';
    src: local('Gotham'), local('Gotham'),
    url(${GothamBlack}) format('tff'),
    url(${GothamBlack}) format('tff');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Gotham';
    src: local('Gotham'), local('Gotham'),
    url(${GothamBook}) format('tff'),
    url(${GothamBook}) format('tff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Gotham';
    src: local('Gotham'), local('Gotham'),
    url(${GothamMedium}) format('tff'),
    url(${GothamMedium}) format('tff');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Gotham';
    src: local('Gotham'), local('Gotham'),
    url(${GothamLight}) format('tff'),
    url(${GothamLight}) format('tff');
    font-weight: 300;
    font-style: normal;
}
`

export default FontFaces;