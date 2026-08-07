import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaWallet,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaCheckCircle,
  FaExchangeAlt,
  FaUsers,
} from "react-icons/fa";

function RefundPolicy() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "1. Platform Service Fee",
      color: "from-blue-500 to-blue-600",
      icon: <FaMoneyBillWave className="w-6 h-6" />,
      description:
        "KooliApp charges a ₹10 Platform Service Fee when a work request or job application is submitted through the platform.",
      note: "₹10 Platform Service Fee",
      items: [
        "The fee is collected for facilitating connections between workers and work providers.",
        "It supports platform operations, maintenance, security and future improvements.",
        "The fee is deducted from the KooliApp Wallet whenever applicable.",
      ],
    },

    {
      title: "2. Wallet System",
      color: "from-green-500 to-green-600",
      icon: <FaWallet className="w-6 h-6" />,
      description:
        "All eligible platform payments are handled through the KooliApp Wallet.",
      items: [
        "Users can recharge their Wallet using supported payment methods.",
        "Wallet balance is used to send work requests and job applications.",
        "Wallet transactions are recorded inside the platform.",
        "Wallet balance cannot be transferred to another user.",
      ],
    },

    {
      title: "3. Refund Policy",
      color: "from-red-500 to-red-600",
      icon: <FaExchangeAlt className="w-6 h-6" />,
      description:
        "Platform Service Fees are generally considered used once a work request or job application has been successfully delivered.",
      warning: true,
      items: [
        "Successful request delivery.",
        "Successful job application submission.",
        "Completed platform service.",
      ],
    },

    {
      title: "4. Eligible Refunds",
      color: "from-orange-500 to-orange-600",
      icon: <FaCheckCircle className="w-6 h-6" />,
      description:
        "Refunds may be approved in limited situations after verification.",
      items: [
        "Payment deducted but request was not created.",
        "Duplicate payment.",
        "Technical system failure.",
        "Verified payment processing issue.",
      ],
    },

    {
      title: "5. Wallet Credit",
      color: "from-purple-500 to-purple-600",
      icon: <FaWallet className="w-6 h-6" />,
      description:
        "Approved refunds are credited back to the KooliApp Wallet.",
      items: [
        "Wallet credits can be used for future requests.",
        "Wallet credits are normally processed within 3–7 working days.",
        "Wallet balance cannot be withdrawn as cash except where required by applicable law.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-black mb-8"
        >
          <FaArrowLeft />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-200">

          {/* Hero */}

          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-10">

            <div className="flex items-center gap-4">

              <FaWallet className="text-5xl" />

              <div>

                <h1 className="text-4xl font-bold">
                  Refund & Cancellation Policy
                </h1>

                <p className="mt-2 text-red-100">
                  Wallet Refund & Platform Service Fee Policy
                </p>

              </div>

            </div>

          </div>

          {/* Notice */}

          <div className="p-6 bg-red-50 border-b border-red-200">

            <div className="flex gap-4">

              <FaExclamationTriangle className="text-red-600 text-3xl mt-1" />

              <div>

                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Important Notice
                </h2>

                <p className="text-gray-700 leading-8">
                  KooliApp charges a ₹10 Platform Service Fee when users send
                  work requests or submit job applications. This fee is charged
                  for facilitating connections between workers and work
                  providers and is <strong>not</strong> a fee for unlocking
                  contact details.
                </p>

              </div>

            </div>

          </div>

          {/* Overview Cards */}

          <div className="grid md:grid-cols-2 gap-6 p-8 bg-gray-50">

            <div className="bg-white border border-green-200 rounded-xl p-6">

              <div className="flex items-center gap-3 mb-3">

                <FaUsers className="text-green-600 text-2xl" />

                <h3 className="font-bold text-lg">
                  Platform Service
                </h3>

              </div>

              <p className="text-gray-600">
                ₹10 is charged only for facilitating secure connections
                between workers and work providers.
              </p>

            </div>

            <div className="bg-white border border-orange-200 rounded-xl p-6">

              <div className="flex items-center gap-3 mb-3">

                <FaWallet className="text-orange-600 text-2xl" />

                <h3 className="font-bold text-lg">
                  Wallet Refunds
                </h3>

              </div>

              <p className="text-gray-600">
                Eligible refunds are credited directly back to your
                KooliApp Wallet after verification.
              </p>

            </div>

          </div>

          {/* Policy Sections */}

          <div className="divide-y divide-red-100">

            {sections.map((section, index) => (

              <div
                key={index}
                className="p-8 hover:bg-red-50 transition"
              >

                <div className="flex gap-5">

                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${section.color} text-white flex items-center justify-center flex-shrink-0`}
                  >
                    {section.icon}
                  </div>

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {section.title}
                    </h2>

                    {section.note && (
                      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-blue-700 font-medium">
                          {section.note}
                        </p>
                      </div>
                    )}

                    <p className="text-gray-600 leading-8 mb-5">
                      {section.description}
                    </p>

                    <ul className="space-y-3">

                      {section.items.map((item, i) => (

                        <li
                          key={i}
                          className="flex gap-3"
                        >

                          <FaCheckCircle className="text-green-500 mt-1" />

                          <span className="text-gray-700">
                            {item}
                          </span>

                        </li>

                      ))}

                    </ul>
                    {section.warning && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 font-medium">
                          Platform service fees are normally considered used once
                          the request or application has been successfully delivered.
                        </p>
                      </div>
                    )}

                  </div>

                </div>

              </div>

            ))}

            {/* Remaining Sections */}

            {[
              {
                title: "6. Request Cancellation",
                color: "from-yellow-500 to-orange-500",
                icon: <FaExclamationTriangle className="w-6 h-6" />,
                description:
                  "Once a work request or job application has been successfully submitted, it cannot be cancelled because the platform service has already been delivered.",
                items: [
                  "Requests cannot be cancelled after successful submission.",
                  "Job applications cannot be cancelled after delivery.",
                  "Users should review all information before submitting.",
                ],
              },

              {
                title: "7. Refund Request Process",
                color: "from-indigo-500 to-blue-600",
                icon: <FaExchangeAlt className="w-6 h-6" />,
                description:
                  "If you believe you qualify for a refund, please contact our support team with your payment details.",
                items: [
                  "Contact us within 48 hours of the transaction.",
                  "Include your transaction ID.",
                  "Provide payment screenshots if available.",
                  "Explain the issue clearly.",
                  "Our team will review your request.",
                ],
              },

              {
                title: "8. Refund Timeline",
                color: "from-cyan-500 to-blue-500",
                icon: <FaWallet className="w-6 h-6" />,
                description:
                  "Approved refunds are credited back to your KooliApp Wallet.",
                items: [
                  "Review normally completed within 3 business days.",
                  "Wallet credit usually appears within 3–7 working days.",
                  "Processing time may vary depending on payment verification.",
                ],
              },

              {
                title: "9. Contact Support",
                color: "from-green-500 to-emerald-600",
                icon: <FaUsers className="w-6 h-6" />,
                description:
                  "For refund or payment related questions, please contact our support team.",
                contact: true,
              },
            ].map((section, index) => (
              <div
                key={`extra-${index}`}
                className="p-8 hover:bg-red-50 transition"
              >
                <div className="flex gap-5">

                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${section.color} text-white flex items-center justify-center flex-shrink-0`}
                  >
                    {section.icon}
                  </div>

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {section.title}
                    </h2>

                    <p className="text-gray-600 leading-8 mb-5">
                      {section.description}
                    </p>

                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3"
                          >
                            <FaCheckCircle className="text-green-500 mt-1" />
                            <span className="text-gray-700">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contact && (
                      <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">

                        <h3 className="font-bold text-lg text-gray-800 mb-3">
                          Contact Information
                        </h3>

                        <div className="space-y-2 text-gray-700">

                          <p>
                            <strong>Email:</strong>{" "}
                            <a
                              href="mailto:info.kooliapp@gmail.com"
                              className="text-blue-600 hover:underline"
                            >
                              info.kooliapp@gmail.com
                            </a>
                          </p>

                          <p>
                            <strong>Phone:</strong> +91 95267 88138
                          </p>

                          <p className="text-sm text-gray-500 mt-3">
                            Please include your transaction ID, payment
                            screenshot and a brief description of the issue.
                          </p>

                        </div>

                      </div>
                    )}

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Summary */}

          <div className="bg-gray-900 text-white p-10">

            <h2 className="text-2xl font-bold text-center mb-8">
              Refund Policy Summary
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white/10 rounded-xl p-6 text-center">

                <div className="text-4xl mb-3">💼</div>

                <h3 className="font-bold mb-3">
                  Platform Service Fee
                </h3>

                <p className="text-gray-300 text-sm">
                  ₹10 is charged for facilitating connections between workers
                  and work providers.
                </p>

              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">

                <div className="text-4xl mb-3">💳</div>

                <h3 className="font-bold mb-3">
                  Wallet Refund
                </h3>

                <p className="text-gray-300 text-sm">
                  Eligible refunds are credited to your KooliApp Wallet after
                  successful verification.
                </p>

              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">

                <div className="text-4xl mb-3">⏳</div>

                <h3 className="font-bold mb-3">
                  Processing Time
                </h3>

                <p className="text-gray-300 text-sm">
                  Review within 3 business days and Wallet credit within
                  3–7 working days.
                </p>

              </div>

            </div>

            <p className="text-center text-gray-300 mt-8 leading-7 max-w-3xl mx-auto">
              KooliApp is committed to providing a fair and transparent refund
              process. Eligible refunds are credited to your Wallet after
              verification. The ₹10 Platform Service Fee is charged for
              facilitating connections through the platform and is not a fee for
              unlocking contact details.
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-white border rounded-lg hover:bg-gray-100 transition"
          >
            ← Back
          </button>

          <div className="text-center md:text-right text-sm text-gray-500">

            <p>
              © {new Date().getFullYear()} KooliApp. All Rights Reserved.
            </p>

            <p className="mt-1">
              Refund & Cancellation Policy • Version 2.0
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default RefundPolicy;