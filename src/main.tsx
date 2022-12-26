import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { GlobalStyle } from './assets/styles/GlobalStyles'
import FormikForm from './pages/FormikForm'
import Landing from './pages/Landing'
import VanillaForm from './pages/VanillaForm'
import HookForm from './pages/HookForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/form' element={<VanillaForm/>}></Route>
        <Route path='/react-hook-form' element={<HookForm/>}></Route> 
        <Route path='/formik' element={<FormikForm/>}></Route>        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
