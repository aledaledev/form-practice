import styled ,{createGlobalStyle} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const colors = {
    border: '#0075ff',
    error: '#bb2929',
    success: '#1ed12d',
} 

export const IconSuccess = styled(FontAwesomeIcon)`
    margin-right: .8rem;
`

export const IconDanger = styled(FontAwesomeIcon)`
    margin-right: .8rem;
`

export const IconInput = styled(FontAwesomeIcon)`
    position: absolute;
    z-index: 1000;
    right: .8rem;
    top: 1.05rem;
    color: ${colors.error};
    //opacity: 0;
`

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 5rem 0;
`

export const FormSc = styled.form`
    background-color: #f0f0f0;
    padding: 1rem;
    border: 1px solid #0002;
    display: grid;
    width: 70%;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 720px){
        grid-template-columns: 1fr 1fr;
        
        .advice{
            grid-column: span 2;

        }

        .terms{
            grid-column: span 2;
        }

        button{
            grid-column: span 2;
        }
    }

    div{
        width: 100%;

        label{
            display: block;
            text-transform:capitalize;
            margin-bottom: .5rem;
            margin-left: .5rem;
        }

        small{
            display: block;
            //display: none;
            color: ${colors.error};
            margin-top: .5rem;
            margin-left: .5rem;

        }
    }

    .terms{
        margin-top: 1rem;

        input{
            margin-right: 1rem;
        }
    }

    .advice{
        background-color: ${colors.success};
        padding: 1rem;

        p{
            color: #f0f0f0;
            margin: 0 .2rem;
        }
    }

    button{
        color: #fff;
        border: 0;
        background-color: #000;
        height: 3.5rem;
        width: 15rem;
        justify-self: center;
        letter-spacing: 2px;
        font-size: 1rem;
        font-weight: 300;
        cursor: pointer;
        transition: font-weight .2s, box-shadow .3s;

        &:hover{
            font-weight: 600;
            box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
        }
    }
`

export const InputContainer = styled.div`
    position: relative;
    input{
        height: 3.1rem;
        width: 100%;
        padding: 0 1rem;
        transition: all .3s ease;
        border: 2px solid transparent;

        &:focus{
            border: 2px solid ${colors.border};
            outline: none;
            box-shadow: 3px 8px 30px rgba(163, 163,163, 0.4);
        }
    }
`

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