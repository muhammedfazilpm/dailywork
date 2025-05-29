import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white text-blue-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 px-6 text-center text-3xl font-bold shadow-lg">
        Daily Works
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-100">
        <h1 className="text-5xl font-bold mb-4">Find the Right Work & Get the Best Workers</h1>
        <p className="text-xl text-blue-800">Connecting Daily Work Providers with Skilled Workers</p>
      </section>

      {/* Sections Container */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Add Work Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 transform hover:scale-105 transition-transform">
          <h2 className="text-3xl font-semibold mb-6 text-blue-900">Add Work</h2>
          <p className="text-gray-700 mb-6">Post your availability and get today's work instantly.</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Post a Job
          </button>
        </div>

        {/* Get a Worker Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-blue-100 transform hover:scale-105 transition-transform">
          <h2 className="text-3xl font-semibold mb-6 text-blue-900">Get a Worker</h2>
          <p className="text-gray-700 mb-6">Find a skilled worker for your needs today.</p>
          <button
            onClick={() => navigate('/workers')}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Find a Worker
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center mt-16">
        <p className="text-lg">© 2023 Daily Works. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;