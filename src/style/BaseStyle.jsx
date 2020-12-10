import { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}
html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;
    text-rendering: optimizeSpeed;
    font-size: 1.6rem;
}
a {
    text-decoration: none;
    color: inherit;
}

::-moz-selection {
    background: var(--color-primary-light);
    color: white;
}
::selection {
    background: var(--color-primary-light);
    color: white;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

`;

export default BaseStyles;