import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
        font-family: 'Montserrat', sans-serif;
    }
    body, html, #root {
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: #673AB7;
        height: 100%;
    }
`;