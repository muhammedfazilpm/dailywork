import React, { useState } from 'react';

const DocumentCardComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  alert(email)
  };

  return (
    <div className="max-w-3xl w-full flex justify-center mx-auto mt-7">
      <div className="bg-white w-5/6 shadow-md border text-black border-gray-200 rounded-lg  p-4 sm:p-6 lg:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h3 className="text-3xl font-bold  text-blue-500">Welcome to Daily Work</h3>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-black block mb-2">Your email</label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Your password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="remember"
              className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:focus:ring-blue-600"
            />
            <label htmlFor="remember" className="text-sm font-medium text-gray-900 dark:text-gray-300 ml-3">Remember me</label>
            <a href="#" className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">Lost Password?</a>
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
          </div>
        </form>
     
      </div>

    </div>
  );
};

export default DocumentCardComponent;
