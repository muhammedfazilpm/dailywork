import { useEffect } from "react";
import { load } from "@cashfreepayments/cashfree-js";

export const PaymentGateway = ({ paymentSessionId }) => {

  useEffect(() => {

    const initiatePayment = async () => {
      try {
        const cashfree = await load({
          mode: "sandbox", 
          // change to "production" in live
        });

        cashfree.checkout({
          paymentSessionId: paymentSessionId,
          redirectTarget: "_self",
        });

      } catch (error) {
        console.error("Cashfree checkout error:", error);
      }
    };

    if (paymentSessionId) {
      initiatePayment();
    }

  }, [paymentSessionId]);

  return null;
};
