import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTimes, FaWhatsapp, FaLock } from "react-icons/fa";
import { verifyOtpApi, forgotPasswordApi } from "../Services.js/WorkerApi";

const ForgotPasswordModal = ({ open, onClose, role }) => {
  const [step, setStep] = useState(1);
  const [whatsapp, setWhatsapp] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const formatPhone = (value) => {
    let phone = value.toString().trim();
    if (phone.startsWith("+")) phone = phone.slice(1);
    if (!phone.startsWith("91")) phone = "91" + phone;
    return phone;
  };

  const sendOtp = async () => {
    const phone = formatPhone(whatsapp);

    if (!/^\d{12}$/.test(phone)) {
      toast.error("WhatsApp number must be 10 digits");
      return;
    }

    setLoading(true);
    try {
      await axios.post(forgotPasswordApi, {
        contactNo: phone,
        role: role,
      });

      toast.success("OTP sent to WhatsApp");
      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 4) {
      toast.error("Enter valid 4 digit OTP");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      await axios.post(verifyOtpApi, {
        contactNo: formatPhone(whatsapp),
        otp,
        newPassword,
        role: role,
      });

      toast.success("Password reset successful");
      onClose();

      // reset state
      setStep(1);
      setWhatsapp("");
      setOtp("");
      setNewPassword("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <FaTimes size={18} />
        </button>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold text-center mb-4">
              Forgot Password
            </h2>

            <div className="relative mb-4">
              <FaWhatsapp className="absolute left-3 top-3 text-green-500" />
              <input
                type="text"
                placeholder="WhatsApp Number"
                className="w-full pl-10 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-red-700 transition"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2 className="text-xl font-bold text-center mb-4">
              Verify OTP & Reset Password
            </h2>

            <input
              type="text"
              maxLength={4}
              placeholder="Enter OTP"
              className="w-full text-center text-xl tracking-widest py-3 border rounded-lg focus:ring-2 focus:ring-red-500 mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <div className="relative mb-4">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="New Password"
                className="w-full pl-10 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full py-3 bg-black text-white rounded-lg hover:bg-red-700 transition"
            >
              {loading ? "Verifying..." : "Verify & Reset"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
