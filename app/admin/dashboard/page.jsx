import { redirect } from "next/navigation";

/**
 * The CRM dashboard lives at crm.techsupport4.com (served by the backend).
 * If a user somehow reaches this page (middleware should catch it first),
 * redirect them to the CRM.
 */
const CRM_URL =
  process.env.NEXT_PUBLIC_CRM_URL || "https://crm.techsupport4.com";

export default function Dashboard() {
  redirect(CRM_URL);
}
