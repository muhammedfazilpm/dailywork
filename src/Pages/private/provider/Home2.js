import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Layout/Navbar";
import Footer from "../../../Components/Layout/Footer";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import Select from "react-select";
import Swal from "sweetalert2";
import { PaymentGateway } from "../../../Services/Paymentgateway";
import { load } from "@cashfreepayments/cashfree-js";
import { FaSearch, FaPlus, FaMapMarkerAlt, FaUser, FaRupeeSign, FaBriefcase } from "react-icons/fa";
import { Allwork, locationAll ,workersListBylocation,purchase, verifyPayment} from "../../../Services.js/WorkerApi";
import toast from "react-hot-toast";





function Home2() {
  let cashfree;
  const token = localStorage.getItem("providertoken");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showWorkerModal, setShowWorkerModal] = useState(false);
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  const [orderGenerated, setOrderGenerated] = useState({})
  const [paymentSessionId, setPaymentSessionId] = useState(null)


  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedWork, setSelectedWork] = useState("");

  const [jobTitle, setJobTitle] = useState("");
  const [jobAmount, setJobAmount] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [profile,setProfile]=useState(null)
  const [locations,setLocations]=useState([])
  const [works,setWorks]=useState([])

  const [postedJobs, setPostedJobs] = useState([
    // { id: 1, title: "Plumbing Repair", amount: 1500, date: "2024-01-15", status: "Pending" },
  ]);
  const [workersMock,setWorkersMock]=useState([])
  const [open, setOpen] = useState(false);


    const handleGetWorkers = async() => {
    try {
       
    const res = await axios.get(`${workersListBylocation}?locationId=${selectedLocation?.value}&&workId=${selectedWork?.value}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWorkersMock(res?.data?.data)
    setShowLocationModal(false);
    setShowWorkerModal(true);
        
    } catch (error) {
        
    }

  };



const getAllLocation=async()=>{
    try {
       const res = await axios.get(locationAll, {
        headers: { Authorization: `Bearer ${token}` },
      });

       setLocations(res?.data?.data)      
    } catch (error) {
      console.log(error)
      
    }
  }

  const getAllWork=async()=>{
    try {
       const res = await axios.get(Allwork, 
        {
        headers: { Authorization: `Bearer ${token}` },
      });

   setWorks(res?.data?.data)      
    } catch (error) {
      console.log(error)
      
    }
  }

const createPayment = async () => {
  try {
    const res = await axios.post(
      purchase,
      { amount: 10 },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );


    if (res?.status === 200) {

      const paymentSessionId =
        res?.data?.data?.payment_session_id;


      if (!paymentSessionId) {
        toast.error("Payment session not received");
        return;
      }

      // Load SDK
      cashfree = await load({
        mode: "production", // change to "production" in live
      });

      // Open Checkout
      cashfree.checkout({
        paymentSessionId: paymentSessionId, // ✅ correct key
        redirectTarget: "_self", 
      });
    }
  } catch (error) {
    console.error(error);
    toast.error("Try again after some time");
  }
};





  useEffect(()=>{
    getAllLocation()
    getAllWork()
  },[])

  const locationOptions = locations.map((loc) => ({
  value: loc._id,
  label: `${loc.place}, ${loc.town}, ${loc.district}, ${loc.state}`,
  state: loc.state,
  district: loc.district,
  town: loc.town,
  place: loc.place,
}));

  const workOptions = works.map((work) => ({
  value: work._id,
  label: `${work.name}`,
}));

useEffect(() => {
  if (token) {
    const decoded = jwtDecode(token);
    setProfile(decoded);
  }
}, [token]);

  const jobCategories = ["Plumbing", "Electrical", "Carpentry", "Cleaning", "Painting", "Other"];

  



  const handlePostJob = () => {
    if (jobTitle && jobAmount && jobDescription) {
      const newJob = {
        id: postedJobs.length + 1,
        title: jobTitle,
        amount: parseInt(jobAmount),
        date: new Date().toISOString().split('T')[0],
        status: "Pending",
        description: jobDescription,
        category: jobCategory
      };
      setPostedJobs([newJob, ...postedJobs]);
      setShowPostJobModal(false);
      setJobTitle("");
      setJobAmount("");
      setJobDescription("");
      setJobCategory("");
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Navbar />

      <div className="min-h-[90vh] p-4 md:p-6 max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome Back, <span className="text-red-600">{profile?.name}</span></h1>
            <p className="text-gray-600 mt-1">Find skilled workers or post your work requirements</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowLocationModal(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2 shadow-md"
            >
              <FaUser className="text-sm" />
              Find Worker
            </button>
            <button
              onClick={() => setShowPostJobModal(true)}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center gap-2 shadow-md"
            >
              <FaPlus className="text-sm" />
              Post Job
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <FaBriefcase className="text-red-600" />
                  Your Posted Work
                </h2>
                <button
                  onClick={() => setShowPostJobModal(true)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2 text-sm"
                >
                  <FaPlus />
                  Add New Job
                </button>
              </div>

              {postedJobs.length > 0 ? (
                <div className="space-y-4">
                  {postedJobs.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-xl p-4 hover:border-red-200 hover:bg-red-50 transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">Posted on {job.date}</p>
                          {job.description && (
                            <p className="text-gray-500 text-sm mt-2 line-clamp-2">{job.description}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            job.status === "Completed" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {job.status}
                          </span>
                          <p className="text-2xl font-bold text-gray-900 mt-2">₹{job.amount}</p>
                        </div>
                      </div>
                      {job.category && (
                        <div className="mt-3">
                          <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-xs">
                            {job.category}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBriefcase className="text-gray-400 text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No jobs posted yet</h3>
                  <p className="text-gray-500 mb-4">Post your first job and find skilled workers</p>
                  <button
                    onClick={() => setShowPostJobModal(true)}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Post Your First Job
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-red-600">  {profile?.name ? profile.name.charAt(0).toUpperCase() : "U"}</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{profile?.name}</h2>
                  <p className="text-gray-600">📱 {profile?.contactNo}</p>
                  <span className="inline-block mt-1 px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm">
                    Verified User
                  </span>
                </div>
              </div>
              
              <div className="grid invisible grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Jobs Posted</p>
                  <p className="text-2xl font-bold text-gray-900">{postedJobs.length}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-500">Active Jobs</p>
                  <p className="text-2xl font-bold text-red-600">
                    {postedJobs.filter(job => job.status === "Pending").length}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            {/* <div className="bg-black text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FaBriefcase />
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Spent</span>
                  <span className="font-bold">₹4,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Workers Hired</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Avg. Rating</span>
                  <span className="font-bold">4.5 ★</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Posted Jobs */}
          
        </div>
      </div>

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-red-600 p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaMapMarkerAlt />
                Select Your Location and Work
              </h3>
            </div>
            
            <div className="p-6">
              <div className="relative mb-4">
                {/* <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
                             <Select
  options={locationOptions}
  value={selectedLocation}
  onChange={setSelectedLocation}
  placeholder="Search location "
  isSearchable
/>

                             <Select
                             className="mt-4"
  options={workOptions}
  value={selectedWork}
  onChange={setSelectedWork}
  placeholder="Search work "
  isSearchable
/>
              </div>

              

              
            </div>

             <div className="p-2">
             
              

              <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
                <button
                  onClick={() => {
                    setShowLocationModal(false);
                    setSelectedLocation("");
                    setSearch("");
                  }}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleGetWorkers}
                  disabled={!selectedLocation||!selectedWork}
                  className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Find Workers
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Worker List Modal */}
      {showWorkerModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-black p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FaUser />
                Available Workers in {selectedLocation?.place}
              </h3>
              <p className="text-gray-300 text-sm mt-1">Select a worker to hire</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workersMock.map((worker) => (
                  <div
                    key={worker.id}
                    className="border border-gray-200 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{worker?.userId?.name}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          {/* <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-sm font-medium">
                            {worker.rating} ★
                          </span> */}
                          <span className="text-gray-600 text-sm">{worker.experience}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 flex items-center gap-1">
                          <FaRupeeSign className="text-lg" />
                          {worker.amountForWork}
                        </p>
                        <p className="text-gray-500 text-sm">per {worker?.amountType}</p>
                      </div>
                    </div>
                 

{worker?.userId?.contactNo ? (
    <>
    <h4>Contact :- {worker.userId.contactNo}</h4>
     <div className="mt-4 flex gap-3">

    {/* Call Button */}
    <a
      href={`tel:${worker.userId.contactNo}`}
      className="flex items-center justify-center gap-2 w-1/2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
    >
      <FaPhoneAlt className="text-sm" />
      Call
    </a>

    {/* WhatsApp Button */}
    <a
      href={`https://wa.me/${worker.userId.contactNo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 w-1/2 px-4 py-2.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
    >
      <FaWhatsapp className="text-lg" />
      WhatsApp
    </a>
  </div>
    </>
 
) : (
  <button
    onClick={() => setOpen(true)}
    className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
  >
    <FaPhoneAlt />
    Get Number
  </button>
)}

                  
                  </div>
                ))}
              </div>

              <div className="text-center mt-6 pt-6 border-t">
                <button
                  onClick={() => setShowWorkerModal(false)}
                  className="px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Post Job Modal */}
      {showPostJobModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
   <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
  {/* Card */}
  <div className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-8 text-center">
    {/* Close Button */}
    <button onClick={()=>setShowPostJobModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold" onclick="document.getElementById('comingSoon').remove()">
      ×
    </button>
    <h1 className="text-3xl font-bold text-gray-800 mb-3">
      🚀 Coming Soon
    </h1>
    <p className="text-gray-600 mb-6">
      We’re working hard to bring you something awesome. Stay tuned!
    </p>
    <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
      Launching Soon
    </span>
  </div>
</div>


            {/* <div className="bg-red-600 p-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
              
              </h3>
              <p className="text-red-100 text-sm mt-1">Fill in the details to find the right worker</p>
            </div> */}
{/*             
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Plumbing Repair, Painting Work"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={jobCategory}
                    onChange={(e) => setJobCategory(e.target.value)}
                  >
                    <option value="">Select a category</option>
                    {jobCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description *
                  </label>
                  <textarea
                    placeholder="Describe the work requirements..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Budget (₹) *
                  </label>
                  <div className="relative">
                    <FaRupeeSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={jobAmount}
                      onChange={(e) => setJobAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
                <button
                  onClick={() => {
                    setShowPostJobModal(false);
                    setJobTitle("");
                    setJobAmount("");
                    setJobDescription("");
                    setJobCategory("");
                  }}
                  className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePostJob}
                  disabled={!jobTitle || !jobAmount || !jobDescription}
                  className="px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post Job
                </button>
              </div>
            </div> */}
          </div>
        </div>
      )}


      {open && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-80">
      <h2 className="text-lg font-semibold mb-2">Confirm Payment</h2>
      <p className="mb-4">You need to pay ₹10 to show All the numbers. Up to 24 hours</p>
      <p className="mb-4 text-sm md:text-base text-gray-700 font-medium">
  എല്ലാ നമ്പറുകളും കാണുന്നതിനായി 10 രൂപ Pay ചെയ്യുക . ഇത് 24 മണിക്കൂർ വരെ ലഭ്യമായിരിക്കും.
</p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setOpen(false)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            setOpen(false);
           createPayment()
          }}
          className="bg-red-600 text-white px-4 py-2 rounded-2xl"
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
)}


{
  paymentSessionId &&
  <PaymentGateway 
     paymentSessionId={paymentSessionId}
  />
}


      <Footer />
    </div>
  );
}

export default Home2;