import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaFileContract,
  FaHandshake,
  FaUserShield,
  FaMoneyBillWave,
  FaWallet,
  FaUsers,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

function TermsAndConditions() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "1. About KooliApp",
      icon: <FaHandshake className="text-white text-xl" />,
      color: "from-orange-500 to-red-500",
      description:
        "KooliApp is a digital platform that connects workers with work providers. Workers can create professional profiles, while work providers can search for workers or post jobs. KooliApp acts only as a marketplace that helps both parties connect easily and securely.",
    },

    {
      title: "2. User Eligibility",
      icon: <FaUserShield className="text-white text-xl" />,
      color: "from-blue-500 to-indigo-500",
      description:
        "You must be at least 18 years old to use KooliApp. By registering, you confirm that the information you provide is true, accurate, and belongs to you.",
    },

    {
      title: "3. Platform Service Fee",
      icon: <FaMoneyBillWave className="text-white text-xl" />,
      color: "from-green-500 to-emerald-500",
      description:
        "KooliApp charges a platform service fee of ₹10 when a user sends a work request or job application.",
      items: [
        "It is a platform service fee for connecting workers and work providers.",
        "The fee helps operate, maintain and improve KooliApp.",
        "Contact details are shared only after the receiving party accepts the request.",
      ],
    },

    {
      title: "4. Wallet System",
      icon: <FaWallet className="text-white text-xl" />,
      color: "from-purple-500 to-pink-500",
      description:
        "Users can recharge their KooliApp Wallet using supported payment methods.",
      items: [
        "Wallet balance is used to send work requests.",
        "Wallet balance is used to apply for jobs.",
        "Wallet credits are non-transferable.",
        "Wallet balance cannot be withdrawn as cash except where required by law.",
      ],
    },

    {
      title: "5. Request Process",
      icon: <FaUsers className="text-white text-xl" />,
      color: "from-cyan-500 to-blue-500",
      description:
        "KooliApp follows a request-based connection process.",
      items: [
        "Provider sends a work request to a worker.",
        "Worker can Accept or Reject the request.",
        "Worker can apply for posted jobs.",
        "Providers can Accept or Reject applications.",
        "Contact details are shared only after acceptance.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 text-gray-600 hover:text-black"
        >
          <FaArrowLeft />
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden">

          {/* Hero */}

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-10">

            <div className="flex items-center gap-4">

              <FaFileContract className="text-5xl" />

              <div>

                <h1 className="text-4xl font-bold">
                  Terms & Conditions
                </h1>

                <p className="mt-2 opacity-90">
                  Please read these Terms & Conditions carefully before
                  using KooliApp.
                </p>

              </div>

            </div>

          </div>

          {/* Intro */}

          <div className="p-8 border-b">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to KooliApp
            </h2>

            <p className="text-gray-600 leading-8">
              KooliApp is a technology platform that connects workers
              and work providers. Our goal is to make finding workers
              and jobs faster, safer and easier. By using KooliApp you
              agree to comply with these Terms & Conditions.
            </p>

          </div>

          {/* Sections */}

          <div className="divide-y">

            {sections.map((section, index) => (

              <div
                key={index}
                className="p-8 hover:bg-orange-50 transition"
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
                            className="flex items-start gap-3"
                          >

                            <FaCheckCircle className="text-green-500 mt-1" />

                            <span className="text-gray-700">
                              {item}
                            </span>

                          </li>

                        ))}

                      </ul>

                    )}

                  </div>

                </div>

              </div>

            ))}

                        {/* Remaining Sections */}

            {[
              {
                title: "6. Refund Policy",
                icon: <FaWallet className="text-white text-xl" />,
                color: "from-orange-500 to-yellow-500",
                description:
                  "KooliApp follows a transparent wallet and refund policy.",
                items: [
                  "If a request is rejected, the platform service fee may be credited back to your KooliApp Wallet according to the platform's refund policy.",
                  "If a request is accepted, the service fee is considered consumed.",
                  "Wallet recharge payments are generally non-refundable unless required by applicable law.",
                ],
              },

              {
                title: "7. User Responsibilities",
                icon: <FaUsers className="text-white text-xl" />,
                color: "from-indigo-500 to-purple-500",
                description:
                  "All users are expected to use KooliApp responsibly.",
                items: [
                  "Provide accurate profile information.",
                  "Use KooliApp only for genuine work opportunities.",
                  "Respect other users.",
                  "Do not misuse personal information.",
                  "Do not send spam or fake requests.",
                  "Comply with all applicable laws.",
                ],
              },

              {
                title: "8. Worker Responsibilities",
                icon: <FaHandshake className="text-white text-xl" />,
                color: "from-teal-500 to-green-500",
                description:
                  "Workers are responsible for maintaining accurate profiles.",
                items: [
                  "Keep work details updated.",
                  "Provide accurate wage information.",
                  "Respond honestly to requests.",
                  "Maintain professional communication.",
                  "Complete work as agreed with the work provider.",
                ],
              },

              {
                title: "9. Work Provider Responsibilities",
                icon: <FaBriefcase className="text-white text-xl" />,
                color: "from-pink-500 to-red-500",
                description:
                  "Work providers should create genuine work opportunities.",
                items: [
                  "Post only genuine jobs.",
                  "Provide correct job descriptions.",
                  "Treat workers respectfully.",
                  "Do not misuse worker information.",
                  "Follow applicable labour laws.",
                ],
              },

              {
                title: "10. Privacy",
                icon: <FaUserShield className="text-white text-xl" />,
                color: "from-sky-500 to-cyan-500",
                description:
                  "KooliApp values your privacy.",
                items: [
                  "Personal information is handled according to our Privacy Policy.",
                  "Contact information is shared only as part of the connection process.",
                  "Users must not misuse information obtained through KooliApp.",
                ],
              },

              {
                title: "11. Limitation of Liability",
                icon: <FaFileContract className="text-white text-xl" />,
                color: "from-gray-600 to-gray-800",
                description:
                  "KooliApp acts only as a technology platform connecting workers and work providers.",
                items: [
                  "We do not guarantee job availability.",
                  "We do not guarantee worker availability.",
                  "We are not responsible for agreements made outside KooliApp.",
                  "We are not responsible for disputes between users.",
                  "Users should verify each other before starting work.",
                ],
              },

              {
                title: "12. Account Suspension",
                icon: <FaUserShield className="text-white text-xl" />,
                color: "from-red-500 to-red-700",
                description:
                  "KooliApp may suspend or permanently terminate accounts that:",
                items: [
                  "Provide false information.",
                  "Engage in fraud.",
                  "Violate these Terms & Conditions.",
                  "Misuse the platform.",
                  "Harass or abuse other users.",
                ],
              },

              {
                title: "13. Contact Us",
                icon: <FaFileContract className="text-white text-xl" />,
                color: "from-orange-600 to-red-600",
                description:
                  "For questions regarding these Terms & Conditions, please contact us.",
                items: [
                  "Email: info.kooliapp@gmail.com",
                  "Website: https://kooliapp.in",
                ],
              },
            ].map((section, index) => (
              <div
                key={`extra-${index}`}
                className="p-8 hover:bg-orange-50 transition"
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
                          className="flex items-start gap-3"
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

          </div>

          {/* Acceptance */}

          <div className="bg-gray-900 text-white p-10">

            <h2 className="text-2xl font-bold mb-4">
              Acceptance of Terms
            </h2>

            <p className="text-gray-300 leading-8">
              By creating an account or continuing to use KooliApp,
              you acknowledge that you have read, understood and
              agreed to these Terms & Conditions. You also agree
              that the ₹10 platform service fee is charged solely
              for facilitating connections between workers and work
              providers through the KooliApp platform and is not a
              fee for unlocking contact information.
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 text-center text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} KooliApp. All Rights Reserved.
          </p>

          <p className="mt-2">
            Connecting Workers • Connecting Jobs • Building Opportunities
          </p>

        </div>

      </div>
    </div>
  );
}

export default TermsAndConditions;