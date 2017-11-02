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

  .card-body {
    min-width: 15rem;
  }
`;
