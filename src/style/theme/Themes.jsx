import { createGlobalStyle } from "styled-components";
const allThemes = {};


allThemes.Standard = createGlobalStyle`

    /* colors */
    :root {
        --color-primary-default: #314ce6;
        --color-primary-light: #6e91dc;
        --color-primary-dark: #122ea9;

        --color-secondary-default: #d16bfa;
        --color-secondary-light: #ec84fa;
        --color-secondary-dark: #c929e9;
        
        /* shades */
        --color-white-1: #ffffff;
        --color-white-2: #f5f5f5;
        --color-white-3: #ececec;
     
        --color-black-1: #000000;
        --color-black-2: #141414;
        --color-black-3: #242424;

         --color-gray-1: #212121;
        --color-gray-2: #575757;
        --color-gray-3: #acacac;

        /* positive colors */
        --color-positive-1: #a0e72e;
    }
    

`;

allThemes.Red = createGlobalStyle`

    /* colors */
    :root {
        --color-primary-default: #e65531;
        --color-primary-light: #dc846e;
        --color-primary-dark: #a93012;

        --color-secondary-default: #6bfaf3;
        --color-secondary-light: #84e2fa;
        --color-secondary-dark: #29b3e9;
        
        /* shades */
        --color-white-1: #ffffff;
        --color-white-2: #f5f5f5;
        --color-white-3: #ececec;
     
        --color-black-1: #000000;
        --color-black-2: #141414;
        --color-black-3: #242424;

         --color-gray-1: #212121;
        --color-gray-2: #575757;
        --color-gray-3: #acacac;

        /* positive colors */
        --color-positive-1: #a0e72e;
    }
    

`;

allThemes.Green = createGlobalStyle`

    /* colors */
    :root {
        --color-primary-default: #82e631;
        --color-primary-light: #6edc7d;
        --color-primary-dark: #5ba912;

        --color-secondary-default: #6d6bfa;
        --color-secondary-light: #8486fa;
        --color-secondary-dark: #5329e9;
        
        /* shades */
        --color-white-1: #ffffff;
        --color-white-2: #f5f5f5;
        --color-white-3: #ececec;
     
        --color-black-1: #000000;
        --color-black-2: #141414;
        --color-black-3: #242424;

         --color-gray-1: #212121;
        --color-gray-2: #575757;
        --color-gray-3: #acacac;

        /* positive colors */
        --color-positive-1: #a0e72e;
    }
    

`;

export default allThemes;
