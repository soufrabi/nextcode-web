import { withAuth } from "next-auth/middleware"
// import { NextResponse } from "next/server"

export default withAuth(
    function middleware() {
    },
    {
        pages: {
            signIn: "/login",
        }
    }

)

export const config = {
    matcher: [
        // "/",
        // "/problemset",
        // "/problems/:path*",
        // "/editor",
        "/premium",
    ]
}
