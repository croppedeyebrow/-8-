import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
    font-size: 10px;
    
}
body{
    max-width: 1920px;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

    font-family: 'NOTO sans KR', sans-serif;

}

:root {
    --maingreen: #61e6ca;
    --mainblue: #008bff;
    --mainsky: #82ccff;
    --mainolive: #97b0aa;
    --maindarkgreen: #354b45;
    --darknavy: #0f222d;
}

// .container{
//     margin: 0px;
//     padding: 0px;
//     box-sizing: border-box;

//     font-family: 'NOTO sans KR', sans-serif;

// }
  
`;

export default GlobalStyle;
