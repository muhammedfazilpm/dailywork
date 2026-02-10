import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMoneyBillWave, FaBan, FaExchangeAlt, FaClock, FaEnvelope, FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

function RefundPolicy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-8 px-4 sm:px-6 lg:px-8">
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
              <div className="p-3 bg-red-100 rounded-xl">
                <FaMoneyBillWave className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Refund & Cancellation Policy
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Our policies regarding payments and refunds
                </p>
              </div>
            </div>
            <div className="hidden md:block text-xs px-3 py-1.5 bg-red-50 text-red-700 rounded-full font-medium">
              💰 Payment Terms
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-red-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <FaExclamationTriangle className="w-5 h-5 text-red-600" />
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

        {/* Important Notice Banner */}
        <div className="mb-8 p-5 bg-gradient-to-r from-red-100 to-pink-100 border-l-4 border-red-500 rounded-lg shadow-sm">
          <div className="flex items-start gap-4">
            <FaExclamationTriangle className="w-7 h-7 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-bold text-red-900 text-lg">Important Notice</p>
              <p className="text-red-800 mt-2">
                This policy outlines our refund and cancellation procedures. Due to the instant nature 
                of our digital service, refunds are generally <strong className="font-bold">not applicable</strong> once contact 
                details have been accessed. Please read this policy thoroughly before making any payment.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <FaCheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Service Provided</h3>
                <p className="text-sm text-gray-600">What you get for your payment</p>
              </div>
            </div>
            <p className="text-gray-700">
              ₹10 provides instant access to worker contact details for communication purposes. 
              Workers can list their services <span className="font-semibold text-green-600">free of charge</span> on our platform.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <FaTimesCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">General Rule</h3>
                <p className="text-sm text-gray-600">Standard refund policy</p>
              </div>
            </div>
            <p className="text-gray-700">
              Payments are <span className="font-bold text-red-600">non-refundable</span> once contact details have been displayed. 
              This is due to the instant digital delivery of our service.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-red-200">
          {/* Introduction */}
          <div className="p-8 border-b border-red-100 bg-gradient-to-r from-red-50 to-pink-50">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <FaMoneyBillWave className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Understanding Our Policy
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This Refund and Cancellation Policy outlines the terms under which refunds and 
                  cancellations are handled on KooliApp. Our policy is designed to be fair while 
                  recognizing the instant nature of our digital service.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="divide-y divide-red-100">
            {[
              {
                title: "1. Service Overview",
                color: "from-blue-500 to-blue-600",
                icon: "📱",
                description: "KooliApp provides a digital service where users can access verified worker contact details after making a one-time payment of ₹10. Workers can add and manage their work listings on the platform completely free of charge.",
                note: "₹10 = Instant access to contact details"
              },
              {
                title: "2. Cancellation Policy",
                color: "from-amber-500 to-amber-600",
                description: "Once a user initiates and successfully completes the payment, the service is considered delivered immediately upon display of contact details. Therefore, order cancellations after service delivery are not applicable.",
                iconComponent: <FaBan className="w-6 h-6" />,
                highlight: "No cancellations after service delivery"
              },
              {
                title: "3. Standard Refund Policy",
                color: "from-red-500 to-red-600",
                description: "Payments made on KooliApp are non-refundable once the worker contact details have been displayed to the user. This policy is in place because:",
                items: [
                  "The service is instantly accessible after payment",
                  "Contact details are immediately viewable",
                  "Digital services cannot be 'returned'",
                  "Prevents potential misuse of the system"
                ],
                warning: true
              },
              {
                title: "4. Exceptions for Refunds",
                color: "from-green-500 to-green-600",
                description: "In exceptional circumstances, refunds may be considered under these specific conditions:",
                items: [
                  "Failed transactions where amount is deducted but contact details are not displayed",
                  "Duplicate payments due to technical errors",
                  "Unauthorized/fraudulent transactions on your account"
                ],
                note: "All exceptions are reviewed case-by-case",
                iconComponent: <FaExchangeAlt className="w-6 h-6" />
              },
              {
                title: "5. Refund Process & Timeline",
                color: "from-purple-500 to-purple-600",
                description: "If your case qualifies for a refund under the exceptions listed above:",
                items: [
                  "Contact our support team within 48 hours of the transaction",
                  "Provide transaction ID, payment screenshot, and details",
                  "Our team will review your case within 3 business days",
                  "Approved refunds are processed to the original payment method",
                  "Processing time: 5-7 working days after approval"
                ],
                iconComponent: <FaClock className="w-6 h-6" />
              },
              {
                title: "6. Contact & Support",
                color: "from-indigo-500 to-indigo-600",
                description: "For refund inquiries or assistance with payment issues:",
                contact: true,
                items: [
                  "Email: info.kooliapp@gmail.com",
                  "Include transaction ID in your email",
                  "Provide payment screenshot if possible",
                  "Response time: 24-48 business hours"
                ],
                iconComponent: <FaEnvelope className="w-6 h-6" />
              }
            ].map((section, index) => (
              <div key={index} className="p-8 hover:bg-red-50/50 transition-colors duration-200">
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
                    
                    {section.note && (
                      <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-blue-800 font-medium">{section.note}</p>
                      </div>
                    )}
                    
                    {section.highlight && (
                      <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-amber-800 font-medium">{section.highlight}</p>
                      </div>
                    )}
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {section.description}
                    </p>
                    
                    {section.items && (
                      <ul className="space-y-3 mt-4">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              section.color.includes('red') ? 'bg-red-500' :
                              section.color.includes('green') ? 'bg-green-500' :
                              section.color.includes('purple') ? 'bg-purple-500' :
                              'bg-blue-500'
                            }`}></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.contact && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200">
                        <div className="flex items-center gap-3">
                          <FaEnvelope className="w-5 h-5 text-indigo-600" />
                          <div>
                            <p className="font-medium text-gray-900">Contact Support for Refund Inquiries</p>
                            <a 
                              href="mailto:info.kooliapp@gmail.com" 
                              className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 font-medium text-lg"
                            >
                              info.kooliapp@gmail.com
                            </a>
                            <p className="text-sm text-gray-600 mt-1">
                              Please include transaction ID and payment details
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Policy Summary</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl mb-2">❌</div>
                  <h4 className="font-bold mb-2">Not Eligible</h4>
                  <p className="text-gray-300 text-sm">
                    Contact already viewed<br/>
                    Change of mind<br/>
                    Didn't like worker response
                  </p>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl mb-2">✅</div>
                  <h4 className="font-bold mb-2">May Be Eligible</h4>
                  <p className="text-gray-300 text-sm">
                    Failed transactions<br/>
                    Duplicate payments<br/>
                    Technical errors
                  </p>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl mb-2">⏱️</div>
                  <h4 className="font-bold mb-2">Processing Time</h4>
                  <p className="text-gray-300 text-sm">
                    Review: 3 business days<br/>
                    Refund: 5-7 business days<br/>
                    Contact within 48 hours
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 max-w-2xl mx-auto">
                We strive to be fair and transparent in all our policies. If you believe you have 
                a valid case for a refund, please contact us with complete details for review.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg border border-red-300 hover:bg-red-50 hover:border-red-400 transition-all duration-200 font-medium shadow-sm"
            >
              <FaArrowLeft className="w-4 h-4" />
              Return to Previous Page
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-6 py-3 bg-red-100 text-red-700 rounded-lg border border-red-200 hover:bg-red-200 transition-all duration-200 font-medium shadow-sm"
            >
              Back to Top
            </button>
          </div>
          <div className="text-sm text-gray-500 text-center sm:text-right">
            <p>© {new Date().getFullYear()} KooliApp. All rights reserved.</p>
            <p className="text-xs mt-1">Refund Policy v1.0 • Effective immediately</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicy;