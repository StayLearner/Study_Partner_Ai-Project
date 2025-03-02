import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes are protected
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)','/create','/course(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // console.log("Checking authentication for:", req.nextUrl.pathname);
  
  if (isProtectedRoute(req)) {
    await auth.protect(); // Protect the route
  }
});

export const config = {
  matcher: [
    // Protect all API routes
    '/(api|trpc)(.*)',

    // Protect everything except Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
