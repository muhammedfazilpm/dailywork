import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import {workerotp} from '../Services.js/WorkerApi'
import { useNavigate } from 'react-router-dom';


const Otp = () => {
    const navigate=useNavigate()
const[otp,setOtp]=useState("")
let email=localStorage.getItem("todayemail")
const handleSubmit= async()=>{
    if(otp.length!=4){
toast.error("Please enter a valid 4 digit otp")
return
    }
let data={email,otp}
const response=await axios.post(workerotp,{data})
if(response.data.success){
localStorage.removeItem("todayemail")
    toast.success(response.data.message)
    navigate('/login')

}
else{
toast.error(response.data.message)
}
}


  return (
   

<div className="w-full max-w-sm bg-white border mt-40 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div className="flex justify-end px-4 pt-4">
   
  
    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2" aria-labelledby="dropdownButton">
        <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
        </li>
        <li>
            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
        </li>
        </ul>
    </div>
</div>
<div className="flex flex-col items-center pb-10">
<h5 className="mb-1 text-xl font-medium text-blue-500 mb-7 dark:text-white">DailyWork</h5>

<input
  className="w-3/4 h-full mb-7 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
  type="text"
  name=""
  id=""
  placeholder="Enter OTP"
  onChange={(e)=>setOtp(e.target.value)}
/>

    <span className="text-m text-gray-500 dark:text-gray-400">Enter the email otp</span>
    <div className="flex mt-4 md:mt-6">
        <a onClick={handleSubmit}  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</a>
    </div>
</div>
</div>

  )
}

export default Otp
