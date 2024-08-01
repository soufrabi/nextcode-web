import Link from "next/link"
import { NavBarAppLogo } from "./NavBarAppLogo"
import { PremiumButton } from "./PremiumButton"
import { AuthenticateOrUserProfileComponent } from "./AuthenticateOrUserProfileComponent"

export function NavBar() {
    return (
        <div className="w-full h-12 flex flex-row justify-around py-3 shadow-sm">
            <div className="flex flex-row gap-6 items-center">
                <NavBarAppLogo />
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Explore</span>
                </Link>
                <Link
                    href={"/problemset"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-black"
                    >Problems</span>
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Contest</span>
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Discuss</span>
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Interview</span>
                </Link>
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <span
                        className="text-gray-500"
                    >Store</span>
                </Link>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center">
                <AuthenticateOrUserProfileComponent />
                <PremiumButton />
            </div>

        </div>
    )
}

