import React, { useEffect, useState } from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import {jwtDecode} from "jwt-decode";
import {
  Allwork,
  userWork,
  deleteWork,
  updateWork,
  addAadhar,
  verifyAadhar,
  verifyAddress,
  verifyPayment,
  workerWorkGet,
  locationAll,
  workerGetJobs,
  workerJobPurchase,
} from "../Services.js/WorkerApi";
import axios from "axios";
import Select from "react-select";
import toast from "react-hot-toast";
import { load } from "@cashfreepayments/cashfree-js";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function Home() {
  const token = localStorage.getItem("token");


  const [profile, setProfile] = useState("");
  const [works, setWorks] = useState([]);
  const [allWork, setAllWork] = useState([]);

  const [aadhar, setAadhar] = useState({ number: "", verified: false });
  const [aadharNumber, setAadharNumber] = useState("");

  const [showWorkModal, setShowWorkModal] = useState(false);
  const [showAadharModal, setShowAadharModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [amount, setAmount] = useState("");
  const [editWorkId, setEditWorkId] = useState(null);
  const [workItems, setWorkItems] = useState([]);
  const[allLocation,setAllLocation]=useState([])
  const [paymentType, setPaymentType] = useState(null);

  // Jobs posted by providers (worker job flow)
  const [jobs, setJobs] = useState([]);
  const [selectedJobLocation, setSelectedJobLocation] = useState(null);
  const [jobsLoading, setJobsLoading] = useState(false);



  const [editAddress, setEditAddress] = useState(false);
  const [tempAddress, setTempAddress] = useState("");

const [editLocation, setEditLocation] = useState(false);
  const [tempLocation, setTempLocation] = useState("");

useEffect(() => {
  if (token) {
    const decoded = jwtDecode(token);
    setProfile(decoded);
  }
}, [token]);

  const saveLocation = () => {
    if (!tempLocation) {
      toast.error("Please select a location");
      return;
    }
    // setProfile({ ...profile, location: tempLocation });
    setEditLocation(false);
    toast.success("Location updated successfully!");
  };


  const paymentOptions = [
  { value: "hour", label: "Per Hour (മണിക്കൂറിൽ) " },
  { value: "day", label: "Per Day (ദിവസത്തിൽ)" },
  { value: "month", label: "Per Month (മാസത്തിൽ) " },
];
  const getAllLocation=async()=>{
    try {
       const res = await axios.get(locationAll, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(res?.data?.data,"all location")
setAllLocation(res?.data?.data)      
    } catch (error) {
      console.log(error)
      
    }
  }


  const handleGetNumber = (id) => {
    setWorkItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? {...item, status: "assigned"} : item
      )
    );
  };

  const getWork=async()=>{
    try {
      const res = await axios.get(workerWorkGet, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res?.data?.data,"works")
      setWorks(res?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
getWork()
getWorks()
getAllLocation()
  },[])

  /** ---------------- PROFILE ---------------- **/
  // const getProfiles = async () => {
  //   try {
  //     const res = await axios.get(workerprofileget, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setProfile(res.data.profile);
  //     setWorks(res.data.userwork);
  //     if (res.data.profile.aadhar) {
  //       setAadhar({
  //         number: res.data.profile.aadhar.number,
  //         verified: res.data.profile.aadhar.verified,
  //       });
  //     }
  //   } catch (err) {
  //     toast.error("Failed to load profile");
  //   }
  // };

  // const saveAddress = async () => {
  //   if (!tempAddress) return toast.error("Please enter address");
  //   try {
  //     await axios.post(
  //       workerAddress,
  //       { address: tempAddress },
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );
  //     toast.success("Address saved successfully");
  //     // getProfiles();
  //     setEditAddress(false);
  //   } catch (err) {
  //     toast.error(err.response?.data?.message || "Failed to save address");
  //   }
  // };


  const locationOptions = allLocation.map((loc) => ({
  value: loc._id,
  label: `${loc.place}, ${loc.town}, ${loc.district}, ${loc.state}`,
  state: loc.state,
  district: loc.district,
  town: loc.town,
  place: loc.place,
}));

  const handleFetchJobs = async () => {
    if (!selectedJobLocation) {
      toast.error("Please select a location");
      return;
    }

    try {
      setJobsLoading(true);
      const res = await axios.get(
        `${workerGetJobs}?locationId=${selectedJobLocation.value}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setJobs(res?.data?.data || []);
      if (!res?.data?.data || res.data.data.length === 0) {
        toast("No jobs found for this location yet");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to load jobs for this location"
      );
    } finally {
      setJobsLoading(false);
    }
  };

  const handleJobsPayment = async () => {
    try {
      const res = await axios.post(
        workerJobPurchase,
        { amount: 10 },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res?.status === 200) {
        const paymentSessionId = res?.data?.data?.payment_session_id;

        if (!paymentSessionId) {
          toast.error("Payment session not received");
          return;
        }

        const cashfree = await load({
          mode: "production", // change to "sandbox" in testing
        });

        await cashfree.checkout({
          paymentSessionId,
          redirectTarget: "_self",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Try again after some time");
    }
  };


  /** ---------------- WORKS ---------------- **/
  const getWorks = async () => {
    try {
      const res = await axios.get(Allwork, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res?.data?.data,"all work")
      setAllWork(res?.data?.data);
    } catch (err) {
      toast.error("Failed to load works");
    }
  };

  const handleAddWork = async () => {
    if (!selectedWork || !amount) return toast.error("Please fill all fields");
    try {
      await axios.post(
        userWork,
        {
          amountForWork:amount,
          workId:selectedWork?.value,
          locationId:selectedLocation?.value,
          amountType:paymentType?.value
         
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Work added successfully");
      resetWorkModal();
      getWork()
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add work");
    }
  };

  const handleUpdateWork = async () => {
    if (!selectedWork || !amount) return toast.error("Please fill all fields");
    try {
      await axios.put(
        `${updateWork}/${editWorkId}`,
        {
          amount,
          paytype: selectedWork?.paytype,
          workName: selectedWork?.value,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Work updated successfully");
      resetWorkModal();
      // getProfiles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update work");
    }
  };

 const handleDeleteWork = (id) => {
    toast((t) => (
      <span>
        Are you sure you want to delete this work?
        <div className="mt-3 flex gap-2">
          <button
            className="bg-red-600 text-white px-3 py-1 rounded"
            onClick={async () => {
              try {
              await axios.delete(deleteWork, {
  data: { id },   
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

                toast.dismiss(t.id);
                toast.success("Work deleted");
                getWork();
              } catch {
                toast.dismiss(t.id);
                toast.error("Delete failed");
              }
            }}
          >
            Yes
          </button>
          <button
            className="bg-gray-200 px-3 py-1 rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </span>
    ));
  };

  const handleEditWork = (work) => {
    setSelectedWork({
      value: work.userWorkname,
      label: work.userWorkname,
      paytype: work.paytype,
    });
    setAmount(work.amount);
    setEditWorkId(work._id);
    setShowWorkModal(true);
  };

  const resetWorkModal = () => {
    setShowWorkModal(false);
    setSelectedWork(null);
    setAmount("");
    setEditWorkId(null);
  };

  /** ---------------- AADHAR ---------------- **/
  const handleAddAadhar = async () => {
    if (!aadharNumber || aadharNumber.length !== 12)
      return toast.error("Enter valid 12-digit Aadhaar");
    try {
      await axios.post(
        addAadhar,
        { number: aadharNumber },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Aadhaar added successfully");
      setShowAadharModal(false);
      setAadharNumber("");
      // getProfiles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add Aadhaar");
    }
  };

  const handleVerifyAadhar = async () => {
    try {
      await axios.post(
        verifyAadhar,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Aadhaar verification submitted");
      // getProfiles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to verify Aadhaar");
    }
  };

  /** ---------------- PAYMENT ---------------- **/
  const handlePay = async () => {
    const ok = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!ok) return toast.error("Razorpay SDK failed to load");

    try {
      const resp = await axios.post(
        verifyAddress,
        { amount: 299 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const order = resp.data;

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Demo Shop",
        description: "Test purchase",
        order_id: order.id,
        handler: async function (response) {
          const verify = await axios.post(verifyPayment, response, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (verify.data.ok) toast.success("Payment verified!");
          else toast.error("Verification failed");
        },
        prefill: {
          name: profile.name || "Test User",
          email: profile.email || "test@example.com",
          contact: profile.phone || "9999999999",
        },
        theme: { color: "#dc2626" },
      };

      new window.Razorpay(options).open();
    } catch (err) {
      toast.error("Something went wrong while creating order");
    }
  };

  /** ---------------- INIT ---------------- **/
  // useEffect(() => {
  //   getProfiles();
  //   getWorks();
  // }, []);

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-700 mb-8">
          Worker Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-red-100">
  <div className="flex items-center gap-4 mb-6">
    {/* Avatar */}
    <div className="w-14 h-14 rounded-full p-[40px] text-[30px] bg-red-600 flex items-center justify-center text-white text-xl font-semibold">
      {profile?.name ? profile.name.charAt(0).toUpperCase() : "U"}
    </div>

    {/* Name & Role */}
    <div>
      <h2 className="text-lg font-semibold text-gray-800">
        {profile?.name || "User Name"}
      </h2>
      <p className="text-sm text-gray-500">Worker Profile</p>
    </div>
  </div>

  <div className="space-y-4">
    {/* Phone */}
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
      <div>
        <p className="text-xs text-gray-500">Phone Number</p>
        <p className="font-medium text-gray-800">
          {profile?.contactNo || "Not provided"}
        </p>
      </div>
      <span className="text-green-600 text-xs font-medium">Verified</span>
    </div>

    {/* Location (optional) */}
    {profile?.location && (
      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
        <div>
          <p className="text-xs text-gray-500">Location</p>
          <p className="font-medium text-gray-800">{profile.location}</p>
        </div>
      </div>
    )}

    {/* Address (optional) */}
    {profile?.Address && (
      <div className="bg-gray-50 rounded-lg p-3">
        <p className="text-xs text-gray-500 mb-1">Address</p>
        <p className="font-medium text-gray-800 leading-relaxed">
          {profile.Address}
        </p>
      </div>
    )}
  </div>

  {/* Action Buttons */}
  {/* <div className="mt-6 flex gap-3">
    <button
      className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition"
    >
      Edit Profile
    </button>
    <button
      className="flex-1 border border-red-600 text-red-600 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition"
    >
      Verify Details
    </button>
  </div> */}
</div>


          {/* Work Details */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-red-200">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-red-100">
              <h2 className="text-xl font-semibold text-red-700">Work Details</h2>
              <button
                onClick={() => {
                  setSelectedWork(null);
                  setAmount("");
                  setEditWorkId(null);
                  setShowWorkModal(true);
                }}
                className="bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700"
              >
                Add Work
              </button>
            </div>

            <div className="overflow-x-auto">
              {works.length > 0 ? (
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="py-2 px-4 text-left text-sm text-red-700">
                        Work
                      </th>
                      <th className="py-2 px-4 text-left text-sm text-red-700">
                        Period
                      </th>
                      <th className="py-2 px-4 text-left text-sm text-red-700">
                        Amount
                      </th>
                       <th className="py-2 px-4 text-left text-sm text-red-700">
                        Location
                      </th>
                      <th className="py-2 px-4 text-center text-sm text-red-700">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {works.map((w) => (
                      <tr key={w._id} className="border-b border-red-100">
                        <td className="py-3 px-4">{w?.workId?.name}</td>
                        <td className="py-3 px-4">{w.amountType}</td>
                        <td className="py-3 px-4">₹{w.amountForWork}</td>
                        <td className="py-3 px-4">₹{w?.locationId?.place}</td>

                        <td className="py-3 px-4 flex gap-2">
                          {/* <button
                            onClick={() => handleEditWork(w)}
                            className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
                          >
                            Edit
                          </button> */}
                          <button
                            onClick={() => handleDeleteWork(w._id)}
                            className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center py-4 text-gray-500">No works added</p>
              )}
            </div>
          </div>

          {/* Aadhaar */}
          

            <div className="bg-white rounded-lg shadow-md p-6 border border-red-200">
              <h2 className="text-xl font-semibold text-red-700 mb-4 pb-2 border-b border-red-100">
                Available Jobs in Your Location
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                നിങ്ങളുടെ സ്ഥലത്ത് പോസ്റ്റ് ചെയ്തിട്ടുള്ള ജോലികൾ ഇവിടെ കാണാം.
                Select a location to see jobs posted by providers. If you have an active
                subscription, you will also see their contact numbers.
              </p>

              <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-end mb-4">
                <div className="flex-1">
                  <Select
                    options={locationOptions}
                    value={selectedJobLocation}
                    onChange={setSelectedJobLocation}
                    placeholder="Select your location"
                    isSearchable
                  />
                </div>
                <button
                  onClick={handleFetchJobs}
                  disabled={jobsLoading || !selectedJobLocation}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {jobsLoading ? "Loading..." : "Find Jobs"}
                </button>
              </div>

              {jobs.length > 0 && (
                <div className="mb-4 flex justify-end">
                  <button
                    onClick={handleJobsPayment}
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 text-sm"
                  >
                    Unlock all contacts for 24 hours (₹10)
                  </button>
                </div>
              )}

              <div className="space-y-3 max-h-80 overflow-y-auto">
                {jobs.length === 0 && !jobsLoading && (
                  <p className="text-sm text-gray-500">
                    നിലവിൽ ജോലികൾ ഒന്നും കണ്ടില്ല. Please select a location and click
                    "Find Jobs" to see available work.
                  </p>
                )}

                {jobs.map((job) => {
                  const salary =
                    job.salary ??
                    job.amount ??
                    job.budget ??
                    job.offeredAmount ??
                    null;

                  return (
                    <div
                      key={job._id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-red-300 hover:bg-red-50 transition"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">
                            {job.jobTitle}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            Posted on{" "}
                            {job.createdAt
                              ? new Date(job.createdAt).toLocaleDateString("en-IN")
                              : "-"}
                          </p>
                          {salary && (
                            <p className="mt-2 text-sm text-gray-800 font-medium">
                              Salary: ₹{salary}
                            </p>
                          )}
                        </div>

                        <div className="text-right min-w-[120px]">
                          {job.contactNo ? (
                            <>
                              <p className="text-xs text-green-700 font-semibold mb-1">
                                Contact unlocked
                              </p>
                              <p className="text-sm font-medium text-gray-900">
                                {job.contactNo}
                              </p>
                            </>
                          ) : (
                            <>
                            <p className="text-xs text-amber-700 font-medium">
                              Contact number locked
                              <br />
                              (complete payment to unlock)
                            </p>
                           
                            
                            
                            </>
                          
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          
        </div>
      </div>

      {/* Work Modal */}
      {showWorkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-red-700 mb-4">
              {editWorkId ? "Edit Work" : "Add Work"}
            </h3>
            <div className="space-y-4">
              <Select
                options={allWork.map((i) => ({
                  value: i._id,
                  label: i.name,
                  paytype: i.paytype,
                }))}
                value={selectedWork}
                onChange={setSelectedWork}
                placeholder="Select Work"
              />

               <Select
  options={locationOptions}
  value={selectedLocation}
  onChange={setSelectedLocation}
  placeholder="Search place "
  isSearchable
/>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 border border-red-300 rounded"
                placeholder="Enter amount"
              />

              <Select
  options={paymentOptions}
  value={paymentType}
  onChange={setPaymentType}
  placeholder="Select Payment Type"
  isSearchable={false}
/>


            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={resetWorkModal}
                className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-50"
              >
                Cancel
              </button>
              <button
                onClick={editWorkId ? handleUpdateWork : handleAddWork}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                {editWorkId ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Aadhaar Modal */}
      {showAadharModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-red-700 mb-4">
              Add Aadhaar
            </h3>
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              maxLength="12"
              className="w-full p-2 border border-red-300 rounded mb-4"
              placeholder="Enter 12-digit Aadhaar"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAadharModal(false);
                  setAadharNumber("");
                }}
                className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddAadhar}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;
