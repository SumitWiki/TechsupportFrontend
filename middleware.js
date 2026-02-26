import { NextResponse } from "next/server";

export function middleware(request) {
  const host = (request.headers.get("host") || "").toLowerCase();
  const { pathname } = request.nextUrl;
  const isCRM = host.startsWith("crm.");

  // ===============================
  // CRM Subdomain  →  only /admin
  // ===============================
  if (isCRM) {
    // If user hits /admin/login directly (or from cached 308), redirect to clean /
    if (pathname === "/admin/login") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url, 307);
    }
    // Root or any non-admin path → silently serve login (URL stays clean)
    if (!pathname.startsWith("/admin")) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.rewrite(url);
    }
    // /admin/dashboard etc → pass through
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  // ===============================
  // Main Domain  →  block /admin
  // ===============================
  if (pathname.startsWith("/admin")) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Match all routes except Next.js internals and static assets
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon\\.svg|.*\\.(?:png|jpg|jpeg|gif|webp|ico|css|js|woff2?|ttf|eot|svg)$).*)",
  ],
};