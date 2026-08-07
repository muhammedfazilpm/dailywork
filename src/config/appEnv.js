/**
 * Razorpay / payment mode for Create React App.
 * Test checkout: REACT_APP_DUMMY_PAYMENT=false + REACT_APP_RAZORPAY_KEY_ID=rzp_test_...
 * Skip gateway: REACT_APP_DUMMY_PAYMENT=true AND backend also returns dummy order.
 */

export function isDummyPaymentEnabled() {
  return String(process.env.REACT_APP_DUMMY_PAYMENT || "").toLowerCase() === "true";
}

/**
 * Only skip Razorpay UI for true dummy orders.
 * Real Razorpay order ids start with "order_" — always open checkout for those,
 * even if REACT_APP_DUMMY_PAYMENT is still true from a stale CRA restart.
 */
export function isDummyPaymentResponse(paymentData) {
  const rzpOrderId = paymentData?.razorpay_order_id;
  if (typeof rzpOrderId === "string" && rzpOrderId.startsWith("order_")) {
    return false;
  }
  if (paymentData?.dummy === true) return true;
  if (typeof rzpOrderId === "string" && rzpOrderId.startsWith("dummy_")) {
    return true;
  }
  return isDummyPaymentEnabled();
}

export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }
    const existing = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(true));
      existing.addEventListener("error", () => resolve(false));
      // Already loaded but Razorpay global may exist
      if (window.Razorpay) resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function buildStatusUrl(orderId, razorpayResponse = {}) {
  const params = new URLSearchParams({ order_id: orderId });
  if (razorpayResponse.razorpay_order_id) {
    params.set("razorpay_order_id", razorpayResponse.razorpay_order_id);
  }
  if (razorpayResponse.razorpay_payment_id) {
    params.set("razorpay_payment_id", razorpayResponse.razorpay_payment_id);
  }
  if (razorpayResponse.razorpay_signature) {
    params.set("razorpay_signature", razorpayResponse.razorpay_signature);
  }
  return `/payment-status?${params.toString()}`;
}

/**
 * Complete checkout: dummy → /payment-status; otherwise Razorpay checkout modal.
 * On success, redirects with order_id + Razorpay payment/signature params.
 */
export async function runPaymentCheckout({
  paymentData,
  prefill = {},
  redirectTarget = "_self",
}) {
  const orderId = paymentData?.order_id;
  const razorpayOrderId = paymentData?.razorpay_order_id;
  const key =
    paymentData?.key ||
    process.env.REACT_APP_RAZORPAY_KEY_ID ||
    "";

  if (isDummyPaymentResponse(paymentData) && orderId) {
    const url = buildStatusUrl(orderId);
    if (redirectTarget === "_self") {
      window.location.href = url;
    } else {
      window.location.assign(url);
    }
    return { dummy: true };
  }

  if (!razorpayOrderId || !orderId) {
    throw new Error("Razorpay order not received");
  }

  if (!key || key === "dummy") {
    throw new Error("Razorpay key missing. Set REACT_APP_RAZORPAY_KEY_ID.");
  }

  const ok = await loadRazorpayScript();
  if (!ok || !window.Razorpay) {
    throw new Error("Razorpay SDK failed to load");
  }

  return new Promise((resolve, reject) => {
    const options = {
      key,
      amount: Number(paymentData.amount),
      currency: paymentData.currency || "INR",
      name: "KooliApp",
      description: "Wallet recharge ₹10",
      order_id: razorpayOrderId,
      handler(response) {
        const url = buildStatusUrl(orderId, response);
        if (redirectTarget === "_self") {
          window.location.href = url;
        } else {
          window.location.assign(url);
        }
        resolve({ dummy: false, response });
      },
      prefill: {
        name: prefill.name || "",
        email: prefill.email || "",
        contact: prefill.contact || "",
      },
      theme: { color: "#dc2626" },
      modal: {
        ondismiss() {
          reject(new Error("Payment cancelled"));
        },
      },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        reject(
          new Error(
            response?.error?.description || "Payment failed. Please try again."
          )
        );
      });
      rzp.open();
    } catch (err) {
      reject(err);
    }
  });
}
