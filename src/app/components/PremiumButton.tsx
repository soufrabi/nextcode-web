import Link from "next/link"

export function PremiumButton() {
    return (
        <Link
            href={"/premium"}
            className="px-2 py-1 bg-yellow-50 text-orange-400 cursor-pointer hover:shadow-customhovereffect">
            <span>Premium</span>
        </Link>
    )
}
