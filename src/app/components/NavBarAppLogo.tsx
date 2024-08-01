"use client"

import Image from "next/image"
import Link from "next/link"

export function NavBarAppLogo() {
    return (
        <Link
            href={"/"}
            className="cursor-pointer"
            onContextMenu={(ev: React.MouseEvent) => { ev.preventDefault() }}
        >
            <Image
                src={"/assets/nextcode-logo-64x64.jpeg"}
                alt=""
                width={25}
                height={25}
                className="rounded-2xl"
            />
        </Link>
    )
}
