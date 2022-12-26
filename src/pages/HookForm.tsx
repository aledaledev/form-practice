import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Wrapper, FormSc } from '../assets/styles/HookForm.style'
import { ageValidator } from '../validators';

const HookForm = () => {

  interface FormData {
    firstName: string,
    lastName: string,
    email:string,
    age:number,
    password:string,
    confirmPassword:string,
    country:'arg'|'uru'|'per',
    checkPhone:boolean,
    phoneNumber:number
  }

  //metodos listos para implementar
  //register: registra cambios, 
  //formState: estado del formulario
  //handleSubmit: controla el envio
  //getValues: valor actual del campo
  //watch: que se esta escribiendo en tiempo real
  const {register,formState:{errors},handleSubmit,getValues,watch} = useForm<FormData>({
    defaultValues:{
      age:18,
      checkPhone:true
    }
  });

  const onSubmit = (values:FormData) => {
      console.log(values);
  }

  //validate -> validadores personalizados
  return (
    <Wrapper>
      <div>
      <h2>FormHook</h2>
      <h3>Welcome {watch('firstName')}</h3>
      <FormSc onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('firstName', {required:true,maxLength:10})} placeholder='First name'/>
          {errors.firstName?.type==='maxLength'?<p>must have 10 maxlength letters</p>:null}
          {errors.firstName?.type==='required'?<p>this field cannot be void</p>:null}
        </div>
        <div>
          <input {...register('lastName', {required:true})} placeholder='Second name'/>
          {errors.lastName?.type==='required'?<p>this field cannot be void</p>:null}
        </div>
        <div>
          <input {...register('email', {required:true, pattern:/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/})} type="email" placeholder='Email'/>
          {errors.email?.type==='required'?<p>this field cannot be void</p>:null}
          {errors.email?.type==='pattern'?<p>sorry, type a correct email</p>:null}
        </div>
        <div>
          <input {...register('age', {required:true, validate:ageValidator})} type='number' placeholder='Age'/>
          {errors.age?.type==='required'?<p>this field cannot be void</p>:null}
          {errors.age?.type==='validate'?<p>age must be between 18 to 65</p>:null}
        </div>
        <div>
          <input {...register('password', {required:true})} type="password" placeholder='Password'/>
          {errors.password?.type==='required'?<p>this field cannot be void</p>:null}
        </div>
        <div>
          <input {...register('confirmPassword', {required:true, validate:(value) => value===getValues('password')})} type="password" placeholder='Confirm password'/>
          {errors.confirmPassword?.type==='required'?<p>this field cannot be void</p>:null}
        </div>
        <div>
          <select {...register('country')}>
            <option value="arg">Argentina</option>
            <option value="per">Peru</option>
            <option value="uru">Uruguay</option>
          </select>
        </div>
        <div>
          <label>want you put a phone number?
          <input type="checkbox" {...register('checkPhone')}/>
          </label>
        </div>
        {watch('checkPhone')?
        <div>
          <input {...register('phoneNumber')} type="number" placeholder='1135432152'/>
        </div>:null}
        <button type='submit'>submit</button>
      </FormSc>
      </div>
    </Wrapper>
  )
}

export default HookForm

//?. sino existe no continues