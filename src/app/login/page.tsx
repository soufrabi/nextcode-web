import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import LoginPageClient from "./LoginPageClient"

type LoginPageProps = {
    searchParams?: { [key: string]: string | string[] | undefined };
}

function getCallbackUrl (searchParams: LoginPageProps["searchParams"]) : string {
    if (!searchParams) return "/"

    const callbackUrl = searchParams.callbackUrl
    if (typeof callbackUrl === "string"){
        return callbackUrl
    }else if (Array.isArray(callbackUrl) && callbackUrl.length > 0){
        return callbackUrl[0]
    }else {
        return "/"
    }
}

export default async function LoginPage({searchParams}: LoginPageProps) {

    const session = await getServerSession()

    if (session) {
        // logged in
        const callbackUrl = getCallbackUrl(searchParams)
        redirect(callbackUrl)
    } else {
        // not logged in
        return (
            <LoginPageClient />
        )
    }

}
