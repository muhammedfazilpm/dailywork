import React from "react";
import { useNavigate } from "react-router-dom";
import '../i18n';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";

const LandingPage = () => {

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KooliApp",
    url: "https://kooliapp.in",
    logo: "https://kooliapp.in/kooliapplogo.png",
    sameAs: [
      "https://www.instagram.com/kooli_app",
      "https://www.facebook.com/people/Kooli-App"
    ]
  };

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };


  
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans">
      <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      <h1 className="hidden">Book Daily Wage Workers in Kerala</h1>
    </>
<Helmet>

  <title>KooliApp – Find Workers & Daily Wage Jobs Near You</title>
  <meta name="description" content="KooliApp connects workers and work providers by location. Hire skilled workers or find daily wage jobs easily. Unlock contact details for just ₹10." />
  <meta name="keywords" content="daily wage workers, hire workers near me, kooli jobs, labor jobs India, find workers Kerala" />


  <meta property="og:title" content="കൂലി ആപ്പ് - തൊഴിലാളികളെയും ജോലികളെയും കണ്ടെത്താം | KooliApp" />
  <meta name="description" lang="ml" content="നിങ്ങളുടെ അടുത്തുള്ള തൊഴിലാളികളെ കണ്ടെത്താനും ജോലികൾ ലഭിക്കാനും KooliApp സഹായിക്കുന്നു. വെറും 10 രൂപയ്ക്ക് കോൺടാക്റ്റ് വിവരങ്ങൾ നേടാം." />
  <meta name="keywords" lang="ml" content="ജോലി ഒഴിവുകൾ, തൊഴിലാളികൾ, കൂലിപ്പണി, find workers in Kerala, thozhilalikal, jolikal" />
</Helmet>

<h1 className="hidden">Book Daily Wage Workers in Kerala</h1>
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-600">Kooliapp</div>
        <div className="space-x-4">
          {/* <div className="relative group w-fit">
  <select
    onChange={(e) => changeLanguage(e.target.value)}
    className="
      pl-4 pr-12 py-2.5
      bg-white dark:bg-gray-800
      border-2 border-gray-200 dark:border-gray-700
      rounded-full
      text-gray-900 dark:text-gray-100
      text-sm font-medium
      appearance-none
      cursor-pointer
      transition-all duration-300
      hover:border-gray-300 dark:hover:border-gray-600
      hover:shadow-md
      focus:outline-none
      focus:ring-3 focus:ring-red-500/30 focus:ring-offset-1
      focus:border-red-500
      shadow-sm
      dark:shadow-gray-900/20
      min-w-[140px]
    "
    aria-label="Select language"
  >
    <option value="en">{t("English")}</option>
    <option value="ml">{t("Malayalam")}</option>
  </select>
  
  <div className="
    absolute 
    right-3.5
    top-1/2 
    transform -translate-y-1/2 
    pointer-events-none
    flex items-center justify-center
    w-5 h-5
    transition-transform duration-300
    group-hover:scale-110
  ">
    <svg 
      className="w-4 h-4 text-gray-600 dark:text-gray-300 transition-colors" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2.5} 
        d="M19 9l-7 7-7-7" 
      />
    </svg>
  </div>
</div> */}
<div className="relative group w-fit">
  <div className="flex items-center gap-3 p-2">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/kooli_app?igsh=MWVmdnlsZzJpNnJvYg%3D%3D&utm_source=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-2.5
        rounded-full
        bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500
        text-white
        hover:scale-110
        hover:shadow-lg hover:shadow-purple-500/30
        transition-all duration-300
        group/icon
      "
      aria-label="Instagram"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61577365524534&sk=directory_contact_info"
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-2.5
        rounded-full
        bg-blue-600
        text-white
        hover:scale-110
        hover:shadow-lg hover:shadow-blue-500/30
        transition-all duration-300
        group/icon
      "
      aria-label="Facebook"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/kooliapp-india-2666b53ab/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-2.5
        rounded-full
        bg-blue-700
        text-white
        hover:scale-110
        hover:shadow-lg hover:shadow-blue-700/30
        transition-all duration-300
        group/icon
      "
      aria-label="LinkedIn"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/@techupdate8726"
      target="_blank"
      rel="noopener noreferrer"
      className="
        p-2.5
        rounded-full
        bg-red-600
        text-white
        hover:scale-110
        hover:shadow-lg hover:shadow-red-500/30
        transition-all duration-300
        group/icon
      "
      aria-label="YouTube"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
  </div>
</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            {t("Connect with")} <span className="text-red-600">{t("Skilled Workers")}</span> {t("or Find")} <span className="text-red-600">{t("Daily Work")}</span>
          </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl m-12 mx-auto">

  {/* Get Work Card */}
  <div
    onClick={() => navigate("/login")}
    className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200"
  >
    <img
      src="https://static.vecteezy.com/system/resources/previews/046/837/315/large_2x/middle-aged-indian-construction-worker-smiling-at-work-site-industrial-background-diverse-workforce-concept-professional-stock-image-for-editor-photo.jpg"
      alt="daily wage workers in Kerala"
      className="w-full h-48 object-cover rounded-t-xl"
    />

    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {t("Get Work")}
      </h3>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
  {t("ജോലി കണ്ടെത്താം")}
</h3>
      <button className="btn bg-red-600 text-white p-2 m-2 rounded">Click Here</button>
      <p className="text-gray-600 text-sm">
        Find nearby jobs and start earning today
      </p>
    </div>
  </div>

  {/* Get Worker Card */}
  <div
    onClick={() => navigate("/login2")}
    className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-200"
  >
    <img
      src="https://media.istockphoto.com/id/1300212959/photo/contractor-talking-to-a-woman-about-remodeling-her-house.jpg?s=612x612&w=0&k=20&c=urjP8mIErIIdGJcqF7Kfn9VkNrXRncFGRaTt5Q2d4rY="
      alt="Plumber Electrician Photographer"
      className="w-full h-48 object-cover rounded-t-xl"
    />

    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {t("Get Worker")}
      </h3>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
  {t("ജോലിക്കാരെ കണ്ടെത്താം")}
</h3>
            <button className="btn bg-red-600 text-white p-2 m-2 rounded">Click Here</button>

      <p className="text-gray-600 text-sm">
        Hire skilled workers quickly and easily
      </p>
    </div>
  </div>

</div>

         <h3 className="text-2xl md:text-2xl font-bold mb-6 text-gray-900 leading-snug">
  {t("വിദഗ്ദ്ധരായ")} <span className="text-red-600">{t("ജോലിക്കാരെ")}</span> {t("തേടാം OR")} <span className="text-red-600">{t("ദിവസവും പണി")}</span> {t("കണ്ടെത്താം")}
</h3>



          <p className="text-xl mt-4 text-gray-600 mb-10 max-w-2xl mx-auto">
            {t("The fastest way to match work providers with qualified professionals for your daily needs.")}
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
  {t("നിങ്ങളുടെ ദൈനംദിന ആവശ്യങ്ങൾക്കായി തൊഴിൽദാതാക്കളെയും വിദഗ്ദ്ധരായ തൊഴിലാളികളെയും വേഗത്തിൽ ബന്ധിപ്പിക്കുന്നു.")}
</p>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50 transform skew-x-12 origin-top-right"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">{t("How It Works")}</h2>
          <h2 className="text-2xl font-bold text-center mb-16">
  {t("പ്രവർത്തന രീതി")}
</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t("Create a Profile")}</h3>
              <p className="text-gray-600">{t("Register as a work provider or skilled worker in minutes.")}</p>
            <h3 className="text-lg font-semibold mb-3">
  {t("ലോഗിൻ ചെയ്ത് പ്രൊഫൈൽ തുടങ്ങാം")}
</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed">
  {t("തൊഴിൽദാതാവായോ തൊഴിലാളിയായോ മിനിറ്റുകൾക്കുള്ളിൽ രജിസ്റ്റർ ചെയ്യാം.")}
</p>
            </div>
            <div className="p-6 rounded-lg bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">2</span>
              </div>
            <h3 className="text-xl font-semibold mb-3">
  {t("Get Work or Find Worker")}
</h3>
<p className="text-gray-600">
  {t("Workers can add available work, and users can search and hire skilled professionals.")}
</p>

<h3 className="text-lg font-semibold mb-3">
  {t("പണി നോക്കാം   അല്ലെങ്കിൽ പണിക്കാരെ  കണ്ടെത്താം")}
</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed">
  {t("തൊഴിലാളികൾക്ക് പണി ആഡ് ചെയ്യാനും   , ഉപഭോക്താക്കൾക്ക് അനുയോജ്യരായ പണിക്കാരെ  കണ്ടെത്തി ജോലിക്കെടുക്കാനും സാധിക്കും.")}
</p>
            </div>
            <div className="p-6 rounded-lg bg-white hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">3</span>
              </div>
<h3 className="text-xl font-semibold mb-3">{t("Unlock Contact")}</h3>
<p className="text-gray-600">
  {t("Pay ₹10 to access the worker’s contact for 24 hours.")}
</p>
<h3 className="text-lg font-semibold mb-3">
  {t("കോൺടാക്റ്റ് വിവരങ്ങൾ ലഭ്യമാക്കാം")}
</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed">
  {t("വെറും 10 രൂപ നൽകി 24 മണിക്കൂർ നേരത്തേക്ക് തൊഴിലാളിയുടെ ഫോൺ നമ്പർ ലഭ്യമാക്കാം.")}
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 px-6 bg-white">
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
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-red-800 text-white">
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
      </section> */}

      {/* Footer */}
 <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-red-400">Kooliapp</h3>
          <p className="text-gray-400 text-sm">
            {t("Connecting workers and job providers easily.")}
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400 justify-center md:justify-start">
            <button
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-white transition"
            >
              Privacy Policy
            </button>

            <button
              onClick={() => navigate("/terms-and-conditions")}
              className="hover:text-white transition"
            >
              Terms & Conditions
            </button>

            <button
              onClick={() => navigate("/refund-policy")}
              className="hover:text-white transition"
            >
              Refund Policy
            </button>
             <button
              onClick={() => navigate("/blog")}
              className="hover:text-white transition"
            >
              Blog
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center text-gray-400 text-sm space-y-1">
          <p className="flex items-center justify-center gap-2">
            📞 +91 85902 26483
            <a
              href="https://wa.me/918590226483"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 transition"
            >
              💬
            </a>
          </p>
          <p>✉️ info.kooliapp@gmail.com</p>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Kooliapp. {t("All rights reserved.")}
        </div>

      </div>
    </footer>


    </div>
  );
};

export default LandingPage;
