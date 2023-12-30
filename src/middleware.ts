import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    
    const isPrivatePath = path === "/"

    const token = request.cookies.get('token')?.value || ""

    if (!token && isPrivatePath) {
        return NextResponse.redirect(new URL('/welcometosmtp', request.nextUrl))
    }

    if (token && !isPrivatePath) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    return
}
const hello = "helloworld"

export const config = {
    matcher: [
      '/',
      '/welcometosmtp',
      '/login',
      '/signup',
    ]
}