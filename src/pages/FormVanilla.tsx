import React, { useState } from 'react'
import { Wrapper, FormSc, IconDanger, IconSuccess } from '../assets/styles/FormVanilla.styles'
import { faCircleCheck, faCircleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Input from '../components/Input'
import { InputState, Props } from '../types'

const inputData:Props[] = [
  {
    label:'user',
    condition: 'Must min 8 digits, letters, numbers, one uppercase, no special chars, no spaces',
    placeholder:'Alee4567',
    name:'user',
    type:'text',
    //1 number, 1 mayus, 1 minus, 8 digits
    regExp:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  },
  {
    label:'fullname',
    condition: 'Complete this field',
    placeholder:'Alejandro Salas',
    name:'name',
    type:'text',
    regExp:/^([a-zA-ZñÑ]{2,}\s[a-zA-ZñÑ]{1,}'?-?[a-zA-ZñÑ]{2,}\s?([a-zA-ZñÑ]{1,})?)/
  },
  {
    label:'password',
    condition: 'Must min 8 digits, letters, numbers, one uppercase and one special character',
    placeholder:'',
    name:'password',
    type:'password',
    regExp:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
  },
  {
    label:'Rewrite password',
    condition: 'Check your password',
    placeholder:'',
    name:'password-re',
    type:'password'
  },
  {
    label:'email',
    condition: 'Complete this field',
    placeholder:'email@email.com',
    name:'email',
    type:'email',
    regExp:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  {
    label:'phone',
    condition: 'Complete this field',
    placeholder:'XXXXXXXXXX',
    name:'phone',
    type:'number',
    regExp:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  }
]

//{toTake,condition,inputId}
//toTake={toTake} condition={condition} inputId={inputId}
function FormVanilla() {

  const [user, setUser] = useState<InputState>({field:'',valid:null})
  const [fullname, setFullName] = useState<InputState>({field:'',valid:null})
  const [password, setPassword] = useState<InputState>({field:'',valid:null})
  const [rewritePassword, setRewritePassword] = useState<InputState>({field:'',valid:null})
  const [email, setEmail] = useState<InputState>({field:'',valid:null})
  const [phone, setPhone] = useState<InputState>({field:'',valid:null})
  const [terms, setTerms] = useState<boolean>(false)

  const checkPassword = () => {
    return rewritePassword.field===password.field
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
    <Wrapper>
      <FormSc onSubmit={handleSubmit}>

        <Input data={inputData[0]}
            state={user}
            setState={setUser}
        />

        <Input data={inputData[1]}
            state={fullname}
            setState={setFullName}
        />

        <Input data={inputData[2]}
            state={password}
            setState={setPassword}
        />
        
        <Input data={inputData[3]}
            state={rewritePassword}
            setState={setRewritePassword}
            checkPassword={checkPassword}
        />

        <Input data={inputData[4]}
            state={email}
            setState={setEmail}
        />

        <Input data={inputData[5]}
            state={phone}
            setState={setPhone}
        />

        <label className='terms' htmlFor="check-terms">
          <input type="checkbox" checked={terms} onChange={() => setTerms(!terms)} name='terms' id='check-terms'/>
          I accept terms and conditions
        </label>
        <div className='advice'>
          <p><IconSuccess icon={faCircleCheck}/><b>Success! </b>Message send correctly</p>
          {false?<p><IconDanger icon={faCircleExclamation}/><b>Error: </b> Sorry, we need you complete all fields</p>:null}
        </div>
        <button type='submit'>
          send
        </button>
      </FormSc>
    </Wrapper>
    </>
  )
}

export default FormVanilla
