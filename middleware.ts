import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { unauthorized } from 'next/navigation';

const publicRoutes = createRouteMatcher([
  '/api/uploadThing',
])

export default clerkMiddleware(async(auth, req)=>{
  // publicRoutes : ["/api/uploadThing"]
  if(publicRoutes(req)){
    return;
  }
  // const {userId} = await auth();
  // if(!userId){
  //   return new Response('unauthorized')
  // }
  // session.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};