import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    let authUser = request.cookies.get('authUser')?.value;
    if (request.nextUrl.pathname == '/') {
        if (authUser) {
            return NextResponse.redirect(new URL(request.referrer, request.url))
        }
    } else {
        if (!authUser) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }
}

export const config = {
    matcher: [
        '/((?!_next/static|favicon.ico|navbarIcons|sidebarIcons|loginPageIcons).*)',
    ],
}
