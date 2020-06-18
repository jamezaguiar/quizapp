import { createGlobalStyle } from 'styled-components';

/**
 * COLOR PALLETE
 * #F2F5EA
 * #D6DBD2
 * #050532
 * #02020B
 * #080708
 * #DD0426
 */

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f2f5ea;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
