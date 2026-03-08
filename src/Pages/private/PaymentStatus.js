import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { verifyPayment, workerJobVerifyPay } from "../../Services.js/WorkerApi";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const providerToken = localStorage.getItem("providertoken");
  const workerToken = localStorage.getItem("token");

  const [status, setStatus] = useState("checking");

  const orderId = searchParams.get("order_id");

  useEffect(() => {
    if (orderId) {
      verifyOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  const verifyOrder = async () => {
    try {
      let url = null;
      let token = null;

      if (providerToken) {
        url = verifyPayment;
        token = providerToken;
      } else if (workerToken) {
        url = workerJobVerifyPay;
        token = workerToken;
      } else {
        setStatus("failed");
        return;
      }

      const res = await axios.post(
        url,
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

  const goBackPath = providerToken ? "/home2" : "/home";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 text-center w-[90%] max-w-md">
        {status === "checking" && (
          <>
            <h2 className="text-xl font-bold mb-4">Checking Payment...</h2>
            <p>Please wait while we verify your payment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Payment Successful ✅
            </h2>
            <p className="mb-6">
              Your payment was successful. You can now view contact numbers.
            </p>
            <button
              onClick={() => navigate(goBackPath)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              Go Back
            </button>
          </>
        )}

        {status === "failed" && (
          <>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Payment Failed ❌
            </h2>
            <p className="mb-6">
              Something went wrong. Please try again.
            </p>
            <button
              onClick={() => navigate(goBackPath)}
              className="bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
