import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import { useState } from 'react'

const Addprofiles = () => {
  const[aadarName,setAadarname]=useState(null)
  const[aadarNumber,setAadarNumber]=useState(null)
  const[phone,setPhone]=useState(null)
  const [file, setFile] = useState(null);
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile); // Get the image URL directly
    console.log(imageUrl)
    setFile(imageUrl);
  };
  let SaveData=()=>{
    console.log(aadarNumber,aadarName,phone,file)
  }
  return (
    <div className='w-full'>
    <Navbar/>
    <div>
<h1 className='font-bold text-red-900 m-5 text-2xl'>Please Enter the details to verify Phone number and Get your Work easly</h1>

<div className="max-w-md mx-auto bg-white shadow-md mt-10 rounded px-4 py-6">
<h2 className="text-lg font-semibold mb-4">Enter the Details</h2>

  <div className="mb-4">
    <label for="username" className="block text-sm font-medium text-gray-700">Name in aadar</label>
    <input onChange={(e)=>setAadarname(e.target.value)} type="text"  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">aadar number</label>
    <input onChange={(e)=>setAadarNumber(e.target.value)} type="text" id="password" name="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
  </div>
  <div className="mb-4">
  <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
  <input onChange={(e)=>setPhone(e.target.value)} type="text" id="password" name="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
</div>
  
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">aadar Image</label>
    <input  type="file" 
    name="user[image]" 
    multiple={false} // Set to false for single file upload
    onChange={handleChange}   className="mt-1 block   w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
  </div>
  {file!=null && <div className=' w-1/3' ><img className='h-20 object-fill w-full' src={file} alt="Uploaded" /><h1 onClick={()=>setFile(null)}>X</h1></div>}
  <button onClick={SaveData}  className="w-1/2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50">Save</button>

</div>

    </div>
    </div>

  )
}

export default Addprofiles
