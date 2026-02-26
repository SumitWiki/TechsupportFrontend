import { NextResponse } from "next/server";

export function middleware(request) {
  const host = (request.headers.get("host") || "").toLowerCase();
  const { pathname } = request.nextUrl;
  const isCRM = host.startsWith("crm.");

  // ===============================
  // CRM Subdomain  →  only /admin
  // ===============================
  if (isCRM) {
    if (!pathname.startsWith("/admin")) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.rewrite(url);
    }
    // Add noindex header to all CRM responses
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