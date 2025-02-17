import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/admin(.*)"]); // Protect /admin

export default clerkMiddleware(async (auth, req) => {
  const url = new URL(req.url);

  // Don't protect the sign-in page itself
  if (url.pathname === "/admin/sign-in") {
    return;
  }

  if (isProtectedRoute(req)) {
    const { userId } = await auth(); // Ensure authentication
    if (!userId) {
      return NextResponse.redirect(new URL("/admin/sign-in", req.url)); // Redirect to sign-in
    }
  }
});

export const config = {
  matcher: ["/admin(.*)"], // Only apply middleware to /admin
};
