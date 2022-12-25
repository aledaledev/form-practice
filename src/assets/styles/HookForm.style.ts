import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        color: white;
    }

`

export const FormSc = styled.form`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    input{
        padding: .5rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
        transition: border .2s;

        &:focus{
            outline: 1px solid #0bd9;
        }

        &:hover{
            border: 1px solid #999;
        }
    }

    button{
        border: none;
        text-transform: uppercase;
        padding: .6rem;
        transition: all .2s;
        cursor: pointer;
    }

`