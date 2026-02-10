import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { workerRegister } from '../Services.js/WorkerApi';
import toast from 'react-hot-toast';
import { IoPlayBackCircleOutline } from 'react-icons/io5';
import { FaArrowLeft } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();
  const [whatsapp, setwhatsapp] = useState('');
  const [phone,setPhone]=useState('')
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {

let phone = whatsapp.toString().trim();

if (phone.startsWith("+")) {
  phone = phone.slice(1);
}

if (!phone.startsWith("91")) {
  phone = "91" + phone;
}

if (!/^\d{12}$/.test(phone)) {
  toast.error("watsapp Number Should Be 10 Digit")
  return 
}

      const formData = { contactNo:phone, password, name , role:"worker"};
      const response = await axios.post(workerRegister, { formdata: formData });

      
      if (response?.data?.data?.data?.response === false) {
        toast.error(response.data.message);
      } else {
        toast.success('Registration successful!');
        localStorage.setItem('todaywhatsapp', phone);
        navigate('/otp',{ state: {type:"worker"} });
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-worker w-full flex items-center justify-end bg-red-50 p-4">
      <div className="bg-white w-full max-w-md shadow-xl rounded-xl overflow-hidden">
        {/* Header with red accent */}
        <div className="bg-black py-4 px-6">
            <FaArrowLeft onClick={()=>navigate('/')} style={{cursor:"pointer"}} color='white' size={24} />
          
          <div className='w-full flex items-center justify-center'>
            <img style={{height:"70px",width:"70px"}} src='/kooliapplogo.png' alt='Logo' />
          </div>
          <h2 className="text-2xl font-bold text-white text-center">Create Your Account</h2>
        </div>

        <div className="p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {/* Full Name */}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="name"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* whatsapp Input */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                {/* whatsapp Address */}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
  className="h-5 w-5 text-green-500"
  fill="currentColor"
  viewBox="0 0 32 32"
>
  <path d="M16.001 2.003c-7.732 0-14 6.268-14 14 0 2.47.646 4.882 1.873 7.012L2 30l7.164-1.84A13.93 13.93 0 0016.001 30c7.732 0 14-6.268 14-14s-6.268-13.997-14-13.997zm0 25.497a11.45 11.45 0 01-5.845-1.603l-.419-.249-4.253 1.092 1.134-4.145-.273-.428a11.47 11.47 0 01-1.747-6.064c0-6.351 5.169-11.52 11.403-11.52 6.235 0 11.404 5.169 11.404 11.52 0 6.351-5.169 11.397-11.404 11.397z"/>
  <path d="M22.377 18.373c-.348-.174-2.06-1.016-2.379-1.132-.318-.116-.55-.174-.782.174-.232.348-.9 1.132-1.102 1.364-.202.232-.405.261-.753.087-.348-.174-1.47-.541-2.8-1.723-1.034-.922-1.732-2.06-1.934-2.408-.202-.348-.021-.536.153-.71.156-.155.348-.405.522-.608.174-.203.232-.348.348-.58.116-.232.058-.435-.029-.608-.087-.174-.782-1.885-1.072-2.58-.282-.677-.57-.586-.782-.597l-.667-.012c-.232 0-.608.087-.927.435-.319.348-1.216 1.188-1.216 2.9 0 1.712 1.245 3.367 1.419 3.6.174.232 2.452 3.747 5.94 5.252.83.358 1.478.572 1.983.733.833.265 1.591.227 2.19.138.668-.1 2.06-.842 2.352-1.655.29-.813.29-1.51.203-1.655-.087-.145-.319-.232-.667-.406z"/>
</svg>

                </div>
                <input
                  type="whatsapp"
                  id="whatsapp"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="whatsapp"
                  required
                  value={whatsapp}
                  onChange={(e) => setwhatsapp(e.target.value)}
                />
              </div>
            </div>
            
            {/* ----------- */}
             {/* whatsapp Input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {/* whatsapp Address */}
              </label>
              {/* <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
</svg>
                </div>
                <input
                  type="text"
                  id="Phone"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div> */}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                {/* Password */}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${isLoading ? 'bg-red-400 cursor-not-allowed' : 'bg-black hover:bg-red-700'}`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Registering...
                </span>
              ) : 'Register'}
            </button>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-red-600 hover:text-red-800 font-medium transition-colors"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;