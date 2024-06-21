"use client"

import { useSession } from "next-auth/react"
import { UserProfileDropDownComponent } from "./UserProfileDropDownComponent"
import { RegisterOrSignIn } from "./RegisterOrSignIn"


export function AuthenticateOrUserProfileComponent() {
    const { data: session } = useSession()

    if (session) {
        return <UserProfileDropDownComponent session={session}/>
    } else {
        return <RegisterOrSignIn />
    }


}
