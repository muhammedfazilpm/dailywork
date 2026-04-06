/**
 * Cashfree SDK mode (Create React App: REACT_APP_CASHFREE_MODE in .env).
 * Default: production. Set REACT_APP_CASHFREE_MODE=sandbox only for local test checkout.
 */

export function getCashfreeMode() {
  if (process.env.REACT_APP_CASHFREE_MODE === "sandbox") {
    return "sandbox";
  }
  return "production";
}
