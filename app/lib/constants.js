/**
 * Shared constants for the entire app.
 * Values come from environment variables so they can be changed
 * per-environment without touching source code.
 */

export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "TechSupport4";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://techsupport4.com";
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// CRM Backend URL - for saving contact form submissions to the CRM database
export const CRM_API_URL =
  process.env.NEXT_PUBLIC_CRM_API_URL || "https://crm.techsupport4.com";

// Phone numbers — replace values in .env.local or .env.production
export const PHONE_USA =
  process.env.NEXT_PUBLIC_PHONE_USA || "+18889501777";
export const PHONE_UK =
  process.env.NEXT_PUBLIC_PHONE_UK || "+18889501777";
export const PHONE_CA =
  process.env.NEXT_PUBLIC_PHONE_CA || "+18889501777";
export const PHONE_DISPLAY =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY || "1-888-950-1777";

// Support email
export const SUPPORT_EMAIL = "support@techsupport4.com";
