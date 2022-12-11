import React from 'react'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { IconInput, InputContainer } from '../App.styles'

type Props = {
    toTake: string,
    condition:string,
    inputId:string
}

const Input = (data:Props) => {
  const {toTake,condition,inputId}:Props = data
  return (
    <div>
    <label htmlFor={`${inputId}-input`}>{toTake}: </label>
    <InputContainer>
    <input type="text" name={toTake} placeholder={toTake} id={`${inputId}-input`}/>
    <IconInput icon={faCircleXmark} />
    </InputContainer>
    <small>{condition}</small>
  </div>
  )
}

export default Input