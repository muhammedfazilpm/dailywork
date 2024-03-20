import axios from 'axios';
import React, { useState } from 'react';
import {Link} from  'react-router-dom'
import { workerLogin } from '../Services.js/WorkerApi';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DocumentCardComponent = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =async (e) => {
   try {
    e.preventDefault();
    let formData={email,password}
    const response=await axios.post(workerLogin,{formData})
    if(response.data.success==false){
      console.log(response.data.message)
     toast.error(response.data.message)
    }
    else{
      toast.success(response.data.message);
      localStorage.setItem('token', response.data.token);
       navigate("/home")
       window.location.reload()
     
    }
   } catch (error) {
    console.log(error)
  
   }
 
  };

  return (
    <div className=" max-w-5/6 flex justify-center mx-auto mt-7">
      <div className="bg-white w-5/6 shadow-md border text-black border-gray-200 rounded-lg  p-4 sm:p-6 lg:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h3 className="text-3xl font-bold  text-blue-500">Welcome to Daily Work</h3>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-black block mb-2">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-5000"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start">
           
            <a href="#" className="text-sm text-black ml-auto dark:text-black">Lost Password?</a>
          </div>
          <button type="submit" className="w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-black  dark:text-black"><Link to={'/register'}>Create account</Link></a>
          </div>
        </form>
     
      </div>

    </div>
  );
};

export default DocumentCardComponent;
