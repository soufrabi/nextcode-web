import Link from "next/link";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import { RiPlayList2Fill } from "react-icons/ri";
import { RiShuffleFill } from "react-icons/ri";
import { VscDebug } from "react-icons/vsc";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { AuthenticateOrUserProfileComponent } from "@/app/components/AuthenticateOrUserProfileComponent";
import { PremiumButton } from "@/app/components/PremiumButton";
import { FaPlay } from "react-icons/fa";

export function NavBar() {

    return (
        <nav className="flex justify-center md:justify-between items-center md:mx-auto bg-[f0f0f0] h-12 w-full px-6">
            <div className="flex items-center gap-4">
                <Link
                    href={"/"}
                    className="cursor-pointer"
                >
                    <Image
                        src="/assets/nextcode-logo-32x32.jpeg"
                        alt="NextCode Logo"
                        width={20}
                        height={20}
                        className="rounded-full"
                    />
                </Link>
                <div className="hidden md:flex gap-0 items-center">
                    <Link
                        href={"/problemset"}
                        className="flex flex-row gap-2 items-center px-2 py-1 hover:shadow-customhovereffect"
                    >
                        <RiPlayList2Fill className="h-4 w-4" />
                        <span className="text-sm">Problem List</span>
                    </Link>
                    <button
                        className="px-1.5 py-1 hover:shadow-customhovereffect"
                    >
                        < HiChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        className="px-1.5 py-1 hover:shadow-customhovereffect"
                    >
                        < HiChevronRight className="h-5 w-5" />
                    </button>
                    <button
                        className="px-1.5 py-1 hover:shadow-customhovereffect"
                    >
                        <RiShuffleFill className="h-5 w-5" />
                    </button>
                </div>
            </div>
            <div className="hidden md:flex md:flex-row gap-0">
                <button className="px-2 py-1 hover:shadow-customhovereffect">
                    <VscDebug className="h-4 w-4" />
                </button>
                <button className="px-2 py-1 flex gap-2 items-center hover:shadow-customhovereffect">
                    <FaPlay className="h-3 w-3" />
                    <span className="text-sm">Run</span>
                </button>
                <button className="px-2 py-1 flex gap-2 items-center hover:shadow-customhovereffect">
                    <MdOutlineCloudUpload className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-green-600">Submit</span>
                </button>
                <button className="px-2 py-1 hover:shadow-customhovereffect">
                    <Image
                        src="/assets/pen-and-paper-notes-symbol-32x32.jpeg"
                        alt="Notes"
                        width={16}
                        height={17}
                    />

                </button>
            </div>
            <div className="hidden md:flex gap-2 items-center">
                <button className="px-2 py-1 hover:shadow-customhovereffect">
                    <MdOutlineDashboard className="h-5 w-5" />
                </button>
                <button className="px-2 py-1 hover:shadow-customhovereffect">
                    <IoSettingsOutline className="h-5 w-5" />
                </button>
                <AuthenticateOrUserProfileComponent />
                <PremiumButton />
            </div>
        </nav>
    )
}
