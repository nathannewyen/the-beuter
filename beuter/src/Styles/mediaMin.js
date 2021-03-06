import {
  css
} from 'styled-components';

const sizes = {
  mobileS: '320',
  mobileM: '375',
  mobileL: '425',
  tablet: '801',
  laptop: '1024',
  laptopL: '1200',
  desktop: '2001',
  giantDesktop: '2800'
}

// iterate through the sizes and create a media template
export const mediaMin = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css `
        @media (min-width: ${emSize}em) {
          ${css(...args)};
        }
      `;
  return accumulator;
}, {});

export default mediaMin;