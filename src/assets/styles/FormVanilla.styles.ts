import styled, { css } from 'styled-components'
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
    opacity: 0;

    ${props => props.valid==='true' && css`
        opacity: 1;
        color: ${colors.success};
    `}

    ${props => props.valid==='false' && css`
        opacity: 1;
        color: ${colors.error};
    `}

`

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 5rem 0;
`

export const ToastSc = styled.div`
        padding: 1rem;

        p{
            color: #f0f0f0;
            margin: 0 .2rem;
        }

        ${props => props.message==='error' && css`
            background-color: ${colors.error};
        `}

        ${props => props.message==='success' && css`
            background-color: ${colors.success};
        `}

    @media screen and (min-width: 720px){
        grid-column: span 2;
    }
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


    >button{
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

export const Label = styled.label`
    ${props => props.valid==='false' && css`
        color: ${colors.error};
    `}
`

export const InputSc = styled.input`
        height: 3.1rem;
        width: 100%;
        padding: 0 1rem;
        transition: all .3s ease;
        border: 2px solid transparent;
        -moz-appearance:textfield;

        &:focus{
            border: 2px solid ${colors.border};
            outline: none;
            box-shadow: 3px 8px 30px rgba(163, 163,163, 0.4);
        }

        ${props => props.valid==='true' && css`
            border: 2px solid ${colors.success};
        `}

        ${props => props.valid==='false' && css`
            border: 2px solid ${colors.error} !important;
        `}
`

export const ButtonView = styled.button`
    border: none;
    padding: .5rem;
    background-color: #bbb;
    transition: opacity .5s;
    
    position: absolute;
    right: 2.5rem;
    top: 2.25rem;

    &:hover{
        opacity: .7;
    }
`