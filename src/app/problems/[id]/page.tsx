"use client";

import Image from "next/image";
import { useParams } from "next/navigation"

function NavBar() {
    return (
        // <nav className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]" w-[92%]>
        <div className="bg-slate-100 w-full px-6">
            <nav className="flex justify-between items-center mx-auto bg-[f0f0f0] h-12">
                <div className="flex items-center gap-4">
                    <button>
                        <Image
                            src="/leetcode-logo.png"
                            alt="Leetcode Logo"
                            width={20}
                            height={20}
                        />
                    </button>
                    <div className="flex gap-3 items-center">
                        <button>
                            <Image
                                src="/playlist-symbolic.svg"
                                alt="problem list"
                                width={20}
                                height={20}
                            />
                        </button>
                        <span>Problem List</span>
                        <button>
                            <Image
                                src="/left-small-symbolic.svg"
                                alt="previous problem"
                                width={20}
                                height={20}
                            />
                        </button>
                        <button>
                            <Image
                                src="/right-small-symbolic.svg"
                                alt="next problem"
                                width={20}
                                height={20}
                            />
                        </button>
                        <button>
                            <Image
                                src="/playlist-shuffle-symbolic.svg"
                                alt="previous problem"
                                width={18}
                                height={18}
                            />
                        </button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="">
                        <Image
                            src="/debug-insect-symbol.png"
                            alt="Debug"
                            width={20}
                            height={20}
                        />
                    </button>
                    <button className="flex gap-1 items-center">
                        <Image
                            src="/play-symbolic.svg"
                            alt="Run"
                            width={20}
                            height={20}
                        />
                        <span>Run</span>
                    </button>
                    <button className="flex gap-1 items-center">
                        <Image
                            src="/cloud-computing.png"
                            alt="Submit"
                            width={20}
                            height={20}
                        />
                        <span>Submit</span>
                    </button>
                    <button className="">
                        <Image
                            src="/pen-and-paper-notes-symbol.png"
                            alt="Notes"
                            width={16}
                            height={17}
                        />

                    </button>
                </div>
                <div className="flex gap-4 items-center">
                    <button>
                        <Image
                            src="/touchpad-symbolic.svg"
                            alt="layouts"
                            width={20}
                            height={20}
                        />
                    </button>
                    <button>
                        <Image
                            src="/settings-symbolic.svg"
                            alt="settings"
                            width={20}
                            height={20}
                        />
                    </button>
                    <div className="flex gap-2">
                        <button className="">
                            <span className="text-gray-600">Register</span>
                        </button>
                        <div>
                            <span className="text-gray-600"> or </span>
                        </div>
                        <button className="">
                            <span className="text-gray-600">Sign in</span>
                        </button>
                    </div>
                    <button className="px-2 py-1 bg-yellow-50 text-orange-400">
                        <span>Premium</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default function ProblemPage() {
    const params = useParams<{ id: string }>()

    return (
        <main>
            <NavBar />
            Leetcode ProblemPage {params.id}
        </main>
    )
}
