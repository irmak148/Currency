import React from 'react'
import { ToastContainer} from 'react-toastify';
import Currency from './component/cuurency.jsx'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <ToastContainer position="bottom-left" autoClose={2000}/>
     <Currency/> 
    </>
  )
}

export default App
