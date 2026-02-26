import { NextResponse } from "next/server";

/**
 * Next.js Middleware — runs on every request BEFORE the page renders.
 *
 * Admin routes are served directly within this app.
 * Authentication is handled at the page / API level.
 */

export function middleware(request) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
