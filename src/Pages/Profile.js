import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { headers } from '../Services.js/header'
import axios from 'axios'
const Profile = () => {
  const[aadardata,setAadar]=useState("")
  const[aadardetails,setAdardetails]=useState("")
  const[profile,setProfile]=useState("")

  let getdata=async()=>{

    console.log(headers)
    const response=await axios.get('http://localhost:5000/api/worker/getprofile',{headers})
    setAdardetails(response.data.aadar)
    setProfile(response.data.profile)
  }
  useEffect(()=>{
 getdata()
  },[])
  const navigate=useNavigate()
  return (

    <div className='w-full'>
    <Navbar />
    <div className='flex pt-8 flex-col lg:flex-row'>
  
      <div className="max-w-sm flex-1 m-4 lg:ml-8 lg:mr-8 mt-10 grid place-items-center rounded overflow-hidden shadow-lg">
        <img className="w-1/3 object-cover rounded-full h-32 bg-black" src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0" alt="Sunset in the mountains" />
        <div className="px-4 py-2">
          <div className="font-bold text-xl mb-2">{profile?.name}</div>
          <p className="text-gray-700 text-base">
          {profile?.email}
          </p>
        </div>
        <div className="px-4 pt-2 pb-4">
        {!aadardetails&&(<Link to='/addprofile'><span className="inline-block bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Add Aadar Details</span></Link>
      )}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">winter</span>
        </div>
      </div>
      {aadardetails&& (  
        <div className="w-full max-w-lg px-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4 lg:my-0">        
          <a href="#">
            <img 
              className="rounded-t-lg w-full min-w-56 h-64 object-cover" 
              src={aadardetails?.aadarImage} 
              alt="Aadhaar Image" 
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="text-lg">Aadhaar:</span> {aadardetails?.aadarNumber}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Aadhaar Name: {aadardetails?.aadarName}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Phone: {aadardetails?.phoneNumber}
            </p>
          </div>
        </div>
      )}
      
  
      <div className='m-4 lg:ml-16'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                  Silver
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                  White
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">
                  $99
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className='bg-green-500 text-white p-2 mt-4'>ADD JOB</button>
      </div>
    </div>
  </div>
  
  )
}

export default Profile
