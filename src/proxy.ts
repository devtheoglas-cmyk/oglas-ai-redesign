import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname.endsWith(".vercel.app")) {
    return new NextResponse("Deployment protected", {
      status: 401,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
