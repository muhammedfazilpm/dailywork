import React, { useEffect, useState } from "react";
import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import PostedWorks from "./Component/Postedwork";
import {
  workerprofileget,
  workerAddress,
  Allwork,
  userWork,
  deleteWork,
  updateWork,
  addAadhar,
  verifyAadhar,
  verifyAddress,
  verifyPayment,
} from "../Services.js/WorkerApi";
import axios from "axios";
import Select from "react-select";
import toast from "react-hot-toast";

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
  const [amount, setAmount] = useState("");
  const [editWorkId, setEditWorkId] = useState(null);

  const [editAddress, setEditAddress] = useState(false);
  const [tempAddress, setTempAddress] = useState("");

const [editLocation, setEditLocation] = useState(false);
  const [tempLocation, setTempLocation] = useState("");
  const saveLocation = () => {
    if (!tempLocation) {
      toast.error("Please select a location");
      return;
    }
    setProfile({ ...profile, location: tempLocation });
    setEditLocation(false);
    toast.success("Location updated successfully!");
  };
  const [workItems, setWorkItems] = useState([
    {
      id: 1,
      location: "Downtown Office",
      description: "Electrical wiring installation for new office space",
      status: "pending"
    },
    {
      id: 2,
      location: "Westside Mall",
      description: "Plumbing repairs in food court area",
      status: "pending"
    },
    {
      id: 3,
      location: "North Park Apartments",
      description: "HVAC system maintenance for building common areas",
      status: "pending"
    },
   
  ]);


  const handleGetNumber = (id) => {
    setWorkItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? {...item, status: "assigned"} : item
      )
    );
  };

  /** ---------------- PROFILE ---------------- **/
  const getProfiles = async () => {
    try {
      const res = await axios.get(workerprofileget, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(res.data.profile);
      setWorks(res.data.userwork);
      if (res.data.profile.aadhar) {
        setAadhar({
          number: res.data.profile.aadhar.number,
          verified: res.data.profile.aadhar.verified,
        });
      }
    } catch (err) {
      toast.error("Failed to load profile");
    }
  };

  const saveAddress = async () => {
    if (!tempAddress) return toast.error("Please enter address");
    try {
      await axios.post(
        workerAddress,
        { address: tempAddress },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Address saved successfully");
      getProfiles();
      setEditAddress(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to save address");
    }
  };

  /** ---------------- WORKS ---------------- **/
  const getWorks = async () => {
    try {
      const res = await axios.get(Allwork, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllWork(res.data);
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
          amount,
          paytype: selectedWork?.paytype,
          workName: selectedWork?.value,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Work added successfully");
      resetWorkModal();
      getProfiles();
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
      getProfiles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update work");
    }
  };

  const handleDeleteWork = async (id) => {
    if (!window.confirm("Are you sure you want to delete this work?")) return;
    try {
      await axios.delete(`${deleteWork}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Work deleted");
      getProfiles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete work");
    }
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
      getProfiles();
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
      getProfiles();
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
  useEffect(() => {
    getProfiles();
    getWorks();
  }, []);

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-red-700 mb-8">
          Worker Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <div className="bg-white rounded-lg shadow-md p-6 border border-red-200">
      <h2 className="text-xl font-semibold text-red-700 mb-4 pb-2 border-b border-red-100">
        Profile Details
      </h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-medium">{profile.name}</p>
        </div>

        {/* Email */}
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{profile.email}</p>
        </div>

        {/* Phone */}
        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="font-medium">{profile.phone}</p>
        </div>

        {/* Location */}
        <div>
          <p className="text-sm text-gray-500">Location</p>
          {editLocation ? (
            <div className="mt-2">
              <select
                value={tempLocation}
                onChange={(e) => setTempLocation(e.target.value)}
                className="w-full p-2 border border-red-300 rounded"
              >
                <option value="">Select a location</option>
                <option value="Kozhikode">Kozhikode</option>
                <option value="Malappuram">Malappuram</option>
                <option value="Kannur">Kannur</option>
                <option value="Wayanad">Wayanad</option>
                <option value="Thrissur">Thrissur</option>
              </select>

              <div className="flex space-x-2 mt-2">
                <button
                  onClick={saveLocation}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditLocation(false)}
                  className="border border-red-600 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : profile.location ? (
            <div className="flex justify-between items-center">
              <p className="font-medium">{profile.location}</p>
              <button
                onClick={() => {
                  setTempLocation(profile.location);
                  setEditLocation(true);
                }}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Edit
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditLocation(true)}
              className="mt-1 text-red-600 text-sm underline hover:text-red-800"
            >
              + Add Location
            </button>
          )}
        </div>

        {/* Address */}
        <div>
          <p className="text-sm text-gray-500">Address</p>
          {editAddress ? (
            <div className="mt-2">
              <textarea
                value={tempAddress}
                onChange={(e) => setTempAddress(e.target.value)}
                className="w-full p-2 border border-red-300 rounded"
              />
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={saveAddress}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditAddress(false)}
                  className="border border-red-600 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start">
              <p className="font-medium overflow-x-scroll overflow-y-hidden">
                {profile.Address || "No address added"}
              </p>
              <button
                onClick={() => {
                  setTempAddress(profile.Address || "");
                  setEditAddress(true);
                }}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Verify Address Button */}
      <div className="mt-6">
        <button
          onClick={() =>
            !profile.Address
              ? toast.error("Please add address first")
              : handlePay()
          }
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Verify Address
        </button>
      </div>
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
                        Work Name
                      </th>
                      <th className="py-2 px-4 text-left text-sm text-red-700">
                        Period
                      </th>
                      <th className="py-2 px-4 text-left text-sm text-red-700">
                        Amount
                      </th>
                      <th className="py-2 px-4 text-center text-sm text-red-700">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {works.map((w) => (
                      <tr key={w._id} className="border-b border-red-100">
                        <td className="py-3 px-4">{w.userWorkname}</td>
                        <td className="py-3 px-4">{w.paytype}</td>
                        <td className="py-3 px-4">₹{w.amount}</td>
                        <td className="py-3 px-4 flex gap-2">
                          <button
                            onClick={() => handleEditWork(w)}
                            className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
                          >
                            Edit
                          </button>
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
        Work List
      </h2>
      
      <div className="space-y-4">
        {workItems.map(item => (
          <div 
            key={item.id}
            className={`border rounded-lg p-4 transition-all duration-200 ${
              item.status === "assigned" 
                ? "border-green-300 bg-green-50" 
                : "border-gray-200 hover:border-red-300 hover:shadow-sm"
            }`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{item.location}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
              
              <button
                onClick={() => handleGetNumber(item.id)}
                disabled={item.status === "assigned"}
                className={`ml-4 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.status === "assigned"
                    ? "bg-green-100 text-green-800 cursor-default"
                    : "bg-red-100 text-red-700 hover:bg-red-200"
                }`}
              >
                {item.status === "assigned" ? "Assigned #" + item.id : "Get Number"}
              </button>
            </div>
            
            {item.status === "assigned" && (
              <div className="mt-2 text-xs text-green-600 font-medium">
                Work order #{item.id} has been assigned to you
              </div>
            )}
          </div>
        ))}
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
                  value: i.Workname,
                  label: i.Workname,
                  paytype: i.paytype,
                }))}
                value={selectedWork}
                onChange={setSelectedWork}
                placeholder="Select Work"
              />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 border border-red-300 rounded"
                placeholder="Enter amount"
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
