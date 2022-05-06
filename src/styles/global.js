import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        margin: 0 !important;
    }

    :root {
        --color-primary: #fff;
        --color-second: #001e32;
        --color-third: #3532ff;
        --text-color: #2d2d2d;
        --soft-white: #f5f5f5;
        --background-primary: #fff;
        --background-second: #f5f5f5;
        --black: #0C0D0B;
        --color-placeholder:#4e5555;
        --font-home: "Baloo Tamma 2", "cursive";
        --primColor: #dcdcdc;
        --secoColor: #555555;
        --cornerRad: 4px;
    }

    body {
        font-family: "Roboto", sans-serif;
        background-color: var(--background-primary);
        color: var(--black);
        font-size: 16px;
        -webkit-font-smoothing: antialiased !important;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: "PT Serif", serif;
        font-weight: 700;
        color: white;
    }

    a {
        text-decoration: none;
    }
    

    button {
        cursor: pointer;
        border: none;
    }

    ul {
        list-style-type: none;
    }
`;

export default GlobalStyle;
