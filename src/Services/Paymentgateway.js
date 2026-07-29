import { useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";
import { runPaymentCheckout } from "../config/appEnv";

export const PaymentGateway = ({ paymentSessionId, orderId, paymentData }) => {

  useEffect(() => {

    const initiatePayment = async () => {
      try {
        await runPaymentCheckout({
          paymentData: paymentData || {
            payment_session_id: paymentSessionId,
            order_id: orderId,
          },
          loadCashfree: load,
          redirectTarget: "_self",
        });
      } catch (error) {
        console.error("Cashfree checkout error:", error);
      }
    };

    if (paymentSessionId || paymentData?.payment_session_id) {
      initiatePayment();
    }

  }, [paymentSessionId, orderId, paymentData]);

  return null;
};
