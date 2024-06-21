import Image from "next/image"
import Link from "next/link"
import { PremiumButton } from "./PremiumButton"
import { AuthenticateOrUserProfileComponent } from "./AuthenticateOrUserProfileComponent"

export function NavBar() {
    return (
        <div className="w-full h-12 flex flex-row justify-around py-3 shadow-sm">
            <div className="flex flex-row gap-6 items-center">
                <Link
                    href={"/"}
                    className="cursor-pointer"
                    onContextMenu={(ev: React.MouseEvent) => { ev.preventDefault() }}
                >
                    <Image
                        src={"/nextcode-logo-64x64.jpeg"}
                        alt=""
                        width={25}
                        height={25}
                        className="rounded-2xl"
                    />
                </Link>
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

