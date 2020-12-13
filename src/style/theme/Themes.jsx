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

         --color-gray-1: #2b2b2b;
        --color-gray-2: #646464;
        --color-gray-3: #9c9c9c;
        --color-gray-4: #cccccc;
        /* tint colors */
        --color-tint-1: #e8ebf4;
        --color-tint-2: #ececfc;
        --color-tint-3: #ecfafc;
        --color-tint-4: #f2ecfc;
        
        --color-tint-1-dark: #d7d9e2;
        --color-tint-2-dark: #b7b7d3;
        --color-tint-3-dark: #c1d3d6;
        --color-tint-4-dark: #ccc5da;

        /* positive colors */
        --color-positive-1: #2ee747;

        /* shadows */
        --text-shadow-1: .2rem .2rem 1rem  rgba(0, 0, 0, .3);
        --text-shadow-2: .1rem .1rem .4rem  rgba(0, 0, 0, .2);

        --box-shadow-1: .3rem .3rem 1.3rem  rgba(0, 0, 0, .1);
    }
    

`;

allThemes.Red = createGlobalStyle`

    /* colors */
    :root {
        --color-primary-default: #e64c31;
        --color-primary-light: #dc846e;
        --color-primary-dark: #a93512;

        --color-secondary-default: #c56bfa;
        --color-secondary-light: #c584fa;
        --color-secondary-dark: #ac29e9;
        
        /* shades */
        --color-white-1: #ffffff;
        --color-white-2: #f5f5f5;
        --color-white-3: #ececec;
     
        --color-black-1: #000000;
        --color-black-2: #141414;
        --color-black-3: #242424;

         --color-gray-1: #2b2b2b;
        --color-gray-2: #646464;
        --color-gray-3: #9c9c9c;
        --color-gray-4: #cccccc;
        /* tint colors */
        --color-tint-1: #e8ebf4;
        --color-tint-2: #ececfc;
        --color-tint-3: #ecfafc;
        --color-tint-4: #f2ecfc;

        --color-tint-1-dark: #cad0e4;
        --color-tint-2-dark: #b7b7d3;
        --color-tint-3-dark: #c1d3d6;
        --color-tint-4-dark: #ccc5da;

        /* positive colors */
        --color-positive-1: #a0e72e;

        /* shadows */
        --text-shadow-1: .2rem .2rem 1rem  rgba(0, 0, 0, .3);
        --text-shadow-2: .1rem .1rem .4rem  rgba(0, 0, 0, .2);
    }
    

`;

export default allThemes;
