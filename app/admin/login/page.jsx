import { redirect } from "next/navigation";

/**
 * Admin login is available ONLY at the CRM subdomain.
 * If a user somehow reaches this page (middleware should catch it first),
 * redirect them to the CRM.
 */
const CRM_URL =
  process.env.NEXT_PUBLIC_CRM_URL || "https://crm.techsupport4.com";

export default function AdminLogin() {
  redirect(CRM_URL);
}
