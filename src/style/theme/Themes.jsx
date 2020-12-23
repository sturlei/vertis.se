import { createGlobalStyle } from "styled-components";
const allThemes = {};


allThemes['Light - blue'] = createGlobalStyle`

    /* colors */
    :root {
        --color-primary-default: #314ce6;
        --color-primary-light: #6e91dc;
        --color-primary-dark: #122ea9;

        --color-secondary-default: #b56bfa;
        --color-secondary-light: #ad84fa;
        --color-secondary-dark: #8329e9;
        
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
allThemes['Dark - Red'] = createGlobalStyle`

    /* colors */
    :root {
        --color-primary-default: #e63158;
        --color-primary-light: #dc6e6e;
        --color-primary-dark: #a9121a;

        --color-secondary-default: #fa6b9b;
        --color-secondary-light: #5f4757;
        --color-secondary-dark: #6c29e9;
        
        /* shades */
        --color-white-1: #222222;
        --color-white-2: #2e2e2e;
        --color-white-3: #414040;
     
        --color-black-1: #ffffff;
        --color-black-2: #f0f0f0;
        --color-black-3: #d8d6d6;

         --color-gray-1: #eee6e6;
        --color-gray-2: #c4c3c3;
        --color-gray-3: #6e6e6e;
        --color-gray-4: #504f4f;
        /* tint colors */
        --color-tint-1: #f4e8e8;
        --color-tint-2: #fcecf2;
        --color-tint-3: #fcecf5;
        --color-tint-4: #fcecf0;
        
        --color-tint-1-dark: #e2d7dd;
        --color-tint-2-dark: #d3b7c5;
        --color-tint-3-dark: #cac1d6;
        --color-tint-4-dark: #d2c5da;

        /* positive colors */
        --color-positive-1: #2e94e7;

        /* shadows */
        --text-shadow-1: .2rem .2rem .1rem  #ffffff;
        --text-shadow-2: .1rem .1rem .4rem  #3d3c3c;

        --box-shadow-1: .3rem .3rem 1.3rem  #666666;
    }
    

`;



export default allThemes;
