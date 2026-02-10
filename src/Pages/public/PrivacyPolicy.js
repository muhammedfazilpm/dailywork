import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaShieldAlt, FaLock, FaCreditCard, FaUserCheck, FaExclamationCircle, FaEnvelope } from "react-icons/fa";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6 group"
          >
            <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back</span>
          </button>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FaShieldAlt className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Privacy Policy
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Your privacy matters to us
                </p>
              </div>
            </div>
            <div className="hidden md:block text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium">
              🔒 Secure & Transparent
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <FaExclamationCircle className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Last updated</p>
                <p className="text-sm text-gray-500">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Version 1.0
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
          {/* Introduction */}
          <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FaUserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold text-gray-900">KooliApp</span> we values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our platform to connect with skilled workers.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="divide-y divide-gray-100">
            {[
              {
                title: "1. Information We Collect",
                icon: "📋",
                color: "from-blue-500 to-blue-600",
                items: [
                  "Full name and contact information",
                  "Phone number for verification",
                  "Work details, skills, and experience posted by workers",
                  "Payment transaction details (processed securely via Razorpay)",
                 
                ]
              },
              {
                title: "2. How We Use Your Information",
                icon: "🔄",
                color: "from-green-500 to-green-600",
                items: [
                  "Enable workers to post free work listings",
                  "Facilitate connections after secure ₹10 payment",
                  "Improve app functionality and user experience",
                  "Send important updates and support messages",
                  "Prevent fraud and ensure platform security",
                  "Analyze usage patterns for better service"
                ]
              },
              {
                title: "3. Secure Payments",
                icon: "💳",
                color: "from-purple-500 to-purple-600",
                description: "All payments are securely processed through Razorpay, India's leading payment gateway. We do not store your card, UPI, or banking details on our servers. Payment information is encrypted and handled with PCI-DSS compliance.",
                iconComponent: <FaCreditCard className="w-6 h-6" />
              },
              {
                title: "4. Data Sharing & Privacy",
                icon: "🤝",
                color: "from-amber-500 to-amber-600",
                description: "We do not sell, rent, or trade your personal data. Worker contact details are shared only after successful payment by the user. We may share anonymized, aggregated data for analytics and business improvement."
              },
              {
                title: "5. Data Security",
                icon: "🔐",
                color: "from-emerald-500 to-emerald-600",
                description: "We implement industry-standard security measures including encryption, secure servers, and regular security audits. Access to personal data is strictly limited to authorized personnel only.",
                iconComponent: <FaLock className="w-6 h-6" />
              },
              {
                title: "6. User Responsibility",
                icon: "⚖️",
                color: "from-red-500 to-red-600",
                description: "Users are responsible for respectful use of contact details obtained through our platform. KooliApp facilitates connections but is not responsible for offline interactions between users and workers. Please report any misconduct immediately."
              },
              {
                title: "7. Policy Updates",
                icon: "📝",
                color: "from-indigo-500 to-indigo-600",
                description: "We may update this Privacy Policy periodically to reflect changes in our practices. Significant changes will be notified through the app or email. Continued use of KooliApp constitutes acceptance of updated policies."
              },
              {
                title: "8. Contact Us",
                icon: "📧",
                color: "from-pink-500 to-pink-600",
                description: "For privacy-related questions, concerns, or data access requests, please contact our privacy team:",
                contact: true,
                iconComponent: <FaEnvelope className="w-6 h-6" />
              }
            ].map((section, index) => (
              <div key={index} className="p-8 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-lg`}>
                    {section.iconComponent || <span className="text-xl">{section.icon}</span>}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      {section.title}
                      {section.title === "3. Secure Payments" && (
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                          PCI-DSS Compliant
                        </span>
                      )}
                    </h2>
                    
                    {section.items ? (
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">
                        {section.description}
                      </p>
                    )}
                    
                    {section.contact && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-3">
                          <FaEnvelope className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium text-gray-900">Email our privacy team</p>
                            <a 
                              href="mailto:info.kooliapp@gmail.com" 
                              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-lg"
                            >
                              info.kooliapp@gmail.com
                            </a>
                            <p className="text-sm text-gray-600 mt-1">
                              We typically respond within 24-48 hours
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {section.title === "3. Secure Payments" && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Encrypted</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Secure</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">PCI Compliant</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaShieldAlt className="w-6 h-6 text-blue-300" />
                <h3 className="text-xl font-bold">Your Privacy is Protected</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                KooliApp is committed to protecting your personal information and being transparent about our data practices. We believe trust is the foundation of meaningful connections.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span>🔒 End-to-end security</span>
                <span>•</span>
                <span>📱 Mobile optimized</span>
                <span>•</span>
                <span>🇮🇳 Made in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm"
          >
            <FaArrowLeft className="w-4 h-4" />
            Return to Previous Page
          </button>
          <div className="text-sm text-gray-500 text-center sm:text-right">
            <p>© {new Date().getFullYear()} KooliApp. All rights reserved.</p>
            <p className="text-xs mt-1">Privacy Policy v1.0 • Effective immediately</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;