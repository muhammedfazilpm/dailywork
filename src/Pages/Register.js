import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios"
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { workerRegister } from '../Services.js/WorkerApi';
import { useNavigate } from 'react-router-dom';
function Register() {
 const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name,setName]=useState("")
    const handleSubmit =async (e) => {
        let formdata={email,password,name}
        console.log(formdata)
      e.preventDefault();
      try {
        const response=await axios.post(workerRegister,{formdata})
        console.log(response)
        if(response.data.success===true){
          console.log(response.data.message,"mes")
         toast.success(response.data.message)
        navigate('/login')
        }
        else{
         toast.error(response.data.message)
        }
        
      } catch (error) {
        console.log(error)
        

        toast.error("server error try again")
        
      }
  
    };
  return (
    <div className="max-w-3xl w-full flex justify-center mx-auto mt-7">
    <div className="bg-white w-5/6 shadow-md border text-black border-gray-200 rounded-lg  p-4 sm:p-6 lg:p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h3 className="text-3xl font-bold  text-blue-500">Welcome to Daily Work</h3>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-black block mb-2">Your email</label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
            placeholder="name@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">Your Name</label>
        <input
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
          placeholder="Enter your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
        <div>
        <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
       
        
        <button type="submit" className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already registered? <p className="text-black"><Link to={'/login'}>Login</Link></p>
        </div>
      </form>
   
    </div>

  </div>
  )
}

export default Register
