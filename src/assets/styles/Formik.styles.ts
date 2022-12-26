import { Form } from "formik";
import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;


    div{
        margin: auto;

        h2{
            color: #E98A15;
            text-align: center;
        }

        h3{
            color: #ECE5F0;
            text-align: center;
        }
    }

`

export const FormSc = styled(Form)`
    background-color: #ECE5F0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 20rem;

    div{
        display: flex;
        flex-direction: column;
        gap: .2rem;
        align-items: center;
        width: 100%;
        
        label{
            color: #012622;
            font-weight: 600;
        }

        input{
            padding: .4rem;
            width: 100%;
            text-align: center;

            &::placeholder{
                text-align: center;
            }


        }

        &:nth-child(4) {
            display: flex;
            flex-direction:row;
            justify-content: center;
            gap: 1rem;

            label{
                text-align: center;
                cursor: pointer;

                input{
                    width: 100%;
                    margin: 0;
                    cursor: pointer;
                }
            }
        }

        p{
            margin: 0;
            margin-left:.5rem;
            padding:0;
            color: #992622;
            font-size: .8rem;
        }
    }

    button{
        margin-top: .3rem;
        padding: .5rem;
        text-transform: uppercase;
    }

    >p{
        margin: 0;
        padding: 1rem 0;
        background-color: green;
        color: #ECE5F0;
        text-align: center;
        font-weight: 600;
    }
`