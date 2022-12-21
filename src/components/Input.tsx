import React, { useState } from 'react'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { IconInput, InputContainer } from '../assets/styles/FormVanilla.styles'
import { InputProps, Props } from '../types'


const Input = ({data,state,setState}:InputProps) => {
    
  const {label,type,condition,placeholder,name,regExp}:Props = data

  //const [validated, setValidated] = useState<boolean>(false)
  //<ButtonView onClick={viewPassword}>{view?<FontAwesomeIcon color='#f1f1f1' icon={faEyeSlash}/>:<FontAwesomeIcon color='#f1f1f1' icon={faEye}/>}</ButtonView>

  const handleInputChange = (e:React.FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      field:e.currentTarget.value
    })
  }

  const handleValidation = () => {
    if(regExp){
      const validation = regExp.test(state.field)
      setState({
        ...state,
        valid:validation,
      })
    }
  }

  return (
    <div>
    <label htmlFor={`${name}-input`}>{label}: </label>
    <InputContainer>
    <input type={type} value={state.field} onChange={handleInputChange} onKeyUp={handleValidation} onBlur={handleValidation} name={name} placeholder={placeholder} id={`${name}-input`}/>
    {state.valid?null:<IconInput icon={faCircleXmark}/>}
    </InputContainer>
    {state.valid?null:<small>{condition}</small>}
  </div>
  )
}

export default Input