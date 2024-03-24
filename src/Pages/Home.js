import React from 'react'
import { headers } from '../Services.js/header'
import Navbar from '../Components/Layout/Navbar'
import Slider from '../Components/Slider'
function Home() {
  return (
    <div className='w-full'>
     <Navbar/>
     <Slider/>
     <div className="grid ml-5 h-80 grid-cols-2 gap-4">
     <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-4 mb-8'>
     <h1 className='text-white  font-bold text-2xl '>About us</h1>
     <p className='text-white mt-10'>Welcome to DailyWork, your go-to platform for finding daily local job opportunities in the fields of wiring, plumbing, and more. We understand the importance of connecting skilled professionals with the right jobs, whether it's a small repair project or a larger installation job.</p>
     <p className='text-white'>With our user-friendly interface and comprehensive job listings, we aim to bridge the gap between talent and opportunity, making it seamless for businesses to find reliable professionals and for workers to find fulfilling work close to home.


     </p>
     </div>
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500  p-4 mb-8'>
    <h1 className='text-white  font-bold text-2xl '>How and Why</h1>
    <p className='text-white mt-10'>Here's how it works: you set up your availability by creating time slots for each day when you're available to work. Homeowners looking for your services can browse these slots and book them for their home projects. If a slot is booked by a homeowner, you'll receive a notification, and that day is marked as a workday for you..</p>



<p className='text-white '>Our platform simplifies the process of finding work on a daily basis. You have the flexibility to choose your availability, accept bookings based on your schedule, and focus on delivering high-quality services to satisfied customers.</p>
    </div>
   
   </div> 
    
    </div>
  )
}

export default Home
