// src/lib/portal.ts

// Set VITE_PORTAL_URL in your .env / .env.production files to override.
// Falls back to localhost in dev, and the production portal otherwise.
const PORTAL_URL =
  import.meta.env.VITE_PORTAL_URL ||
  (import.meta.env.DEV
    ? "http://localhost:8081"
    : "https://portal.britcampus.com");

export const PORTAL_LOGIN_URL = `${PORTAL_URL}/login`;