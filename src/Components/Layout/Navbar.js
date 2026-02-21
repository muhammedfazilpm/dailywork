import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'flowbite';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem('providertoken')
    window.location.reload();
  };

  return (
    <nav className="bg-gradient-to-r from-black to-red-600 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href='/' className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./kooliapplogo.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Kooliapp</span>
        </a>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          data-collapse-toggle="navbar-default" 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600" 
          aria-controls="navbar-default" 
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link to="/home" className="block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-white md:hover:text-red-300 md:p-0">Home</Link>
            </li>
             <li>
              <Link to="/blog" className="block py-2 px-3 text-white bg-red-600 rounded md:bg-transparent md:text-white md:hover:text-red-300 md:p-0">Blog</Link>
            </li>
            {/* <li>
              <Link to='/profile' className="block py-2 px-3 text-white rounded hover:bg-red-800 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0">Listed Works</Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-red-800 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded hover:bg-red-800 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0">Pricing</a>
            </li> */}
            <li>
              <a 
                
                onClick={logout} 
                className="block font-bold py-2 px-3 text-black p-2 rounded hover:bg-red-800 md:hover:bg-transparent md:border-0 md:hover:text-red-300 md:p-0 cursor-pointer"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;