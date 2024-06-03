import React, { useState } from 'react';
import Navbar from '../Components/Layout/Navbar';
import axios from 'axios';
import { workProfileupload } from '../Services.js/WorkerApi';
import { useNavigate } from 'react-router-dom';

const Addprofiles = () => {
  const [aadarName, setAadarName] = useState('');
  const [aadarNumber, setAadarNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const navigate=useNavigate()

  const token = localStorage.getItem('token');

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('aadarName', aadarName);
      formData.append('aadarNumber', aadarNumber);
      formData.append('phone', phone);
      formData.append('file', file);

        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        };

      const response = await axios.post(workProfileupload, formData, { headers });
      if(response.data.success){
        alert(response.data.message)
        navigate('/profile')
      }
      else{
        alert("error please try again")
      }
      console.log('Response from backend:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-full'>
      <Navbar />
      <div>
        <h1 className='font-bold text-red-900 m-5 text-2xl'>
          Please Enter the details to verify Phone number and Get your Work easily
        </h1>
        <div className="max-w-md mx-auto bg-white shadow-md mt-10 rounded px-4 py-6">
          <h2 className="text-lg font-semibold mb-4">Enter the Details</h2>
          <div className="mb-4">
            <label htmlFor="aadarName" className="block text-sm font-medium text-gray-700">Name in Aadhar</label>
            <input onChange={(e) => {setAadarName(e.target.value); console.log(e.target.value)}} type="text" id="aadarName" name="aadarName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
          </div>
          <div className="mb-4">
            <label htmlFor="aadarNumber" className="block text-sm font-medium text-gray-700">Aadhar Number</label>
            <input onChange={(e) => setAadarNumber(e.target.value)} type="text" id="aadarNumber" name="aadarNumber" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input onChange={(e) => setPhone(e.target.value)} type="text" id="phone" name="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Aadhar Image</label>
            <input type="file" id="image" name="image" onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"/>
          </div>
          {file && (
            <div className='w-1/3'>
              <img className='h-20 object-fill w-full' src={URL.createObjectURL(file)} alt="Uploaded" />
              <button onClick={() => setFile(null)}>Remove Image</button>
            </div>
          )}
          <button onClick={handleSubmit} className="w-1/2 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Addprofiles;
