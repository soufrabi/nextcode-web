import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        console.log("req.nextUrl.pathname", req.nextUrl.pathname)
        console.log("req.nextUrl.token", req.nextauth.token)
    }

)

export const config = {
    matcher: [
        "/",
        "/problemset",
        "/problems/:path*",
        "/editor",
    ]
}
