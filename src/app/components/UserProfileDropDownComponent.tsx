import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { FaCircleUser } from "react-icons/fa6";
import { IoMdExit } from 'react-icons/io';
import { CgDarkMode } from "react-icons/cg";
import Link from 'next/link';
import { RiFileListLine } from 'react-icons/ri';
import { AiOutlineExperiment } from 'react-icons/ai';
import { signOut } from 'next-auth/react';
import { Session } from 'next-auth';

type UserProfileDropDownComponentProps = {
    session: Session
}


export function UserProfileDropDownComponent({ session }: UserProfileDropDownComponentProps) {
    return (
        <Popover
            className="relative"
        >
            <PopoverButton className="px-1 py-1 outline-none">
                <FaCircleUser
                    className="w-6 h-6 text-gray-400"
                />
            </PopoverButton>
            <PopoverPanel
                anchor="bottom end"
                className="mt-2 flex flex-col gap-2 bg-white p-4 shadow-xl select-none"
            >

                <Link
                    href={"/profile"}

                    className='flex flex-row gap-3.5 py-1 px-1'>
                    {
                        (session.user && session.user.image) ?
                            <>
                                <img
                                    src={session.user.image}
                                    alt="Profile Picture"
                                    width={64}
                                    height={64}
                                    className='cursor-pointer'
                                />
                            </>
                            :
                            <FaCircleUser
                                className='w-16 h-16 cursor-pointer'
                            />
                    }
                    <div className="flex flex-col justify-center">
                        <span
                            className='text-lg font-semibold'
                        >{session.user?.name || "John Doe"}</span>
                        <Link
                            href="/premium">
                            <span
                                className='text-sm'
                            >Subscribe to Premium</span>
                        </Link>
                    </div>
                </Link>
                <div className="flex flex-col gap-0 mt-1">
                    <div
                        className="flex flex-row gap-2 cursor-pointer py-2.5 px-2"
                    >
                        <AiOutlineExperiment
                            className="w-6 h-6"
                        />
                        <span
                            className=''
                        >Try beta features</span>
                    </div>
                    <div
                        className="flex flex-row gap-2 cursor-pointer py-2.5 px-2"
                    >
                        <RiFileListLine
                            className="w-6 h-6"
                        />
                        <span
                            className=''
                        >Orders</span>
                    </div>
                    <div
                        className="flex flex-row gap-2 cursor-pointer py-2.5 px-2"
                    >
                        <CgDarkMode
                            className="w-6 h-6"
                        />
                        <span
                            className=''
                        >Theme</span>
                    </div>
                    <div
                        onClick={() => { signOut() }}
                        className="flex flex-row gap-2 cursor-pointer py-2.5 px-2"
                    >
                        <IoMdExit
                            className="w-6 h-6"
                        />
                        <span
                            className=''
                        >Sign Out</span>
                    </div>
                </div>

            </PopoverPanel>
        </Popover>
    )

}
