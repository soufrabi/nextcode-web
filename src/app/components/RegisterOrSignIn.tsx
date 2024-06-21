import { signIn } from "next-auth/react";

export function RegisterOrSignIn() {

    return (

        <div className="flex flex-row gap-0">
            <div
                onClick={() => { signIn() }}
                className="px-1 py-1  hover:shadow-customhovereffect cursor-pointer"
            >
                <span className="text-gray-600 text-sm">Register</span>
            </div>
            <div className="px-1 py-1">
                <span className="text-gray-600 text-sm"> or </span>
            </div>
            <div
                onClick={() => { signIn() }}
                className="px-1 py-1 hover:shadow-customhovereffect cursor-pointer"
            >
                <span className="text-gray-600 text-sm">Sign in</span>
            </div>
        </div>

    )
}

