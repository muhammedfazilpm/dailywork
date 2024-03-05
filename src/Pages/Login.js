import React, { useEffect } from 'react'
import DocumentCardComponent from '../Components/Card'
import { headers } from '../Services.js/header'

const Login = () => {
  useEffect(()=>{
    console.log(headers,"header")

  },[])
  return (
    <div className='w-3/4 flex justify-center'>
  <DocumentCardComponent/>
      
    </div>
  )
}

export default Login
