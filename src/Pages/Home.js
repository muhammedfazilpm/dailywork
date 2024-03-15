import React from 'react'
import { headers } from '../Services.js/header'
import Navbar from '../Components/Layout/Navbar'
import Slider from '../Components/Slider'
function Home() {
  return (
    <div className='w-full'>
     <Navbar/>
     <Slider/>
    
    </div>
  )
}

export default Home
