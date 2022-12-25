import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;

    h2{
        color: white;
        text-align: center;
    }

    div{
        margin: auto;
    }

    h3{
        text-align: center;
        color: #ccc;
    }
`

export const FormSc = styled.form`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    div{
        margin-bottom: 1rem;
        width: 100%;

        input{
        padding: .5rem;
        border: 1px solid #ccc;
        transition: border .2s;

        &:focus{
            outline: 1px solid #0bd9;
        }

        &:hover{
            border: 1px solid #999;
        }
        }

        p{
            margin: .2rem .5rem 0;
            padding: 0;
            font-size: .8rem;
            color: #A41623;
        }

        select{
        padding: .5rem;
        border: 1px solid transparent;
        transition: all .2s;
        width: 100%;

        &:hover{
            background-color: #ccc;
        }
        }

        label{
            font-size: .8rem;
            color: #012622;
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