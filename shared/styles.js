import { css, Global } from '@emotion/react';

const normalizeStyles = css`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    -webkit-appearance: button;
  }

  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;

const fontsStyles = css`
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 300;
    src: url(/fonts/rubik-light.woff2) format('woff2'), url(/fonts/rubik-light.woff) format('woff'),
      url(/fonts/rubik-light.ttf) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/rubik-regular.woff2) format('woff2'), url(/fonts/rubik-regular.woff) format('woff'),
      url(/fonts/rubik-regular.ttf) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 500;
    src: url(/fonts/rubik-medium.woff2) format('woff2'), url(/fonts/rubik-medium.woff) format('woff'),
      url(/fonts/rubik-medium.ttf) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: rubik;
    font-style: normal;
    font-weight: 700;
    src: url(/fonts/rubik-bold.woff2) format('woff2'), url(/fonts/rubik-bold.woff) format('woff'),
      url(/fonts/rubik-bold.ttf) format('truetype');
    font-display: swap;
  }
`;

export const globalStyles = (
  <Global
    styles={css`
      ${normalizeStyles};
      ${fontsStyles};

      body,
      html {
        height: 100%;
        width: 100%;
        min-width: 1144px;
        margin: 0;
        padding: 0;
        font-family: rubik, arial, sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 1.15;
        color: #383838;
        background-color: #f5f5f5;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
      }

      *,
      ::after,
      ::before {
        box-sizing: inherit;
      }

      a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s, opacity 0.3s;
        cursor: pointer;
        outline: 0;
      }

      textarea {
        resize: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }
    `}
  />
);

export const visuallyHiddenStyles = css`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;

export const resetButtonStyles = css`
  padding: 0;
  background: 0 0;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  text-align: center;
  word-break: break-word;
  word-wrap: wrap;
  overflow-wrap: break-word;
  transition: color 0.3s, background-color 0.3s;
  outline: 0;
`;
