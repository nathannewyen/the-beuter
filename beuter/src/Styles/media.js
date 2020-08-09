import {
  css
} from 'styled-components';

const sizes = {
  mobileS: '320',
  mobileM: '375',
  mobileL: '425',
  tablet: '800',
  laptop: '1024',
  laptopL: '1440',
  desktop: '2000',
  giantDesktop: '2800'
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css `
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
  return accumulator;
}, {});

export default media;