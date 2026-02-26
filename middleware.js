import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  const isCRM = host.startsWith("crm.");

  // ===============================
  // If CRM Domain
  // ===============================
  if (isCRM) {
    // Allow only /admin routes
    if (!pathname.startsWith("/admin")) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }
  }

  // ===============================
  // If Main Website Domain
  // ===============================
  if (!isCRM) {
    // Block /admin on main site
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(
        new URL("/", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // apply to all routes
};