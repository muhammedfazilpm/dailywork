import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Layout/Navbar";

const KooliBlog = () => {
  return (
    <>
 <div className="w-full bg-gray-100 min-h-screen">
     <Navbar/>
       <div className="bg-red-50 py-12 px-4">
      <Helmet>
        <title>Hire Daily Wage Workers in Kerala | KooliApp 2026 Guide</title>
        <meta
          name="description"
          content="Book verified daily wage workers in Kerala instantly with KooliApp. Transparent labour charges, fast booking & secure payments. Updated 2026 guide."
        />
        <meta
          name="keywords"
          content="daily wage workers Kerala, coolie booking app, labour charges Kerala 2026, loading workers near me"
        />
      </Helmet>

      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          Hire Daily Wage Workers in Kerala Easily with KooliApp (2026 Guide)
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Finding reliable daily wage workers in Kerala can be challenging.
          Whether you need loading workers, house shifting helpers, or
          construction labourers, KooliApp makes the process simple, fast,
          and secure.
        </p>

        {/* Why Choose */}
        <h2 className="text-2xl font-semibold text-red-500 mt-8 mb-4">
          Why Choose KooliApp?
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>✔ Instant Worker Booking</li>
          <li>✔ Verified Labour Profiles</li>
          <li>✔ Transparent Pricing</li>
          <li>✔ Secure Online Payments</li>
          <li>✔ Fast Confirmation</li>
        </ul>

        {/* Charges Table */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          Labour Charges in Kerala (2026 Updated)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-red-200 text-left">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="p-3">Worker Type</th>
                <th className="p-3">Half Day</th>
                <th className="p-3">Full Day</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Loading Worker</td>
                <td className="p-3">₹600–800</td>
                <td className="p-3">₹1000–1400</td>
              </tr>
              <tr className="border-b bg-red-50">
                <td className="p-3">Construction Helper</td>
                <td className="p-3">₹700–900</td>
                <td className="p-3">₹1200–1600</td>
              </tr>
              <tr>
                <td className="p-3">Skilled Mason</td>
                <td className="p-3">₹1200–1500</td>
                <td className="p-3">₹1800–2500</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Booking Steps */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          How to Book Workers Using KooliApp
        </h2>

        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Select your location</li>
          <li>Choose worker type</li>
          <li>Select number of workers</li>
          <li>Confirm booking</li>
          <li>Make secure payment</li>
        </ol>

        {/* Users */}
        <h2 className="text-2xl font-semibold text-red-500 mt-10 mb-4">
          Who Can Use KooliApp?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          KooliApp is perfect for house owners, shop owners, construction
          contractors, event organizers, and small businesses across Kerala.
        </p>

        {/* CTA Section */}
        <div className="mt-12 bg-red-600 text-white p-8 rounded-2xl text-center shadow-md">
          <h3 className="text-2xl font-bold mb-3">
            Book Trusted Workers Now
          </h3>
          <p className="mb-5">
            Save time. Avoid brokers. Hire verified labour instantly.
          </p>
          {/* <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition">
            Download KooliApp
          </button> */}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-semibold text-red-500 mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-red-600">
              How fast can I get workers?
            </h4>
            <p>
              Most bookings are confirmed within minutes based on availability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-red-600">
              Are workers verified?
            </h4>
            <p>Yes, all workers registered on KooliApp are verified.</p>
          </div>

          <div>
            <h4 className="font-semibold text-red-600">
              Is pricing fixed?
            </h4>
            <p>Yes, transparent pricing with no hidden charges.</p>
          </div>
        </div>
      </div>
    </div>

 </div>


   
  
    
    
    </>
    
  );
};

export default KooliBlog;