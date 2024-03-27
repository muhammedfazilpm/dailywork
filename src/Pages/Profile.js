import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Profile = () => {
  const navigate=useNavigate()
  return (

    <div className='w-full'>
    <Navbar/>
    <div className='flex' >
    
    <div class="max-w-sm flex-1  ml-8 mr-8 grid mt-10  place-items-center rounded overflow-hidden shadow-lg">
    <img class="w-1/3 object-cover  rounded-full h-32 float-end bg-black" src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0" alt="Sunset in the mountains"/>
    <div class="px-1 py-0">
      <div class="font-bold text-xl mb-0">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-0 pt-0 pb-2">
  <Link to='/addprofile'> <span class="inline-block bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Add Details</span></Link>   
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">winter</span>
    </div>
 
 
 
    </div> 
    
    <div className=''>
   2nd content
  </div>
  <div className='ml-96'>
  3rd content
 </div>
  </div>


  
  </div>
  )
}

export default Profile
