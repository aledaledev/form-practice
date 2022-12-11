import React, { useState } from 'react'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { IconInput, InputContainer } from '../App.styles'

export type Props = {
    label: string,
    condition:string,
    inputId:string,
    placeholder:string,
    name:string,
    type:string,
    regExp:RegExp,
}

const Input = ({data}) => {
    
    const {label,type,condition,inputId,placeholder,name,regExp}:Props = data

    const [validated, setValidated] = useState<boolean>(false)


  return (
    <div key={inputId}>
    <label htmlFor={`${inputId}-input`}>{label}: </label>
    <InputContainer>
    <input type={type} name={name} placeholder={placeholder} id={`${inputId}-input`}/>
    <IconInput icon={faCircleXmark} />
    </InputContainer>
    <small>{condition}</small>
  </div>
  )
}

export default Input