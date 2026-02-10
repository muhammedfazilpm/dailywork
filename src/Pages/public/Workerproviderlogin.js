 import axios from 'axios';
 import React, { useState } from 'react';
 import { Link, useNavigate } from 'react-router-dom';
import { worke_provider_login,workerLogin } from '../../Services.js/WorkerApi';
 import toast from 'react-hot-toast';
 import { IoPlayBackCircleOutline } from "react-icons/io5";
import { FaArrowLeft } from 'react-icons/fa';
import ForgotPasswordModal from '../../Components/ForgotPasswordModal';
 
 const Workerproviderlogin = () => {
   const navigate = useNavigate();
   const [whatsapp, setwhatsapp] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [openForgot, setOpenForgot] = useState(false);

 
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


       const formData = {contactNo:phone, password,role:"provider" };
       const response = await axios.post(workerLogin, formData);
       
        if (response?.data?.data?.success === false) {
        toast.error(response.data.message);
      } else {
        toast.success('Login successful!');
        localStorage.setItem('providertoken', response?.data?.data?.token);
        window.location.href="/home2"
      }
     } catch (error) {
       console.error('Login error:', error);
       toast.error(error.response?.data?.message || 'An error occurred. Please try again.');
     } finally {
       setIsLoading(false);
     }
   };
 
   return (
     <div className="min-h-screen bg-provider w-full flex items-center justify-end bg-red-50 p-4">
       <div className="bg-white w-full max-w-md shadow-xl rounded-xl overflow-hidden">
         {/* Header with red accent */}
        
         <div className="bg-black py-4 px-6">
            <FaArrowLeft onClick={()=>navigate('/')} style={{cursor:"pointer"}} color='white' size={24} />
           <div className='w-full flex items-center justify-center'>
         <img style={{height:"70px",width:"70px"}} src='/kooliapplogo.png' alt='Money' />
 
           </div>
           <h2 className="text-2xl font-bold text-white text-center">Welcome Back</h2>
           {/* <p className="text-red-100 text-center mt-1">Kooliapp</p> */}
         </div>
 
         <div className="p-8">
           <form className="space-y-5" onSubmit={handleSubmit}>
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
                   type="text"
                   id="whatsapp"
                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                   placeholder="Whatsapp Number"
                   required
                   value={whatsapp}
                   onChange={(e) => setwhatsapp(e.target.value)}
                 />
               </div>
             </div>
 
             {/* Password Input */}
             <div>
               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                
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
 
             {/* Remember Me & Forgot Password */}
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <input
                   id="remember-me"
                   name="remember-me"
                   type="checkbox"
                   className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                 />
                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                   Remember me
                 </label>
               </div>
               <Link
                onClick={()=>setOpenForgot(true)}
                 className="text-sm text-red-600 hover:text-red-800 transition-colors font-medium"
               >
                 Forgot password?
               </Link>
             </div>
 
             {/* Login Button */}
             <button
               type="submit"
               disabled={isLoading}
               className={`w-full py-3 px-4 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors ${isLoading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
             >
               {isLoading ? (
                 <span className="flex items-center justify-center">
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Signing in...
                 </span>
               ) : 'Sign in'}
             </button>
 
             {/* Divider */}
             {/* <div className="relative">
               <div className="absolute inset-0 flex items-center">
                 <div className="w-full border-t border-gray-300"></div>
               </div>
               <div className="relative flex justify-center text-sm">
                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
               </div>
             </div> */}
 
             {/* Social Login Options */}
             {/* <div className="grid grid-cols-2 gap-3">
               <button
                 type="button"
                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
               >
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                   <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                 </svg>
               </button>
               <button
                 type="button"
                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
               >
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                   <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                 </svg>
               </button>
             </div> */}
 
             {/* Register Link */}
             <div className="text-center text-sm text-gray-600">
               Don't have an account?{' '}
               <Link
                 to="/register2"
                 className="text-red-600 hover:text-red-800 font-medium transition-colors"
               >
                 Sign up
               </Link>
             </div>
           </form>
         </div>
       </div>
           <ForgotPasswordModal
  open={openForgot}
  role="provider"
  onClose={() => setOpenForgot(false)}
/>
     </div>
   );
 };
 
 export default Workerproviderlogin;