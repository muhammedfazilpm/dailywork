import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { workerotp } from '../Services.js/WorkerApi';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location=useLocation()
  const {state}=location
  const type=state.type
  const email = localStorage.getItem("todayemail");

  const handleSubmit = async () => {
    if (otp.length !== 4) {
      toast.error("Please enter a valid 4 digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const data = { email, otp };
      const response = await axios.post(workerotp, { data });
      
      if (response.data.success) {
        localStorage.removeItem("todayemail");
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
    <div className="min-h-screen w-full flex items-center justify-center bg-red-50 p-4">
      <div className="bg-white w-full max-w-md shadow-xl rounded-xl overflow-hidden">
        {/* Header with red accent */}
        <div className="bg-red-500 py-4 px-6">
          <div className='w-full flex items-center justify-center'>
            <img style={{height:"70px",width:"70px"}} src='/kooliapplogo.png' alt='Logo' />
          </div>
          <h2 className="text-2xl font-bold text-white text-center">Verify Your Email</h2>
        </div>

        <div className="p-8">
          <div className="space-y-6">
            {/* OTP Input */}
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                Enter 4-digit OTP
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="otp"
                  maxLength="4"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-center text-lg"
                  placeholder="1234"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                We've sent a verification code to your email
              </p>
            </div>

            {/* Verify Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${isLoading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : 'Verify OTP'}
            </button>

            {/* Resend OTP Link */}
            <div className="text-center text-sm text-gray-600">
              Didn't receive code?{' '}
              <button
                className="text-red-600 hover:text-red-800 font-medium transition-colors"
                onClick={() => toast.success('New OTP sent to your email')}
              >
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;