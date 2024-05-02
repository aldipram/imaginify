import { clerkMiddleware, ClerkMiddlewareOptions } from "@clerk/nextjs/server";

const clerkMiddlewareOptions: ClerkMiddlewareOptions = {
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
};

export default clerkMiddleware(clerkMiddlewareOptions);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};