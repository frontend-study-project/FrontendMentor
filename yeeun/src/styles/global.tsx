import { css } from '@emotion/react';
import '@fontsource/nunito-sans';

export const globalStyles = css`
  @import url(https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800);
  body {
    font-family: 'Nunito Sans', '-apple-system', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #171311;
    background: #fafafa;
  }
  body * {
    box-sizing: border-box;
  }
  body,
  div,
  h1,
  h2,
  ul,
  button {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  button,
  input {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    border: none;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;
