import { createGlobalStyle } from "styled-components";

const GlobalStyleVariables = createGlobalStyle`
    
    /* properties */
    :root {

        /* header */
        --header-height: 9rem;

        /* standard border-radius */
        --border-radius-1: .8rem;
    }
    /* other */

    :root {
        --default-min-height: 10rem;
    }



`;

export default GlobalStyleVariables;