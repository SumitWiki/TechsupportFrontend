import { NextResponse } from "next/server";

/**
 * Next.js Middleware — runs on every request BEFORE the page renders.
 * Protects /admin/* routes: redirects to /admin/login if no auth cookie.
 *
 * NOTE: When you build the backend, set a cookie named "auth_token"
 * (httpOnly, Secure, SameSite=Strict) on successful login instead of
 * using localStorage. This middleware will then read it server-side.
 */
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except the login page itself
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("auth_token");

    if (!token) {
      const loginUrl = new URL("/admin/login", request.url);
      // Pass the original URL so we can redirect back after login
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Only run middleware on admin routes — never on static assets or API
  matcher: ["/admin/:path*"],
};
