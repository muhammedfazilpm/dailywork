import React from 'react'
import Navbar from '../Components/Layout/Navbar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { headers } from '../Services.js/header'
import axios from 'axios'
import toast from 'react-hot-toast'
import Modal from '../Components/Modal'
import { workerprofileget } from '../Services.js/WorkerApi'
import { workerjobadd ,workerjobclear} from '../Services.js/WorkerApi'

const Profile = () => {
  const[aadardata,setAadar]=useState("")
  const[aadardetails,setAdardetails]=useState("")
  const[profile,setProfile]=useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [job,setJob]=useState("")
  const[isaddJob,setIsaddjob]=useState(false)
  const[jobdata,setJobData]=useState([])

  let getdata=async()=>{
    const response=await axios.get(`${workerprofileget}`,{headers})
    setAdardetails(response.data.aadar)
    setProfile(response.data.profile)
    setJobData(response.data.jobs)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsaddjob(true)
  };
  
  const handlOpenmodal=()=>{
    setIsModalOpen(true);
  }

  const handleclearjobs=async()=>{
    try {
      const response=await axios.get(`${workerjobclear}`,{headers})
      if(response.data.success){
        toast.success(response.data.message)
        getdata()
      }
    } catch (error) {
      toast.error("error clearing jobs")
    }
  }

  let handlejobsubmit=async()=>{
    try {
      if(job.length===0){
        toast.error("please fill the job")
      }
      else{
        const response=await axios.post(`${workerjobadd}`,{job},{headers})
        if(response.data.success==true){
          toast.success(response.data.message)
          setIsModalOpen(false)
          setIsaddjob(false)
          getdata()
        }
        else{
          toast.error("error in adding job")
          setIsModalOpen(false)
          setIsaddjob(false)
        }
      }
    } catch (error) {
      toast.error("error in adding job")
      setIsModalOpen(false)
    }
  }

  const handleprofile=async()=>{
    // Implement profile handling logic here
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsaddjob(false)
  };
  
  useEffect(()=>{
    getdata()
  },[])

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Profile Card */}
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 flex flex-col items-center">
              <img 
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" 
                src="https://imgs.search.brave.com/-5WF1BeBhfsHGEPorrRC39FgK6HBOJlpLCGAc8-zJ4M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzA5MzYyL3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtZ2lybC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VVFH/WHBlaUxySTc4bk8x/QjlwZVVuMEQwZkNT/UnJtLUo4eG9oTVdH/Mkxtcz0" 
                alt="Profile" 
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">{profile?.name}</h2>
                <p className="text-gray-600">{profile?.email}</p>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <button 
                  onClick={handlOpenmodal}
                  className="px-4 py-2 bg-green-300 text-green-800 rounded-full text-sm font-semibold hover:bg-green-200 transition"
                >
                 Mark Free Today
                </button>
                <button 
                  onClick={handlOpenmodal}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
                >
                  Edit image
                </button>
              </div>
            </div>
          </div>

          {/* Aadhaar Card */}
          {aadardetails && (
            <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <img 
                  className="w-full h-48 object-contain rounded-lg" 
                  src={aadardetails?.aadarImage} 
                  alt="Aadhaar Image" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  <span className="text-gray-600">Aadhaar:</span> {aadardetails?.aadarNumber}
                </h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Name:</span> {aadardetails?.aadarName}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> {aadardetails?.phoneNumber}
                </p>
              </div>
            </div>
          )}

          {/* Jobs Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Your Jobs</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={handleOpenModal}
                      className="px-3 py-1 bg-green-500 text-white rounded text-sm font-medium hover:bg-green-600 transition"
                    >
                      ADD JOB
                    </button>
                    <button 
                      onClick={handleclearjobs}
                      className="px-3 py-1 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition"
                    >
                      CLEAR ALL
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-y-auto max-h-64">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        No
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {jobdata?.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item}
                        </td>
                      </tr>
                    ))}
                    {jobdata?.length === 0 && (
                      <tr>
                        <td colSpan="2" className="px-6 py-4 text-center text-sm text-gray-500">
                          No jobs added yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="p-6">
          {isaddJob ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Add Jobs</h2>
              <input
                onChange={(e) => setJob(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                type="text"
                placeholder="Enter job title"
              />
              <div className="flex justify-end gap-3">
                <button 
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  onClick={handlejobsubmit}
                >
                  Add Job
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
              <input
                onChange={(e) => setJob(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-4"
                type="file"
              />
              <div className="flex justify-end gap-3">
                <button 
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={handleprofile}
                >
                  Save Changes
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default Profile