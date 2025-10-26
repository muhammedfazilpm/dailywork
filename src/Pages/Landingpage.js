import React from "react";
import { useNavigate } from "react-router-dom";
import '../i18n';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">Kooliapp</div>
        <div className="space-x-4">
          {/* <div className="relative">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-full text-gray-800 appearance-none hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all"
            >
              <option value="en">{t("English")}</option>
              <option value="ml">{t("Malayalam")}</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {t("Connect with")} <span className="text-red-600">{t("Skilled Workers")}</span> {t("or Find")} <span className="text-red-600">{t("Daily Work")}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {t("The fastest way to match work providers with qualified professionals for your daily needs.")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-medium shadow-md"
            >
              {t("Get Work")}
            </button>
            <button
              onClick={() => navigate('/login2')}
              className="px-8 py-4 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors text-lg font-medium shadow-sm"
            >
              {t("Get Worker")}
            </button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50 transform skew-x-12 origin-top-right"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">{t("How It Works")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("Create a Profile")}</h3>
              <p className="text-gray-600">{t("Register as a work provider or skilled worker in minutes.")}</p>
            </div>
            <div className="p-6 rounded-lg bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("Post or Browse")}</h3>
              <p className="text-gray-600">{t("List available work or search for skilled professionals.")}</p>
            </div>
            <div className="p-6 rounded-lg bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("Connect & Work")}</h3>
              <p className="text-gray-600">{t("Message directly and get the job done efficiently.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("What Our Users Say")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-red-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">{t("John D.")}</h4>
                  <p className="text-sm text-gray-500">{t("Construction Worker")}</p>
                </div>
              </div>
              <p className="text-gray-600">{t("Found daily work consistently through this platform. Highly recommended!")}</p>
            </div>
            <div className="p-6 rounded-lg border border-red-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">{t("Sarah M.")}</h4>
                  <p className="text-sm text-gray-500">{t("Small Business Owner")}</p>
                </div>
              </div>
              <p className="text-gray-600">{t("Quickly found skilled workers whenever I needed them. Saved me so much time!")}</p>
            </div>
            <div className="p-6 rounded-lg border border-red-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">{t("Mike T.")}</h4>
                  <p className="text-sm text-gray-500">{t("Electrician")}</p>
                </div>
              </div>
              <p className="text-gray-600">{t("Doubled my income by finding more clients through DailyWorks.")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("Ready to Get Started?")}</h2>
          <p className="text-xl mb-8 opacity-90">{t("Join thousands of work providers and skilled professionals finding opportunities every day.")}</p>
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium shadow-md"
          >
            {t("Sign Up Now")}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Kooliapp</h3>
            <p className="text-gray-400">{t("Connecting talent with opportunity, one day at a time.")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("For Workers")}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("Find Work")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("Create Profile")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("Worker Resources")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("For Employers")}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("Post Jobs")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("Browse Workers")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("Pricing")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("Company")}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("About Us")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("Contact")}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t("Privacy Policy")}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kooliapp. {t("All rights reserved.")}</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
