import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { workerLogin } from '../Services.js/WorkerApi';
import toast from 'react-hot-toast';

const DocumentCardComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let formData = { email, password };
      const response = await axios.post(workerLogin, { formData });
      if (response.data.success === false) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.token);
        navigate('/home');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-50">
      <div className="bg-white w-full max-w-md shadow-2xl rounded-lg p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Heading */}
          <h3 className="text-3xl font-bold text-blue-600 text-center mb-8">
            Welcome to Daily Work
          </h3>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="text-center text-sm text-gray-600">
            Not registered?{' '}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DocumentCardComponent;