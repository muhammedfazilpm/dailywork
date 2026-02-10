import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaFileContract, FaGavel, FaUserShield, FaMoneyBillWave, FaExclamationTriangle, FaBalanceScale, FaHandshake, FaBan, FaHistory, FaEnvelope } from "react-icons/fa";

function TermsAndConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4 sm:px-6 lg:px-8">
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
              <div className="p-3 bg-orange-100 rounded-xl">
                <FaFileContract className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Terms & Conditions
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Legal agreement for using KooliApp
                </p>
              </div>
            </div>
            <div className="hidden md:block text-xs px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full font-medium">
              📋 Binding Agreement
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-orange-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <FaExclamationTriangle className="w-5 h-5 text-orange-600" />
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
              Version 1.0 • Please read carefully
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="mb-8 p-4 bg-gradient-to-r from-orange-100 to-amber-100 border-l-4 border-orange-500 rounded-lg">
          <div className="flex items-start gap-3">
            <FaExclamationTriangle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-orange-900">Important Notice</p>
              <p className="text-orange-800 text-sm mt-1">
                By accessing or using KooliApp, you agree to be bound by these Terms and Conditions. 
                If you do not agree, please discontinue use of the platform immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-orange-200">
          {/* Introduction */}
          <div className="p-8 border-b border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <FaHandshake className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Welcome to KooliApp
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Welcome to KooliApp. By accessing or using our website or web application, 
                  you agree to be bound by these Terms and Conditions. Please read them carefully 
                  as they form a legally binding agreement between you and KooliApp.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="divide-y divide-orange-100">
            {[
              {
                title: "1. Platform Overview",
                icon: "🏢",
                color: "from-blue-500 to-blue-600",
                description: "KooliApp is a digital platform that connects skilled workers with users seeking their services. Workers can create and manage their work listings free of charge. Users who wish to access worker contact details are required to make a one-time payment of ₹10 per connection.",
                highlight: "Free for workers • ₹10 per contact access"
              },
              {
                title: "2. User Eligibility",
                icon: "🔞",
                color: "from-purple-500 to-purple-600",
                description: "You must be at least 18 years old and legally competent to enter into binding agreements to use KooliApp. By registering and using the platform, you confirm that you meet these eligibility requirements.",
                iconComponent: <FaUserShield className="w-6 h-6" />
              },
              {
                title: "3. Payment Terms",
                icon: "💵",
                color: "from-green-500 to-green-600",
                description: "Payments for accessing worker contact details are processed securely through Razorpay, a PCI-DSS compliant payment gateway. The ₹10 payment grants access only to the selected worker's contact information for communication purposes.",
                iconComponent: <FaMoneyBillWave className="w-6 h-6" />
              },
              {
                title: "4. Refund Policy",
                icon: "↩️",
                color: "from-red-500 to-red-600",
                description: "Once payment is successfully completed and contact details are displayed to the user, the amount paid is non-refundable. No refunds will be provided for accessed contact information.",
                warning: true
              },
              {
                title: "5. User Responsibilities",
                icon: "👤",
                color: "from-teal-500 to-teal-600",
                items: [
                  "Provide accurate and complete information during registration",
                  "Use worker contact details responsibly and respectfully",
                  "Do not misuse or share contact details for spam, harassment, or illegal activities",
                  "Respect workers' time and professional boundaries",
                  "Verify work quality and terms directly with workers",
                  "Report any suspicious or inappropriate behavior immediately"
                ]
              },
              {
                title: "6. Worker Responsibilities",
                icon: "👷",
                color: "from-amber-500 to-amber-600",
                items: [
                  "Ensure all work details, skills, and experience listed are accurate and truthful",
                  "Respond professionally and promptly to user inquiries",
                  "Comply with all applicable laws, regulations, and professional standards",
                  "Maintain appropriate insurance and licenses as required by law",
                  "Resolve disputes professionally and amicably",
                  "Update availability and contact information regularly"
                ]
              },
              {
                title: "7. Limitation of Liability",
                icon: "⚖️",
                color: "from-gray-500 to-gray-700",
                description: "KooliApp acts only as a connecting platform between workers and users. We are not responsible for:",
                items: [
                  "The quality, safety, or outcome of work performed",
                  "Payments made outside the KooliApp platform",
                  "Disputes, injuries, or damages arising from user-worker interactions",
                  "Verification of worker credentials, licenses, or insurance",
                  "Communication or agreements made offline between parties"
                ],
                iconComponent: <FaBalanceScale className="w-6 h-6" />
              },
              {
                title: "8. Account Suspension & Termination",
                icon: "🚫",
                color: "from-red-500 to-red-600",
                description: "We reserve the right to suspend or terminate accounts that:",
                items: [
                  "Violate these Terms and Conditions",
                  "Engage in fraudulent, abusive, or illegal activities",
                  "Provide false or misleading information",
                  "Harass other users or workers",
                  "Attempt to circumvent payment systems",
                  "Otherwise misuse the platform"
                ],
                iconComponent: <FaBan className="w-6 h-6" />
              },
              {
                title: "9. Changes to Terms",
                icon: "🔄",
                color: "from-indigo-500 to-indigo-600",
                description: "We may update these Terms and Conditions periodically to reflect changes in our services, legal requirements, or business practices. Continued use of KooliApp after updates constitutes acceptance of the revised terms. Significant changes will be notified through the app or email.",
                iconComponent: <FaHistory className="w-6 h-6" />
              },
              {
                title: "10. Contact & Dispute Resolution",
                icon: "📞",
                color: "from-pink-500 to-pink-600",
                description: "For any questions, concerns, or disputes regarding these Terms and Conditions:",
                contact: true,
                items: [
                  "First attempt to resolve issues directly with the other party",
                  "Contact KooliApp support for platform-related issues",
                  "For legal notices, use the contact information below"
                ],
                iconComponent: <FaEnvelope className="w-6 h-6" />
              }
            ].map((section, index) => (
              <div key={index} className="p-8 hover:bg-orange-50/50 transition-colors duration-200">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-lg`}>
                    {section.iconComponent || <span className="text-xl">{section.icon}</span>}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      {section.title}
                      {section.warning && (
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full font-medium">
                          Non-refundable
                        </span>
                      )}
                    </h2>
                    
                    {section.highlight && (
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-blue-800 font-medium">{section.highlight}</p>
                      </div>
                    )}
                    
                    {section.description && !section.items && (
                      <p className="text-gray-700 leading-relaxed">
                        {section.description}
                      </p>
                    )}
                    
                    {section.items && (
                      <>
                        {section.description && (
                          <p className="text-gray-700 mb-3">{section.description}</p>
                        )}
                        <ul className="space-y-3">
                          {section.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                section.color.includes('red') ? 'bg-red-500' :
                                section.color.includes('green') ? 'bg-green-500' :
                                'bg-orange-500'
                              }`}></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    {section.contact && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                        <div className="flex items-center gap-3">
                          <FaEnvelope className="w-5 h-5 text-orange-600" />
                          <div>
                            <p className="font-medium text-gray-900">Contact for Legal Inquiries</p>
                            <a 
                              href="mailto:info.kooliapp@gmail.com" 
                              className="text-orange-600 hover:text-orange-800 transition-colors duration-200 font-medium text-lg"
                            >
                              info.kooliapp@gmail.com
                            </a>
                            <p className="text-sm text-gray-600 mt-1">
                              For terms-related questions only. Business hours: Mon-Fri, 9AM-6PM IST
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {section.title === "3. Payment Terms" && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">Secure</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">PCI Compliant</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">One-time Payment</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Acceptance Footer */}
          <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaGavel className="w-6 h-6 text-orange-300" />
                <h3 className="text-xl font-bold">Acceptance of Terms</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                By continuing to use KooliApp, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and Conditions. Your use of our platform 
                constitutes acceptance of this agreement.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-200">
                <span>📄 Legally Binding</span>
                <span>•</span>
                <span>👥 User Protection</span>
                <span>•</span>
                <span>⚖️ Fair Practices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg border border-orange-300 hover:bg-orange-50 hover:border-orange-400 transition-all duration-200 font-medium shadow-sm"
            >
              <FaArrowLeft className="w-4 h-4" />
              Return to Previous Page
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-3 bg-orange-100 text-orange-700 rounded-lg border border-orange-200 hover:bg-orange-200 transition-all duration-200 font-medium shadow-sm"
            >
              Back to Top
            </button>
          </div>
          <div className="text-sm text-gray-500 text-center sm:text-right">
            <p>© {new Date().getFullYear()} KooliApp. All rights reserved.</p>
            <p className="text-xs mt-1">Terms & Conditions v1.0 • Effective immediately</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;