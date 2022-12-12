import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import FormHook from './pages/FormHook'
import Formik from './pages/Formik'
import FormVanilla from './pages/FormVanilla'
import Landing from './pages/Landing'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/form' element={<FormVanilla/>}></Route>
        <Route path='/react-form-hook' element={<FormHook/>}></Route> 
        <Route path='/formik' element={<Formik/>}></Route>        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
