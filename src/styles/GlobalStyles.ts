import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
      font-family: sans-serif;
      margin: 0;
      padding: 0;
      height: auto;
      background-color: #001020;
    }

    #root{
        height: 100%;
    }
`