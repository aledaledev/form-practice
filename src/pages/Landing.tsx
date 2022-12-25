import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    div{
        background-color: #6a9c9c;
        padding: 1.5rem;

        h2{
            margin: 0 0 .5rem;
            color: white;
            text-align: center;
        }
    
        ul{
            margin: 0;
            padding: 0;
            
            li{
                color: white;
                list-style: none;
            }
        }
    }

`

const Landing = () => {
  return (
    <Wrapper>
        <div>
        <h2>Forms</h2>
        <ul>
            <li><Link to='/form'>clasic form</Link></li>
            <li><Link to='/react-hook-form'>react hook form</Link></li>
            <li><Link to='/formik'>formik</Link></li>
        </ul>
        </div>
    </Wrapper>
  )
}

export default Landing