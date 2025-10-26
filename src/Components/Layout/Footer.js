import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-red-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2">Kooliapp</h3>
            <p className="mb-4">
              Connecting skilled professionals with local job opportunities in wiring, plumbing, and more.
            </p>
            <div style={{textAlign:"left"}} className="flex text-left align-middle justify-center space-x-4">
              <a href="#" className="text-white hover:text-red-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2">Quick Links</h3>
            <ul style={{textAlign:"left"}} className="space-y-2">
              <li><a href="#" className="hover:text-red-300">Home</a></li>
              <li><a href="#" className="hover:text-red-300">About Us</a></li>
              <li><a href="#" className="hover:text-red-300">Services</a></li>
              <li><a href="#" className="hover:text-red-300">How It Works</a></li>
              <li><a href="#" className="hover:text-red-300">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2">Our Services</h3>
            <ul style={{textAlign:"left"}} className="space-y-2">
              <li><a href="#" className="hover:text-red-300">Plumbing</a></li>
              <li><a href="#" className="hover:text-red-300">Electrical Work</a></li>
              <li><a href="#" className="hover:text-red-300">Carpentry</a></li>
              <li><a href="#" className="hover:text-red-300">Painting</a></li>
              <li><a href="#" className="hover:text-red-300">Cleaning Services</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-red-600 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>123 Work Street, Job City, 12345</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3" />
                <span>contact@dailyworks.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Kooliapp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;