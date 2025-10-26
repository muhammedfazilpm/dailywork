import React, { useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { headers } from "../../Services.js/header"
import { workerprofileget } from "../../Services.js/WorkerApi"

const PostedWorks = () => {
  const [works, setWorks] = useState([])
  const [filteredWorks, setFilteredWorks] = useState([])
  const [locationFilter, setLocationFilter] = useState("")
  const [districtFilter, setDistrictFilter] = useState("")
  const [workTypeFilter, setWorkTypeFilter] = useState("")
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const worksPerPage = 5

  useEffect(() => {
    fetchWorks()
  }, [])

  const fetchWorks = async () => {
    try {
      const res = await axios.get(`${workerprofileget}`, { headers })
      setWorks(res.data.providerWorks || [])
      setFilteredWorks(res.data.providerWorks || [])
    } catch (err) {
      toast.error("Failed to fetch works")
    }
  }

  // Apply filters
  useEffect(() => {
    let updated = works

    if (districtFilter) {
      updated = updated.filter(work =>
        work.district?.toLowerCase().includes(districtFilter.toLowerCase())
      )
    }
    if (locationFilter) {
      updated = updated.filter(work =>
        work.location?.toLowerCase().includes(locationFilter.toLowerCase())
      )
    }
    if (workTypeFilter) {
      updated = updated.filter(work =>
        work.type?.toLowerCase().includes(workTypeFilter.toLowerCase())
      )
    }

    setFilteredWorks(updated)
    setCurrentPage(1)
  }, [districtFilter, locationFilter, workTypeFilter, works])

  // Pagination logic
  const indexOfLastWork = currentPage * worksPerPage
  const indexOfFirstWork = indexOfLastWork - worksPerPage
  const currentWorks = filteredWorks.slice(indexOfFirstWork, indexOfLastWork)
  const totalPages = Math.ceil(filteredWorks.length / worksPerPage)

  const handleGetContact = (workId) => {
    toast.success(`Fetching contact for work ID: ${workId}`)
    // Example API call: axios.get(`/api/works/${workId}/contact`, { headers })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-red-200">
      <h2 className="text-xl font-semibold text-red-700 mb-4 pb-2 border-b border-red-100">
        Posted Works
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Filter by District"
          className="px-3 py-2 border border-gray-300 rounded text-sm flex-1"
          value={districtFilter}
          onChange={(e) => setDistrictFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Location"
          className="px-3 py-2 border border-gray-300 rounded text-sm flex-1"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Work Type"
          className="px-3 py-2 border border-gray-300 rounded text-sm flex-1"
          value={workTypeFilter}
          onChange={(e) => setWorkTypeFilter(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Location</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Work Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-black">
            {currentWorks?.map((work, index) => (
              <tr key={work._id || index} className="hover:bg-red-50">
                <td className="px-6 py-4 text-sm">
                  {(currentPage - 1) * worksPerPage + index + 1}
                </td>
                <td className="px-6 py-4 text-sm">{work.location}</td>
                <td className="px-6 py-4 text-sm">{work.title}</td>
                <td className="px-6 py-4 text-sm">₹{work.amount}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleGetContact(work._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition"
                  >
                    Get Contact
                  </button>
                </td>
              </tr>
            ))}
            {currentWorks?.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                  No works found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PostedWorks
