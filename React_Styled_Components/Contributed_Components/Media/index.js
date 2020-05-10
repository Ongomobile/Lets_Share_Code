import { css } from 'styled-components';

// You can add your own sizes  or adjust also
const sizes = {
  smPhPort: 320,
  mdPhPort: 380,
  lgPhPort: 414,
  smPhLand: 586,
  mdPhLand: 736,
  lgPhLand: 812,
  rgTabPort: 768,
  lgTabPort: 834,
  rgTabLand: 1024,
  lgTabLand: 1112,
  smLaptop: 1366,
  mdLaptop: 1440,
  smDesktop: 1680,
  mdDesktop: 1920,
  lgDesktop: 2560,
  custom1: 550,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

//Example Usage
// import media from './media';
// const Box = styled.div`
//   ${media.smPhLand`
//       background: red;
//    `}
// `;

// Component was inspired by the post from Samuel Resua
// https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
