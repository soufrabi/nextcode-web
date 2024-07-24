import Image from "next/image"
import Link from "next/link"
import { PremiumButton } from "../components/PremiumButton"
import { AuthenticateOrUserProfileComponent } from "../components/AuthenticateOrUserProfileComponent"


export function NavBar() {
    return (
        <div className="w-full h-12 flex flex-row justify-between items-center bg-slate-100 dark:bg-slate-800 dark:text-slate-100 px-6 py-4 mb-4">
            <Link
                href={"/"}
                className="flex flex-row gap-4 items-center cursor-pointer"
            >
                <Image
                    src={"/assets/nextcode-logo-64x64.jpeg"}
                    alt="nextcode logo"
                    width={25}
                    height={25}

                    className="rounded-2xl"
                />
                <span>
                    NextCode
                </span>

            </Link>

            <div className="flex flex-row gap-2">
                <AuthenticateOrUserProfileComponent />
                <PremiumButton />
            </div>
        </div>
    )

}

