/**
 * Cashfree / payment mode for Create React App.
 * Local dummy: REACT_APP_DUMMY_PAYMENT=true (skips Cashfree UI).
 * Sandbox: REACT_APP_CASHFREE_MODE=sandbox when using real Cashfree test keys.
 */

export function getCashfreeMode() {
  if (process.env.REACT_APP_CASHFREE_MODE === "sandbox") {
    return "sandbox";
  }
  return "production";
}

export function isDummyPaymentEnabled() {
  return process.env.REACT_APP_DUMMY_PAYMENT === "true";
}

/** True when backend returned a dummy session (or env flag is on). */
export function isDummyPaymentResponse(paymentData) {
  if (isDummyPaymentEnabled()) return true;
  if (paymentData?.dummy === true) return true;
  const sessionId = paymentData?.payment_session_id;
  return typeof sessionId === "string" && sessionId.startsWith("dummy_");
}

/**
 * Complete checkout: dummy → /payment-status; otherwise Cashfree hosted checkout.
 */
export async function runPaymentCheckout({
  paymentData,
  loadCashfree,
  redirectTarget = "_self",
}) {
  const orderId = paymentData?.order_id;
  const paymentSessionId = paymentData?.payment_session_id;

  if (isDummyPaymentResponse(paymentData) && orderId) {
    const url = `/payment-status?order_id=${encodeURIComponent(orderId)}`;
    if (redirectTarget === "_self") {
      window.location.href = url;
    } else {
      window.location.assign(url);
    }
    return { dummy: true };
  }

  if (!paymentSessionId) {
    throw new Error("Payment session not received");
  }

  const cashfree = await loadCashfree({ mode: getCashfreeMode() });
  await cashfree.checkout({
    paymentSessionId,
    redirectTarget,
  });
  return { dummy: false };
}
