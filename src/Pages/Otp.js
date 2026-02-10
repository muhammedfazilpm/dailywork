import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { workerotp } from '../Services.js/WorkerApi';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location=useLocation()
  const {state}=location
  const type=state.type
  const whatsapp = localStorage.getItem("todaywhatsapp");

  const handleSubmit = async () => {
    if (otp.length !== 4) {
      toast.error("Please enter a valid 4 digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const data = { contactNo:whatsapp, otp,role:type };
      const response = await axios.post(workerotp, { data });

      console.log(response.data)
      
      if (response?.data?.data?.response) {
        localStorage.removeItem("todaywhatsapp");
        toast.success(response.data.message);
        if(type=="provider"){
          navigate('/login2');

        }
        else{
        navigate('/login');

        }
         
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      toast.error(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

return (
  <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">

      {/* Header */}
    <div className="relative bg-gradient-to-r from-red-600 to-red-500 py-6 px-6 text-center">

  {/* Back Button */}
  <button
    onClick={() => navigate(-1)}
    className="absolute left-4 top-6 text-white p-2 rounded-full hover:bg-white/20 transition"
  >
    <FaArrowLeft size={18} />
  </button>

  <div className="flex justify-center mb-3">
    <img
      src="/kooliapplogo.png"
      alt="Logo"
      className="h-16 w-16 rounded-full bg-white p-2 shadow-md"
    />
  </div>

  <h2 className="text-2xl font-bold text-white">
    Verify WhatsApp OTP
  </h2>
  <p className="text-red-100 text-sm mt-1">
    Secure verification
  </p>
</div>



      {/* Body */}
      <div className="p-8">
        <div className="space-y-6">

          {/* OTP Input */}
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-semibold text-gray-700 mb-2 text-center"
            >
              Enter 4-digit code
            </label>

            <input
              type="text"
              id="otp"
              maxLength="4"
              className="w-full text-center text-2xl tracking-widest font-bold py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition"
              placeholder="• • • •"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <p className="mt-3 text-sm text-gray-500 text-center">
              OTP sent to your WhatsApp number
            </p>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full py-4 rounded-xl font-semibold text-white text-lg transition-all duration-200 ${
              isLoading
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 active:scale-[0.98]"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Verifying...
              </span>
            ) : (
              "Verify OTP"
            )}
          </button>

          {/* Resend */}
          {/* <div className="text-center text-sm text-gray-600">
            Didn’t receive the code?
            <button
              onClick={() => toast.success("New OTP sent to your WhatsApp")}
              className="ml-1 text-red-600 font-semibold hover:underline"
            >
              Resend OTP
            </button>
          </div> */}

        </div>
      </div>
    </div>
  </div>
);

};

export default Otp;