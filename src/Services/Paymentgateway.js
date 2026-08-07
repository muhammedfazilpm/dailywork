import { useEffect } from "react";
import { runPaymentCheckout } from "../config/appEnv";

export const PaymentGateway = ({ paymentData, orderId, prefill }) => {
  useEffect(() => {
    const initiatePayment = async () => {
      try {
        await runPaymentCheckout({
          paymentData: paymentData || { order_id: orderId },
          prefill,
          redirectTarget: "_self",
        });
      } catch (error) {
        console.error("Razorpay checkout error:", error);
      }
    };

    if (paymentData?.razorpay_order_id || paymentData?.dummy) {
      initiatePayment();
    }
  }, [paymentData, orderId, prefill]);

  return null;
};
