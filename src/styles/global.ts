import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle` 
    ${normalize}
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: ${props => props.theme.fonts.text};
        font-size: ${props => props.theme.fonts.size.sm};
        cursor: default;
    }

    h1,h2,h3,h4,h5,h6,button {
        font-family: ${props => props.theme.fonts.title};
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;
