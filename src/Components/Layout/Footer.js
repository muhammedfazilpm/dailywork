import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[black] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Kooliapp</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Connecting skilled professionals with local job opportunities
              in plumbing, electrical work, and more.
            </p>

<p className="text-sm leading-relaxed mt-2 max-w-sm">
  പ്ലംബിംഗ്, ഇലക്ട്രിക്കൽ വർക്ക്, മറ്റ് അനുബന്ധ മേഖലകൾ എന്നിവയിലെ പ്രാദേശിക തൊഴിലവസരങ്ങളുമായി വൈദഗ്ധ്യമുള്ളവരെ ബന്ധിപ്പിക്കുന്നു.
</p>
            {/* Social Icons */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61577365524534&sk=directory_contact_info" className="hover:text-white transition">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/kooli_app?igsh=MWVmdnlsZzJpNnJvYg%3D%3D&utm_source=qr" className="hover:text-white transition">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/kooliapp-india-2666b53ab/" className="hover:text-white transition">
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.youtube.com/@techupdate8726" className="hover:text-white transition">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Contact Us
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Kuruvattur, Calicut</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone />
                <span>+91 85902 26483</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>info.kooliapp@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Kooliapp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
