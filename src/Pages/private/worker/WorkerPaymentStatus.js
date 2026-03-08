import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { workerJobVerifyPay } from "../../../Services.js/WorkerApi";

const WorkerPaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [status, setStatus] = useState("checking");

  const orderId = searchParams.get("order_id");

  useEffect(() => {
    if (orderId && token) {
      verifyOrder();
    } else if (!token) {
      setStatus("failed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId, token]);

  const verifyOrder = async () => {
    try {
      const res = await axios.post(
        workerJobVerifyPay,
        { orderId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res?.data?.ok) {
        setStatus("success");
        toast.success("Payment Successful 🎉");
      } else {
        setStatus("failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 text-center w-[90%] max-w-md">
        {status === "checking" && (
          <>
            <h2 className="text-xl font-bold mb-4">Verifying Payment...</h2>
            <p className="text-gray-600">
              Please wait while we verify your payment to unlock job contacts.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Payment Successful ✅
            </h2>
            <p className="mb-6 text-gray-600">
              Your payment was successful. You can now view provider contact
              numbers for all jobs in your location.
            </p>
            <button
              onClick={() => navigate("/home")}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              View Jobs & Contacts
            </button>
          </>
        )}

        {status === "failed" && (
          <>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Payment Failed ❌
            </h2>
            <p className="mb-6 text-gray-600">
              Something went wrong. Please try again from the jobs page.
            </p>
            <button
              onClick={() => navigate("/home")}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Back to Jobs
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkerPaymentStatus;
