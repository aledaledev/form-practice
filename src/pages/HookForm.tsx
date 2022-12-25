import React from 'react'
import { Wrapper, FormSc } from '../assets/styles/HookForm.style'

const HookForm = () => {

  interface FormData {
    firstName: string,
    lastName: string,
    email:string,
    password:string,
    confirmPassword:string
  }

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    console.log('submit');
  }

  return (
    <Wrapper>
      <h2>FormHook</h2>
      <FormSc onSubmit={onSubmit}>
        <input name='firstName' placeholder='First name'/>
        <input name="lastName" placeholder='Second name'/>
        <input type="email" name='email' placeholder='Email'/>
        <input type="password" name="password" placeholder='Password'/>
        <input type="password" name="confirmPassword" placeholder='Confirm password'/>
        <button type='submit'>submit</button>
      </FormSc>
    </Wrapper>
  )
}

export default HookForm