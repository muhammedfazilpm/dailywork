import React, { useEffect, useRef, useState } from "react";
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
  const [errorMsg, setErrorMsg] = useState("");
  const triedRef = useRef(0);

  const orderId = searchParams.get("order_id");
  const razorpay_order_id = searchParams.get("razorpay_order_id");
  const razorpay_payment_id = searchParams.get("razorpay_payment_id");
  const razorpay_signature = searchParams.get("razorpay_signature");

  useEffect(() => {
    if (!orderId) {
      setStatus("failed");
      setErrorMsg("Order ID missing");
      return;
    }
    verifyOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId, razorpay_payment_id, razorpay_signature]);

  const verifyOrder = async () => {
    try {
      let apiUrl = walletVerify;
      let passtoken = token || token2;

      if (!passtoken) {
        setStatus("failed");
        setErrorMsg("Please log in again and retry payment.");
        return;
      }

      if (orderId.startsWith("worker_order")) {
        passtoken = token2;
        apiUrl = workerJobVerifyPay;
      } else if (orderId.startsWith("order_")) {
        passtoken = token;
        apiUrl = verifyPayment;
      } else if (orderId.startsWith("wallet_worker")) {
        passtoken = token2;
        apiUrl = walletVerify;
      } else if (
        orderId.startsWith("wallet_provider") ||
        orderId.startsWith("wallet_")
      ) {
        passtoken = token || token2;
        apiUrl = walletVerify;
      }

      const payload = { orderId };
      if (razorpay_order_id) payload.razorpay_order_id = razorpay_order_id;
      if (razorpay_payment_id) payload.razorpay_payment_id = razorpay_payment_id;
      if (razorpay_signature) payload.razorpay_signature = razorpay_signature;

      const res = await axios.post(apiUrl, payload, {
        headers: { Authorization: `Bearer ${passtoken}` },
      });

      if (res?.data?.ok) {
        setStatus("success");
        setBalance(res?.data?.balance);
        toast.success(
          res?.data?.request
            ? "Payment successful — request sent"
            : "Wallet credited successfully"
        );
        return;
      }

      setStatus("failed");
      setErrorMsg(res?.data?.msg || "Payment verification failed");
    } catch (error) {
      console.error(error);
      const msg =
        error?.response?.data?.msg ||
        error?.response?.data?.message ||
        "Payment verification failed";

      // Retry once when Razorpay params exist (capture can lag a moment)
      if (
        triedRef.current < 1 &&
        (razorpay_payment_id || razorpay_order_id)
      ) {
        triedRef.current += 1;
        setTimeout(() => verifyOrder(), 2000);
        return;
      }

      setStatus("failed");
      setErrorMsg(msg);
    }
  };

  const goBack = () => {
    if (
      orderId?.startsWith("worker_order") ||
      orderId?.startsWith("wallet_worker")
    ) {
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
              Your wallet was credited. Credits are used to send connection
              requests.
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
            <p className="mb-2 text-gray-700">
              {errorMsg || "Something went wrong. Please try again."}
            </p>
            <p className="mb-6 text-sm text-gray-500">
              If you already paid in Razorpay, go back and send the request again
              — or contact support with order id: {orderId}
            </p>
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
