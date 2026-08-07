import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Layout/Navbar";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaHandshake,
  FaWhatsapp,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const KooliBlog = () => {
  return (
    <>
      <Helmet>
        <title>
          Find Daily Wage Workers in Kerala | KooliApp 2026
        </title>

        <meta
          name="description"
          content="Connect with daily wage workers and jobs across Kerala using KooliApp. Send work requests, receive responses, and connect securely through our request-based platform."
        />

        <meta
          name="keywords"
          content="daily wage workers Kerala, labour app Kerala, find workers Kerala, construction workers Kerala, loading workers Kerala, helper jobs Kerala, KooliApp"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-100">

        <Navbar />

        {/* Hero */}

        <section className="bg-gradient-to-r from-red-600 to-red-500 text-white">

          <div className="max-w-6xl mx-auto px-6 py-16">

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">

              Find Daily Wage Workers &
              <br />
              Local Jobs Across Kerala

            </h1>

            <p className="mt-6 text-lg text-red-100 max-w-3xl leading-8">

              KooliApp is a platform that connects workers and work
              providers across Kerala. Search nearby workers,
              discover local jobs, send requests and connect
              securely through our request-based system.

            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="bg-white/20 px-5 py-3 rounded-full">
                📍 Location Based Search
              </div>

              <div className="bg-white/20 px-5 py-3 rounded-full">
                👷 Skilled & Unskilled Workers
              </div>

              <div className="bg-white/20 px-5 py-3 rounded-full">
                💼 Local Job Opportunities
              </div>

            </div>

          </div>

        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">

          {/* Introduction */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-red-600 mb-5">

              Why Choose KooliApp?

            </h2>

            <p className="text-gray-700 leading-8">

              Finding trusted daily wage workers or genuine work
              opportunities should be simple. KooliApp helps workers
              and work providers connect quickly without depending on
              brokers or unnecessary middlemen.

            </p>

            <p className="text-gray-700 leading-8 mt-4">

              Whether you're looking for construction workers,
              loading workers, plumbers, electricians, painters,
              carpenters, cleaners or other skilled professionals,
              KooliApp helps you find nearby people based on your
              location.

            </p>

          </div>

          {/* Features */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white rounded-xl shadow p-7">

              <FaMapMarkerAlt className="text-4xl text-red-500 mb-5" />

              <h3 className="text-xl font-bold mb-3">

                Location Based Search

              </h3>

              <p className="text-gray-600 leading-7">

                Search workers and jobs near your location for
                faster connections and better availability.

              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-7">

              <FaUsers className="text-4xl text-red-500 mb-5" />

              <h3 className="text-xl font-bold mb-3">

                Verified Profiles

              </h3>

              <p className="text-gray-600 leading-7">

                Workers and work providers maintain detailed profiles
                to help users make informed decisions.

              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-7">

              <FaHandshake className="text-4xl text-red-500 mb-5" />

              <h3 className="text-xl font-bold mb-3">

                Request Based Connection

              </h3>

              <p className="text-gray-600 leading-7">

                Instead of unlocking contact numbers, users send work
                requests or job applications directly through
                KooliApp.

              </p>

            </div>

          </div>

          {/* How it Works */}

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold text-red-600 mb-6">

              How KooliApp Works

            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  1
                </div>

                <div>

                  <h3 className="font-semibold text-lg">

                    Search Nearby Workers or Jobs

                  </h3>

                  <p className="text-gray-600 mt-2">

                    Select your location and preferred work category
                    to discover workers or jobs near you.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  2
                </div>

                <div>

                  <h3 className="font-semibold text-lg">

                    Send a Request

                  </h3>

                  <p className="text-gray-600 mt-2">

                    A small ₹10 Platform Service Fee is charged when
                    sending a work request or job application through
                    KooliApp.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  3
                </div>

                <div>

                  <h3 className="font-semibold text-lg">

                    Wait for Acceptance

                  </h3>

                  <p className="text-gray-600 mt-2">

                    The receiving user gets an instant WhatsApp
                    notification and can accept or reject the request.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                  4
                </div>

                <div>

                  <h3 className="font-semibold text-lg">

                    Connect & Start Working

                  </h3>

                  <p className="text-gray-600 mt-2">

                    Once accepted, both users can communicate and
                    proceed with the work arrangement.

                  </p>

                </div>

              </div>

            </div>

          </div>
                    {/* Platform Service Fee */}

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

            <div className="flex items-center gap-4 mb-6">

              <FaWallet className="text-4xl text-red-500" />

              <h2 className="text-3xl font-bold text-red-600">
                Platform Service Fee
              </h2>

            </div>

            <p className="text-gray-700 leading-8 mb-5">
              KooliApp charges a small <strong>₹10 Platform Service Fee</strong>
              whenever a work provider sends a work request or a worker submits
              a job application.
            </p>

            <p className="text-gray-700 leading-8 mb-5">
              This fee supports platform maintenance, secure request delivery,
              customer support and continuous improvements. It is
              <strong> not a payment for unlocking contact details.</strong>
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">

              <ul className="space-y-3">

                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Secure request delivery</span>
                </li>

                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Wallet-based payment system</span>
                </li>

                <li className="flex gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Simple and transparent pricing</span>
                </li>

              </ul>

            </div>

          </div>

          {/* WhatsApp */}

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

            <div className="flex items-center gap-4 mb-6">

              <FaWhatsapp className="text-4xl text-green-500" />

              <h2 className="text-3xl font-bold text-red-600">
                Instant WhatsApp Notifications
              </h2>

            </div>

            <p className="text-gray-700 leading-8">

              KooliApp sends WhatsApp notifications at important stages of the
              connection process, helping both workers and work providers stay
              updated in real time.

            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-green-50 rounded-xl p-6">

                <h3 className="font-bold mb-4">
                  Workers Receive
                </h3>

                <ul className="space-y-3">

                  <li>• New work request alerts</li>
                  <li>• Request acceptance updates</li>
                  <li>• Job notifications</li>
                  <li>• Wallet notifications</li>

                </ul>

              </div>

              <div className="bg-red-50 rounded-xl p-6">

                <h3 className="font-bold mb-4">
                  Work Providers Receive
                </h3>

                <ul className="space-y-3">

                  <li>• Worker acceptance notifications</li>
                  <li>• Job application updates</li>
                  <li>• Wallet updates</li>
                  <li>• Important platform alerts</li>

                </ul>

              </div>

            </div>

          </div>

          {/* Popular Categories */}

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold text-red-600 mb-6">
              Popular Worker Categories
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {[
                "Construction Workers",
                "Loading Workers",
                "House Shifting Helpers",
                "Electricians",
                "Plumbers",
                "Carpenters",
                "Painters",
                "Cleaners",
                "Drivers",
                "Garden Workers",
                "Office Helpers",
                "General Labour"
              ].map((item) => (

                <div
                  key={item}
                  className="bg-gray-100 rounded-lg p-4 hover:bg-red-50 transition"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* FAQ */}

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

            <h2 className="text-3xl font-bold text-red-600 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-semibold text-lg">
                  Is KooliApp free to register?
                </h3>

                <p className="text-gray-600 mt-2">
                  Yes. Registration is free for both workers and work providers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Why is there a ₹10 Platform Service Fee?
                </h3>

                <p className="text-gray-600 mt-2">
                  The fee helps facilitate secure connections between workers
                  and work providers and supports platform operations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Is the ₹10 charged to unlock contact details?
                </h3>

                <p className="text-gray-600 mt-2">
                  No. Contact details are not sold. The fee is charged for the
                  connection request made through KooliApp.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  How do users know about new requests?
                </h3>

                <p className="text-gray-600 mt-2">
                  KooliApp sends WhatsApp notifications whenever important
                  actions occur on your account.
                </p>
              </div>

            </div>

          </div>

          {/* CTA */}

          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-10 text-center mt-10">

            <h2 className="text-4xl font-bold">
              Connect with Workers & Jobs Across Kerala
            </h2>

            <p className="mt-5 text-red-100 max-w-3xl mx-auto leading-8">
              Whether you're looking for work or hiring skilled workers,
              KooliApp makes connecting simple, secure and location-based.
            </p>

          </div>

        </div>

        {/* Footer */}

        <footer className="bg-gray-900 text-gray-300 mt-12">

          <div className="max-w-6xl mx-auto px-6 py-8 text-center">

            <p>
              © {new Date().getFullYear()} KooliApp. All Rights Reserved.
            </p>

            <p className="mt-2">
              Connecting Workers • Connecting Jobs • Building Opportunities
            </p>

          </div>

        </footer>

      </div>

    </>
  );
};

export default KooliBlog;