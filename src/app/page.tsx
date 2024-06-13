// import Image from "next/image";
"use client"

import Image from "next/image"
import Link from "next/link"
import { MediaContextProvider, Media } from "@/app/components/media"

function NavBar() {

    return (
        <div className="w-full h-12 bg-white flex flex-row items-center justify-center md:justify-around  py-8 shadow-md">
            <div className="flex flex-row gap-4 items-center">
                <Image
                    src={"/nextcode-logo.png"}
                    alt="NextCode"
                    width={32}
                    height={32}
                    className="rounded-2xl"
                />
                <Media greaterThanOrEqual="md">
                    <span className="text-xl">
                        NextCode
                    </span>
                </Media>
            </div>

            <Media greaterThanOrEqual="md" >
                <div className="flex flex-row gap-10 text-md">
                    <Link
                        href={"/premium"}
                        className="hover:bg-orange-400 hover:text-white px-4 py-2 rounded-2xl"
                    >
                        <span>Premium</span>
                    </Link>
                    <Link
                        href={"/problemset"}
                        className="hover:bg-gray-500 hover:text-white px-4 py-2 rounded-2xl"
                    >
                        <span>Problems</span>
                    </Link>
                    <Link
                        href={"/editor"}
                        className="hover:bg-gray-500 hover:text-white px-4 py-2 rounded-2xl"
                    >
                        <span>Editor</span>
                    </Link>
                </div>
            </Media>
        </div>
    )
}

export default function Home() {

    return (
        <MediaContextProvider>
            <main className="bg-[FEFDFF] min-h-screen w-screen">
                <NavBar />
                <div className="px-10 pt-[calc(10vh)] md:px-0 md:flex md:flex-row md:justify-around md:items-center md:pt-[calc(20vh)]">
                    <div className="w-[90%] md:w-[50%]" >
                        <div className="">
                            <div className="text-xl mb-4">
                                <span>Transform Your Coding Journey with</span>
                            </div>
                            <div className="text-5xl font-serif mb-6">
                                <span>NextCode&apos;s Advanced Online Judge.</span>
                            </div>
                            <div className="font-sans font-light">
                                <span>Experience the future of coding competitions with our next-generation platform. Analyze performance, participate in real-time contests, and push your limits with advanced challenges. Join a vibrant community and elevate your coding skills today.</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Dummy Div on the right*/}
                    </div>

                </div>
            </main>
        </MediaContextProvider>
    )
}
