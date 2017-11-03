import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  .btn {
    cursor: pointer;
  }

  div.card {
    cursor: pointer;
    min-width: 15rem;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.08);
    transition: box-shadow 0.3s ease-in-out;
  }

  div.card:hover {
    box-shadow: 0 5px 15px #17a2b8;
  }

  div.card::after {
    box-shadow: 0 5px 15px #17a2b8;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  div.card:hover::after {
     opacity: 1;
  }
`;
