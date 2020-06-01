import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        &::-webkit-scrollbar {
            display: none;
        }

        box-sizing: border-box;

        color: #1f263e;

        // -webkit-user-select: none; /* Safari */
        // -moz-user-select: none; /* Firefox */
        // -ms-user-select: none; /* IE10+/Edge */
        // user-select: none; /* Standard */
        outline: none;
    }

    @font-face{ 
        font-family:Druk; 
        src:url('/src/app/view/font/Druk-BoldItalic-Web.eot'); 
        src:url('/src/app/view/font/Druk-BoldItalic-Web.woff') format('woff'),
            url('/src/app/view/font/Druk-BoldItalic-Web.ttf') format('truetype') 
    }

    @font-face{ 
        font-family:NanumSquare;
        font-weight: 300;
        src:url('/src/app/view/font/NanumSquareL.eot'); 
        src:url('/src/app/view/font/NanumSquareL.woff') format('woff'),
            url('/src/app/view/font/NanumSquareL.ttf') format('truetype') 
    }

    @font-face{ 
        font-family:NanumSquare;
        font-weight: 400;
        src:url('/src/app/view/font/NanumSquareR.eot'); 
        src:url('/src/app/view/font/NanumSquareR.woff') format('woff'),
            url('/src/app/view/font/NanumSquareR.ttf') format('truetype') 
    }

    @font-face{ 
        font-family:NanumSquare;
        font-weight: 600;
        src:url('/src/app/view/font/NanumSquareB.eot'); 
        src:url('/src/app/view/font/NanumSquareB.woff') format('woff'),
            url('/src/app/view/font/NanumSquareB.ttf') format('truetype') 
    }

    @font-face{ 
        font-family:NanumSquare;
        font-weight: 700;
        src:url('/src/app/view/font/NanumSquareEB.eot'); 
        src:url('/src/app/view/font/NanumSquareEB.woff') format('woff'),
            url('/src/app/view/font/NanumSquareEB.ttf') format('truetype') 
    }



    body {
        font-family: NanumSquare, sans-serif;
        margin: 0px;
        box-sizing: border-box;
        /* background: #1f263e; */
    }

    :root {
        --tbd: #064679;
        --sup-gr-80: #848485;
        --sup-gr: #656667;
        --sup-gr-30: #e2e3e4;
        --sup-main: #f44016;
        --sup-gr-20: #e0e0e1;
        --sup-gb: #f4f6f8;
        --sup-gr-06: #f6f6f6;
        --sup-gb-2: #e7ecf1;
        --sup-ob: #1c242d;
        --sup-blk: #000000;
        --sup-wht: #ffffff;
        --error: #ff0000;
        --black-60: rgba(0, 0, 0, 0.6);
        --sup-gr-50: #b2b2b2;
    }

    a {
        color: unset;
        text-decoration: unset;
    }

    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }

    input::placeholder {
        color: #b9bbc1;
        font-weight: normal;
    }

    @media (max-width: 768px) {
        .desktop {
            display: none;
        }
    
        .mobile {
            display: block;
        }
    }
`;

export default GlobalStyle;
