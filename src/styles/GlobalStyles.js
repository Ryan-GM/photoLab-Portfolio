import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body{
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    nav{
        background-color: #333;
        color: #fff;
        padding: 1rem; 
    }
    
    nav ul{
        list-style: none;
        display: flex;
        gap: 1rem;
    }
    
    
    nav a {
        color: #fff;
        text-decoration: none;
    }
    .photo-card img {
        width: 100%;
        height: auto;
    }
    .photo-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .contact form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    `;

export default GlobalStyles;

