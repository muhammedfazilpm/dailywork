import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Layout/Navbar'
import axios from 'axios'
import toast from 'react-hot-toast'
import { headers } from '../Services.js/header'
import { workerprofileget } from '../Services.js/WorkerApi'
import PostedWorks from './Component/Postedwork'

const Profile = () => {
  const [aadardetails, setAdardetails] = useState("")
  const [profile, setProfile] = useState("")
  const [works, setWorks] = useState([])
  const [filteredWorks, setFilteredWorks] = useState([])
  const [locationFilter, setLocationFilter] = useState("")
  const [districtFilter, setDistrictFilter] = useState("")
  const [activeTab, setActiveTab] = useState('works')

  // pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const worksPerPage = 5

  let getdata = async () => {
    try {
      const response = await axios.get(`${workerprofileget}`, { headers })
      setAdardetails(response.data.aadar)
      setProfile(response.data.profile)
      setWorks(response.data.providerWorks || [])
      setFilteredWorks(response.data.providerWorks || [])
    } catch (error) {
      toast.error("Failed to load profile")
    }
  }

  // Filter works
  useEffect(() => {
    let updated = works
    if (locationFilter) {
      updated = updated.filter(work =>
        work.location?.toLowerCase().includes(locationFilter.toLowerCase())
      )
    }
    if (districtFilter) {
      updated = updated.filter(work =>
        work.district?.toLowerCase().includes(districtFilter.toLowerCase())
      )
    }
    setFilteredWorks(updated)
    setCurrentPage(1)
  }, [locationFilter, districtFilter, works])

  useEffect(() => {
    getdata()
  }, [])

  // Upload profile image
  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append("profileImage", file)

    try {
      const response = await axios.post(`/api/worker/upload-profile`, formData, {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.data.success) {
        toast.success("Profile image updated")
        getdata()
      }
    } catch (error) {
      toast.error("Failed to upload image")
    }
  }

  // Pagination
  const indexOfLastWork = currentPage * worksPerPage
  const indexOfFirstWork = indexOfLastWork - worksPerPage
  const currentWorks = filteredWorks.slice(indexOfFirstWork, indexOfLastWork)
  const totalPages = Math.ceil(filteredWorks.length / worksPerPage)

  // Get numbers for a work
  const handleGetNumbers = (workId) => {
    toast.success(`Fetching numbers for work ID: ${workId}`)
    // Example call: axios.get(`/api/works/${workId}/numbers`, { headers })
  }

  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col lg:flex-row gap-8'>

          {/* Profile Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-6">
              <div className="p-6 flex flex-col items-center">
                <div className="relative mb-4">
                  <img 
                    className="w-32 h-32 rounded-full object-cover border-4 border-red-100 shadow-lg" 
                    src={profile?.image || "https://via.placeholder.com/150"} 
                    alt="Profile" 
                  />
                  <label className="absolute bottom-0 right-0 bg-red-600 text-white p-2 rounded-full cursor-pointer hover:bg-red-700 transition shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <input type="file" className="hidden" onChange={handleImageUpload} />
                  </label>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-900">{profile?.name}</h2>
                  <p className="text-gray-600">{profile?.email}</p>
                  <div className="mt-3 flex justify-center">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">Verified Worker</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-gray-900 font-bold text-lg">{works.length}</p>
                    <p className="text-gray-600 text-sm">Total Works</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <p className="text-gray-900 font-bold text-lg">4.8</p>
                    <p className="text-gray-600 text-sm">Avg Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aadhaar Card */}
            {aadardetails && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Aadhaar Verification
                  </h3>
                </div>
                <div className="p-4">
                  <div className="mb-4 flex justify-center">
                    <img 
                      className="h-40 object-contain rounded-lg border border-gray-300" 
                      src={aadardetails?.aadarImage} 
                      alt="Aadhaar" 
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-gray-600 text-sm w-24">Number:</span>
                      <span className="text-gray-900 font-medium">{aadardetails?.aadarNumber}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 text-sm w-24">Name:</span>
                      <span className="text-gray-900 font-medium">{aadardetails?.aadarName}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 text-sm w-24">Phone:</span>
                      <span className="text-gray-900 font-medium">{aadardetails?.phoneNumber}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-2/3">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'works' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('works')}
              >
                Posted Works
              </button>
              {/* <button 
                className={`px-4 py-2 font-medium text-sm ${activeTab === 'stats' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('stats')}
              >
                Statistics
              </button> */}
            </div>

            {/* Filters */}
        <PostedWorks/>

            {/* Works Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              {/* <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900">Posted Works</h3>
                <p className="text-gray-600 text-sm">{filteredWorks.length} works found</p>
              </div> */}
              
              {/* <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">No</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Work Title</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Location</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">District</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentWorks.length > 0 ? (
                      currentWorks.map((item, index) => (
                        <tr key={item._id || index} className="hover:bg-gray-50 transition">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {(currentPage - 1) * worksPerPage + index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.location}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.district}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button 
                              onClick={() => handleGetNumbers(item._id)} 
                              className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition flex items-center shadow-sm"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              Get Numbers
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="px-6 py-8 text-center">
                          <div className="flex flex-col items-center justify-center text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <p className="text-lg">No works found</p>
                            <p className="text-sm mt-1">Try adjusting your filters or post a new work</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div> */}

              {/* Pagination */}
              {filteredWorks.length > 0 && (
                <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                  <div className="text-sm text-gray-600">
                    Showing <span className="font-medium">{(currentPage - 1) * worksPerPage + 1}</span> to <span className="font-medium">
                      {Math.min(currentPage * worksPerPage, filteredWorks.length)}
                    </span> of <span className="font-medium">{filteredWorks.length}</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition flex items-center shadow-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>
                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition flex items-center shadow-sm"
                    >
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile