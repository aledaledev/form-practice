import React, { useState } from 'react'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { IconInput, InputSc, Label } from '../assets/styles/VanillaForm.styles'
import { InputProps, Props } from '../types'

const Input = ({data,state,setState,checkPassword}:InputProps) => {
    
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
        valid:validation?'true':'false',
      })
    }
    if(checkPassword){
      setState({
        ...state,
        valid:checkPassword()?'true':'false',
      })
    }
  }

  return (
    <div>
    <Label htmlFor={`${name}-input`} valid={state.valid}>{label}: </Label>
    <div style={{position:'relative'}}>
    <InputSc type={type} valid={state.valid} value={state.field} onChange={handleInputChange} onKeyUp={handleValidation} onBlur={handleValidation} name={name} placeholder={placeholder} id={`${name}-input`}/>
    <IconInput valid={state.valid} icon={state.valid==='false'?faCircleXmark:faCircleCheck}/>
    </div>
    {state.valid==='false'?<small>{condition}</small>:null}
  </div>
  )
}

export default Input