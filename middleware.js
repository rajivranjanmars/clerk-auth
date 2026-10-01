import { clerkMiddleware } from "@clerk/nextjs/server";

const publicRoutes = new Set(["/", "/register"]);

export default clerkMiddleware(async (auth, request) => {
  if (!publicRoutes.has(request.nextUrl.pathname)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
