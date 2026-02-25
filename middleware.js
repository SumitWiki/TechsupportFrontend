import { NextResponse } from "next/server";

/**
 * Next.js Middleware — runs on every request BEFORE the page renders.
 *
 * All /admin/* routes redirect to the CRM subdomain.
 * The CRM dashboard lives at crm.techsupport4.com (served by the backend).
 * Admin login is NOT available on the main site.
 */

const CRM_URL =
  process.env.NEXT_PUBLIC_CRM_URL || "https://crm.techsupport4.com";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect ALL /admin routes to the CRM subdomain
  if (pathname.startsWith("/admin")) {
    return NextResponse.redirect(CRM_URL, { status: 308 });
  }

  return NextResponse.next();
}

export const config = {
  // Only run middleware on admin routes — never on static assets or API
  matcher: ["/admin/:path*"],
};
