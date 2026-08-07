import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaUserCheck,
  FaLock,
  FaDatabase,
  FaWallet,
  FaWhatsapp,
  FaUsers,
  FaExclamationCircle,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

function PrivacyPolicy() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "1. Information We Collect",
      icon: <FaDatabase className="text-white text-xl" />,
      color: "from-blue-500 to-blue-600",
      description:
        "We collect only the information required to provide and improve KooliApp services.",
      items: [
        "Full name",
        "Mobile number for account verification",
        "Profile photo (optional)",
        "Location information",
        "Worker skills and work categories",
        "Job information posted by work providers",
        "Wallet and payment transaction records",
      ],
    },

    {
      title: "2. How We Use Your Information",
      icon: <FaUserCheck className="text-white text-xl" />,
      color: "from-green-500 to-green-600",
      description:
        "Your information is used only to operate the KooliApp platform and improve user experience.",
      items: [
        "Create and manage your account.",
        "Connect workers with work providers.",
        "Process work requests and job applications.",
        "Verify users and prevent fraud.",
        "Provide customer support.",
        "Improve platform performance and security.",
      ],
    },

    {
      title: "3. Platform Service Fee",
      icon: <FaWallet className="text-white text-xl" />,
      color: "from-purple-500 to-purple-600",
      description:
        "KooliApp charges a ₹10 platform service fee when users send a work request or job application.",
      items: [
        "It is a service fee for facilitating connections between workers and work providers.",
        "The fee supports platform operations, maintenance and future improvements.",
        "Payments are processed through secure payment partners.",
      ],
    },

    {
      title: "4. Contact Information",
      icon: <FaUsers className="text-white text-xl" />,
      color: "from-orange-500 to-red-500",
      description:
        "We protect your personal contact information.",
      items: [
        "Phone numbers are not publicly displayed.",
        "Contact information is shared only as part of the platform's connection process.",
        "Users must not misuse another person's information.",
        "We never sell your personal contact details.",
      ],
    },

    {
      title: "5. WhatsApp Notifications",
      icon: <FaWhatsapp className="text-white text-xl" />,
      color: "from-green-600 to-emerald-600",
      description:
        "KooliApp may send WhatsApp notifications related to your account and platform activities.",
      items: [
        "OTP verification",
        "Work request notifications",
        "Job application updates",
        "Wallet notifications",
        "Important account alerts",
        "Platform announcements",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-black mb-8"
        >
          <FaArrowLeft />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">

          {/* Header */}

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10">

            <div className="flex items-center gap-4">

              <FaShieldAlt className="text-5xl" />

              <div>

                <h1 className="text-4xl font-bold">
                  Privacy Policy
                </h1>

                <p className="mt-2 text-blue-100">
                  Your privacy and personal information are important to us.
                </p>

              </div>

            </div>

          </div>

          {/* Intro */}

          <div className="p-8 border-b">

            <div className="flex gap-4">

              <FaExclamationCircle className="text-blue-600 text-2xl mt-1" />

              <div>

                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Our Commitment
                </h2>

                <p className="text-gray-600 leading-8">
                  KooliApp respects your privacy and is committed to protecting
                  your personal information. This Privacy Policy explains what
                  information we collect, how we use it, and how we keep it
                  secure while helping workers and work providers connect
                  through our platform.
                </p>

              </div>

            </div>

          </div>

          {/* Sections */}

          <div className="divide-y">

            {sections.map((section, index) => (

              <div
                key={index}
                className="p-8 hover:bg-blue-50 transition"
              >

                <div className="flex gap-5">

                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center flex-shrink-0`}
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

                  </div>

                </div>

              </div>

            ))}
                        {/* Remaining Sections */}

            {[
              {
                title: "6. Data Security",
                icon: <FaLock className="text-white text-xl" />,
                color: "from-indigo-500 to-purple-600",
                description:
                  "We use appropriate technical and organizational security measures to protect your information.",
                items: [
                  "Encrypted communication wherever applicable.",
                  "Secure authentication and account verification.",
                  "Restricted access to user information.",
                  "Regular monitoring to help prevent unauthorized access.",
                  "Secure payment processing through trusted payment partners.",
                ],
              },

              {
                title: "7. Data Sharing",
                icon: <FaUsers className="text-white text-xl" />,
                color: "from-orange-500 to-red-500",
                description:
                  "We respect your privacy and do not sell your personal information.",
                items: [
                  "We do not sell or rent your personal information.",
                  "Information may be shared only when necessary to provide platform services.",
                  "Payment information is processed by trusted payment partners.",
                  "We may share information when required by law or legal authorities.",
                ],
              },

              {
                title: "8. Your Rights",
                icon: <FaUserCheck className="text-white text-xl" />,
                color: "from-green-500 to-emerald-500",
                description:
                  "You have control over your personal information.",
                items: [
                  "Access your profile information.",
                  "Update or correct your information.",
                  "Request deletion of your account.",
                  "Contact us regarding privacy concerns.",
                ],
              },

              {
                title: "9. Cookies & Analytics",
                icon: <FaDatabase className="text-white text-xl" />,
                color: "from-cyan-500 to-blue-500",
                description:
                  "KooliApp may use cookies and analytics technologies to improve platform performance.",
                items: [
                  "Remember login sessions.",
                  "Improve application performance.",
                  "Analyze usage trends.",
                  "Enhance user experience.",
                ],
              },

              {
                title: "10. Policy Updates",
                icon: <FaShieldAlt className="text-white text-xl" />,
                color: "from-purple-500 to-pink-500",
                description:
                  "We may update this Privacy Policy from time to time.",
                items: [
                  "Changes become effective once published.",
                  "Major updates may be notified through the app or WhatsApp.",
                  "Continued use of KooliApp means you accept the updated policy.",
                ],
              },

              {
                title: "11. Contact Us",
                icon: <FaEnvelope className="text-white text-xl" />,
                color: "from-red-500 to-pink-500",
                description:
                  "For any privacy-related questions or concerns, please contact us.",
                contact: true,
              },
            ].map((section, index) => (
              <div
                key={`extra-${index}`}
                className="p-8 hover:bg-blue-50 transition"
              >
                <div className="flex gap-5">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center flex-shrink-0`}
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
                      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Contact Information
                        </h3>

                        <p className="text-gray-600 mb-2">
                          Email us for any privacy or data-related questions.
                        </p>

                        <a
                          href="mailto:info.kooliapp@gmail.com"
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          info.kooliapp@gmail.com
                        </a>
<p>9526788138</p>
                        <p className="text-sm text-gray-500 mt-2">
                          We typically respond within 24–48 hours.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Footer */}

          <div className="bg-gray-900 text-white p-10">

            <div className="text-center">

              <FaShieldAlt className="text-5xl text-blue-400 mx-auto mb-4" />

              <h2 className="text-2xl font-bold mb-4">
                Your Privacy Matters
              </h2>

              <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
                KooliApp is committed to protecting your privacy and personal
                information. We collect only the information necessary to
                provide our services and continuously improve the platform while
                maintaining appropriate security standards.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">

                <span className="bg-white/10 px-4 py-2 rounded-full">
                  🔒 Secure Platform
                </span>

                <span className="bg-white/10 px-4 py-2 rounded-full">
                  📱 Trusted Connections
                </span>

                <span className="bg-white/10 px-4 py-2 rounded-full">
                  🛡 Privacy Protected
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

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
              Privacy Policy • Version 2.0
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;