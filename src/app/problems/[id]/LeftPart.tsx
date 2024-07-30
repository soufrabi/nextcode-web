import React from "react";
import Image from "next/image";
import { HiOutlineBuildingOffice2, HiOutlineTag } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { HiOutlineHandThumbDown } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { MdOutlineDescription } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { CompaniesDisclosure, HintsDisclosure, TopicsDisclosure } from "./Disclosures";
import { Media } from "@/app/components/media";

enum LeftPartTabType {
    DESCRIPTION,
    EDITORIAL,
    SOLUTIONS,
    SUBMISSIONS,
}

export function LeftPart() {
    const problemNumber = "1"
    const problemName = "Two Sum"
    const [currentActiveTab, setCurrentActiveTab] = React.useState<LeftPartTabType>(LeftPartTabType.DESCRIPTION)
    return (
        <div className="bg-slate-100 h-full w-full md:pl-2 rounded-2xl">
            <div className="flex justify-around md:justify-start gap-4 overflow-x-clip">
                <button
                    className={`w-full md:w-auto flex gap-1 justify-center items-center rounded-xl p-2 hover:shadow-customhovereffect ${currentActiveTab !== LeftPartTabType.DESCRIPTION ? "opacity-50" : ""}`}
                    onClick={() => { setCurrentActiveTab(LeftPartTabType.DESCRIPTION) }}
                >
                    <MdOutlineDescription className="h-5 w-5 hidden md:block" />
                    <span className="text-xs md:text-sm"> Description </span>
                </button>
                <button
                    className={`w-full md:w-auto flex gap-1 justify-center items-center rounded-xl p-2 hover:shadow-customhovereffect ${currentActiveTab !== LeftPartTabType.EDITORIAL ? "opacity-50" : ""}`}
                    onClick={() => { setCurrentActiveTab(LeftPartTabType.EDITORIAL) }}
                >
                    <Image
                        src="/assets/book-icon-32x32.jpeg"
                        alt="editorial"
                        width={20}
                        height={20}
                        className="hidden md:block"
                    />
                    <span className="text-xs md:text-sm"> Editorial </span>
                </button>
                <button
                    className={`w-full md:w-auto flex gap-1 justify-center items-center rounded-xl p-2 hover:shadow-customhovereffect  ${currentActiveTab !== LeftPartTabType.SOLUTIONS ? "opacity-50" : ""}`}
                    onClick={() => { setCurrentActiveTab(LeftPartTabType.SOLUTIONS) }}
                >
                    <Image
                        src="/assets/chemistry-icon-32x32.jpeg"
                        alt="solution"
                        width={20}
                        height={20}
                        className="hidden md:block"
                    />
                    <span className="text-xs md:text-sm"> Solutions </span>
                </button>
                <button
                    className={`w-full md:w-auto flex gap-1 justify-center items-center rounded-xl p-2 hover:shadow-customhovereffect  ${currentActiveTab !== LeftPartTabType.SUBMISSIONS ? "opacity-50" : ""}`}
                    onClick={() => { setCurrentActiveTab(LeftPartTabType.SUBMISSIONS) }}
                >
                    <GoHistory className="h-5 w-5 hidden md:block" />
                    <span className="text-xs md:text-sm"> Submissions </span>
                </button>

            </div>
            <div className="bg-white p-4 overflow-y-scroll h-[calc(100vh-8rem)] " >
                <span className="text-2xl font-semibold">{problemNumber}. {problemName}</span>

                <div className="flex flex-row gap-2 mt-4">
                    <div>
                        <span className="text-xs text-green-600 bg-slate-100 px-2 py-1">Easy</span>
                    </div>
                    <button
                        className="flex flex-row gap-1 items-center bg-slate-100 px-2 py-1 hover:shadow-customhovereffect"
                    >
                        <HiOutlineTag className="h-4 w-4" />
                        <span className="text-xs">Topics</span>
                    </button>
                    <button
                        className="flex flex-row gap-1 items-center bg-slate-100 px-2 py-1 hover:shadow-customhovereffect"
                    >
                        <HiOutlineBuildingOffice2 className="h-4 w-4" />
                        <span className="text-xs">Companies</span>
                    </button>
                    <button
                        className="flex flex-row gap-1 items-center bg-slate-100 px-2 py-1 hover:shadow-customhovereffect"
                    >
                        <HiOutlineLightBulb className="h-4 w-4" />
                        <span className="text-xs">Hint</span>
                    </button>
                </div>

                <div className="text-sm pt-4">
                    Given an array of integers nums and an integer <span className="bg-slate-100 px-2 py-1">target</span>, return indices of the two numbers such that they add up to <span className="bg-slate-100 px-2 py-1"> target </span> .<br /><br />
                    You may assume that each input would have <span className="font-bold">exactly one solution</span>, and you may not use the same element twice.<br /><br />

                    You can return the answer in any order.<br /><br />
                </div>

                <div className="mt-6">
                    <span className="font-semibold">Example 1:</span> <br />
                    <div className="border-l-[1px] border-l-gray-300 pl-4 my-2">
                        <span className="font-medium text-sm">Input: </span> <span className="text-sm text-gray-600"> nums = [2,7,11,15], target = 9 </span> <br />
                        <span className="font-medium text-sm">Output: </span> <span className="text-sm text-gray-600"> [0,1] </span> <br />
                        <span className="font-medium text-sm">Explanation: </span> <span className="text-sm text-gray-600"> Because nums[0] + nums[1] == 9, we return [0, 1]. </span> <br />
                    </div>
                </div>

                <div>
                    <span className="font-semibold">Example 2:</span> <br />
                    <div className="border-l-[1px] border-l-gray-300 pl-4 my-2">
                        <span className="font-medium text-sm">Input: </span> <span className="text-sm text-gray-600"> nums = [3,2,4], target = 6 </span> <br />
                        <span className="font-medium text-sm">Output: </span> <span className="text-sm text-gray-600"> [1,2] </span> <br />
                    </div>
                </div>

                <div className="mt-8">
                    <span className="font-semibold">Constraints:</span>
                    <div className="pl-4 my-2">
                        <ul className="text-sm list-disc">
                            <li> <span className="bg-slate-100 px-2 py-1"> {`2 <= nums.length <= 104`} </span> </li>
                            <li> <span className="bg-slate-100 px-2 py-1"> {`-109 <= nums[i] <= 109`} </span>  </li>
                            <li> <span className="bg-slate-100 px-2 py-1" > {`-109 <= target <= 109`} </span> </li>
                            <li> <span className="font-semibold px-2 py-1"> {`Only one valid answer exists.`} </span> </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-8 flex gap-4">
                    <div>
                        <span className="text-gray-500 text-xs">Accepted:</span> <span className="text-sm">13.2M</span>
                    </div>
                    <div className="border-r-gray-200 border-r-2" />
                    <div>
                        <span className="text-gray-500 text-xs">Submissions:</span> <span className="text-sm">25M</span>
                    </div>
                    <div className="border-r-gray-200 border-r-2" />
                    <div>
                        <span className="text-gray-500 text-xs">Acceptance Rate:</span> <span className="text-sm">52.5%</span>
                    </div>
                </div>

                <div className="flex flex-col gap-0">
                    <div className="w-full border-b-slate-100 border-b-2"> </div>

                    <div className="w-full border-b-slate-100 border-b-2 pb-0">
                        <TopicsDisclosure topics={["Array", "2-pointer"]} />
                    </div>
                    <div className="w-full border-b-slate-100 border-b-2 pb-0">
                        <CompaniesDisclosure companiesList={["Google", "Microsoft"]} />
                    </div>


                    <div className="w-full border-b-slate-100 border-b-2 pb-0">
                        <HintsDisclosure index={0} bodyText={`A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations`} />
                    </div>

                    <div className="w-full border-b-slate-100 border-b-2 pb-0">
                        <HintsDisclosure index={1} bodyText={`The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?`} />
                    </div>
                </div>

                <div className="mt-4  ">
                    <span className="text-xs">Copyright ©️ 2024 Soufrabi All Rights Reserved</span>
                </div>
            </div>

            <Media greaterThanOrEqual="md">
                <div className="flex flex-row gap-4 pl-2 pt-2 h-8">
                    <button className="flex flex-row gap-2 items-center hover:shadow-customhovereffect">
                        <HiOutlineHandThumbUp className="h-5 w-5 " />
                        <span> 5.5K </span>
                    </button>
                    <button className="flex flex-row gap-2 items-center hover:shadow-customhovereffect">
                        <HiOutlineHandThumbDown className="h-5 w-5" />
                        <span> 1.6K </span>
                    </button>
                    <button className="flex flex-row gap-2 items-center hover:shadow-customhovereffect">
                        <HiOutlineChatBubbleOvalLeft className="h-5 w-5" />
                        <span> 800 </span>
                    </button>
                    <button className="ml-4 hover:shadow-customhovereffect">
                        <HiOutlineStar className="h-5 w-5" />
                    </button>
                    <button className="hover:shadow-customhovereffect">
                        <HiOutlineArrowTopRightOnSquare className="h-5 w-5" />
                    </button>
                    <button className="hover:shadow-customhovereffect">
                        <HiOutlineQuestionMarkCircle className="h-5 w-5" />
                    </button>
                </div>
            </Media>
        </div>
    )
}
