import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  verifyPayment,
  workerJobVerifyPay,
  walletVerify,
} from "../../Services.js/WorkerApi";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("providertoken");
  const token2 = localStorage.getItem("token");

  const [status, setStatus] = useState("checking");
  const [balance, setBalance] = useState(null);

  const orderId = searchParams.get("order_id");

  useEffect(() => {
    if (orderId) {
      verifyOrder();
    }
  }, [orderId]);

  const verifyOrder = async () => {
    try {
      let apiUrl = walletVerify;
      let passtoken = token || token2;

      // Prefer wallet verify for all new orders; keep legacy prefixes
      if (orderId.startsWith("worker_order")) {
        passtoken = token2;
        apiUrl = workerJobVerifyPay;
      } else if (orderId.startsWith("order_")) {
        passtoken = token;
        apiUrl = verifyPayment;
      } else if (orderId.startsWith("wallet_worker")) {
        passtoken = token2;
        apiUrl = walletVerify;
      } else if (orderId.startsWith("wallet_provider") || orderId.startsWith("wallet_")) {
        passtoken = token || token2;
        apiUrl = walletVerify;
      }

      const res = await axios.post(
        apiUrl,
        { orderId },
        {
          headers: { Authorization: `Bearer ${passtoken}` },
        }
      );

      if (res?.data?.ok) {
        setStatus("success");
        setBalance(res?.data?.balance);
        toast.success(
          res?.data?.request
            ? "Payment successful — request sent"
            : "Wallet credited successfully"
        );
      } else {
        setStatus("failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("failed");
    }
  };

  const goBack = () => {
    if (orderId?.startsWith("worker_order") || orderId?.startsWith("wallet_worker")) {
      navigate("/home");
    } else if (localStorage.getItem("providertoken")) {
      navigate("/home2?unlock=1");
    } else {
      navigate("/home");
    }
  };

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
            <p className="mb-2">
              Your wallet was credited. Credits are used to send connection requests.
            </p>
            {balance !== null && balance !== undefined && (
              <p className="mb-6 text-sm text-gray-700">
                Wallet balance: <strong>₹{balance}</strong>
              </p>
            )}
            <button
              onClick={goBack}
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
            <p className="mb-6">Something went wrong. Please try again.</p>
            <button
              onClick={goBack}
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
