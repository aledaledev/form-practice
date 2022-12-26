import React, { useState } from "react";
import { FormSc, Wrapper } from "../assets/styles/Formik.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
//Form para que no tengamos que poner el submit
//Field para evitar escribir eventos, ya vienen con el componente
//ErrorMessage para evitar escribir condicionales

//existe otra forma de usar con hooks

const FormikForm = () => {

  const [success, setSuccess] = useState(false)

  const wasSent = () => {
    setInterval(()=> {
      setSuccess(false)
    },3000)
      setSuccess(true)
  }

  return (
    <Wrapper>
      <div>
        <h2>Formik</h2>
        <Formik
          initialValues={{
            user: "",
            email: "",
            checkPhone:false,
            phoneNumber: null,
          }}
          onSubmit={(values,{resetForm}) => {
            resetForm()
            console.log(values);
            wasSent()
          }}
          //valida inputs y devuelve errores
          validate={(values) => {
            let errors = {} as { user: string, email:string, checkPhone:boolean };

            if (!values.user) {
              errors.user = "you must complete this field";
            } else if(!/^[a-zA-ZñÑ0-9_-]{3,16}$/.test(values.user)){
              errors.user = "must 3 to 16 characters and only _, -, letters and numbers"
            }

            if (!values.email) {
              errors.email = "you must complete this field";
            } else if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(values.email)){
              errors.email = "sorry, type a correct email"
            }
            return errors;
          }}
        >
          {({ values, errors}) => (
            <>
            <h3>Welcome {values.user}</h3>
            <FormSc>
              <div>
                <label htmlFor="user">User:</label>
                <Field
                  type="text"
                  name="user"
                  placeholder="killerMaster89"
                />
                <ErrorMessage name="user" component={() => <p>{errors.user}</p>}/>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
                <ErrorMessage name="email" component={() => <p>{errors.email}</p>}/>
              </div>
              <div>
                <Field name='country' as='select'>
                  <option value="arg">Argentina</option>
                  <option value="per">Peru</option>
                  <option value="uru">Uruguay</option>
                </Field>
              </div>
              <div>
                <label>man
                  <Field type='radio' name='genre' value='man'/>
                </label>
                <label>woman
                  <Field type='radio' name='genre' value='woman'/>
                </label>
              </div>
              <div>
                <Field name='message' as='textarea' placeholder='message...' /> 
              </div>
              <div>
                <label htmlFor="checkPhone">Phone?</label>
                <Field name='checkPhone' checked={values.checkPhone} type='checkbox'/>
              </div>
              {values.checkPhone?
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field type='number' value={values.phoneNumber} name='phoneNumber' placeholder='1523215552'/>
              </div>
              :null}
              <button type="submit">submit</button>
              {success?<p>Account successfully created!</p>:null}
            </FormSc>
            </>
          )}
        </Formik>
      </div>
    </Wrapper>
  );
};

export default FormikForm;


/*
          <Formik
          initialValues={{
            user: "",
            email: "",
          }}
          onSubmit={(values,{resetForm}) => {
            resetForm()
            console.log(values);
            wasSent()
          }}
          //valida inputs y devuelve errores
          validate={(values) => {
            let errors = {} as { user: string, email:string };

            if (!values.user) {
              errors.user = "you must complete this field";
            } else if(!/^[a-zA-ZñÑ0-9_-]{3,16}$/.test(values.user)){
              errors.user = "must 3 to 16 characters and only _, -, letters and numbers"
            }

            if (!values.email) {
              errors.email = "you must complete this field";
            } else if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(values.email)){
              errors.email = "sorry, type a correct email"
            }
            return errors;
          }}
        >
          {({ handleSubmit, values, handleChange, handleBlur, errors, touched}) => (
            <>
            <h3>Welcome {values.user}</h3>
            <FormSc onSubmit={handleSubmit}>
              <div>
                <label htmlFor="user">User:</label>
                <input
                  type="text"
                  name="user"
                  placeholder="killerMaster89"
                  value={values.user}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.user && touched.user?<p>{errors.user}</p>:null}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email?<p>{errors.email}</p>:null}
              </div>
              <button type="submit">submit</button>
              {success?<p>Account successfully created!</p>:null}
            </FormSc>
            </>
          )}
        </Formik>
*/