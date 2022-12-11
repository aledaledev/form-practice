import { useState } from 'react'
import { GlobalStyle, Wrapper, FormSc, InputContainer, IconInput, IconDanger, IconSuccess } from './App.styles'
import { faCircleCheck, faCircleExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import Input from './components/Input'

const inputData = [
  {
    toTake:'user',
    condition: 'Lorem ipsum dolor sit.',
    inputId:'user'
  },
  {
    toTake:'fullname',
    condition: 'Lorem ipsum dolor sit.',
    inputId:'name',
  }
]

//{toTake,condition,inputId}
//toTake={toTake} condition={condition} inputId={inputId}
function App() {

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <FormSc id='form'>

        {inputData.map((data) => <Input data={data}/>)}

        <div>
          <label htmlFor='name-input'>Fullname: </label>
          <InputContainer>
          <input type="text" placeholder='fullname' id='name-input'/>
          <IconInput icon={faCircleCheck} />
          </InputContainer>
          <small>Lorem ipsum dolor sit.</small>
        </div>
        <div>
          <label htmlFor='password-input'>Password: </label>
          <InputContainer>
          <input type="text" name='password' placeholder='' id='password-input'/>
          <IconInput icon={faCircleCheck} />
          </InputContainer>
          <small>Lorem ipsum dolor sit.</small>
        </div>
        <div>
          <label htmlFor='password-re-input'>Rewrite password: </label>
          <InputContainer>
          <input type="text" name='email' placeholder='' id='password-re-input'/>
          <IconInput icon={faCircleCheck} />
          </InputContainer>
          <small>Lorem ipsum dolor sit.</small>
        </div>
        <div>
          <label htmlFor='email-input'>Email: </label>
          <InputContainer>
          <input type="text" name='email' placeholder='email' id='email-input'/>
          <IconInput icon={faCircleCheck} />
          </InputContainer>
          <small>Lorem ipsum dolor sit.</small>
        </div>
        <div>
          <label htmlFor=''>Phone: </label>
          <InputContainer>
          <input type="text" name='phone' placeholder='902 1234-5678'/>
          <IconInput icon={faCircleCheck} />
          </InputContainer>
          <small>Lorem ipsum dolor sit.</small>
        </div>
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

export default App
