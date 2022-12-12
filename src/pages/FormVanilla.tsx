import { useState } from 'react'
import { Wrapper, FormSc, InputContainer, IconInput, IconDanger, IconSuccess } from '../styles/FormVanilla.styles'
import { faCircleCheck, faCircleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Input, { Props } from '../components/Input'

const inputData:Props[] = [
  {
    label:'user',
    condition: 'must 4 to 16 digits, letters, numbers, one Uppercase',
    inputId:'user',
    placeholder:'Alee4567',
    name:'user',
    type:'text',
    //1 number, 1 mayus, 1 minus, 8 digits
    regExp:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  },
  {
    label:'fullname',
    condition: 'Lorem ipsum dolor sit.',
    inputId:'name',
    placeholder:'Alejandro Salas',
    name:'name',
    type:'text',
    regExp:/1/,
  },
  {
    label:'password',
    condition: 'Lorem ipsum dolor sit.',
    inputId:'password',
    placeholder:'',
    name:'password',
    type:'password',
    regExp:/1/,
  },
  {
    label:'Rewrite password',
    condition: 'Lorem ipsum dolor sit.',
    inputId:'password-re',
    placeholder:'',
    name:'password-re',
    type:'passwoor',
    regExp:/1/,
  },
  {
    label:'email',
    condition: 'Lorem ipsum dolor sit.',
    inputId:'email',
    placeholder:'email@email.com',
    name:'email',
    type:'email',
    regExp:/1/,
  },
  {
    label:'phone',
    condition: 'Lorem ipsum dolor sit.',
    inputId:'phone',
    placeholder:'XXX XXXX-XXXX',
    name:'phone',
    type:'number',
    regExp:/1/,
  }
]

//{toTake,condition,inputId}
//toTake={toTake} condition={condition} inputId={inputId}
function FormVanilla() {

  return (
    <>
    <Wrapper>
      <FormSc id='form'>

        {inputData.map((data:Props) => <Input key={data.inputId} data={data}/>)}

        <label className='terms' htmlFor="check-terms">
          <input type="checkbox" name='terms' id='check-terms'/>
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
