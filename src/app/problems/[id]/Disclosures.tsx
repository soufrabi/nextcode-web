import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { HiChevronDown, HiOutlineBuildingOffice2, HiOutlineLightBulb, HiOutlineTag } from "react-icons/hi2"
import { nanoid } from "nanoid";

export function TopicsDisclosure(props: { topics: string[] }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between py-4">
                            <div className="flex gap-1 items-center">
                                <HiOutlineTag className="h-4 w-4 mr-1" />
                                <span className="text-sm">Topics</span>
                            </div>
                            <HiChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
                        </DisclosureButton>
                        <DisclosurePanel className="">
                            <div className="pl-4 pb-3 flex gap-2">
                                {props.topics.map((topicName: string) => (
                                    <span key={nanoid()} className="bg-slate-100 text-xs px-2 py-1">{topicName}</span>
                                ))
                                }
                            </div>
                        </DisclosurePanel>
                    </>

                )}
            </Disclosure>
        </div>
    )
}

export function CompaniesDisclosure(props: { companiesList: string[] }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between py-4">
                            <div className="flex gap-1 items-center">
                                <HiOutlineBuildingOffice2 className="h-4 w-4 mr-1" />
                                <span className="text-sm">Companies</span>
                            </div>
                            <HiChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
                        </DisclosureButton>
                        <DisclosurePanel className="">
                            <div className="pl-4 pb-3 flex gap-2">
                                {props.companiesList.map((companyName: string) => (
                                    <span key={nanoid()} className="bg-slate-100 text-xs px-2 py-1">{companyName}</span>
                                ))
                                }
                            </div>
                        </DisclosurePanel>
                    </>

                )}
            </Disclosure>
        </div>
    )
}

export function HintsDisclosure(props: { index: number, bodyText: string }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <DisclosureButton className="w-full flex justify-between py-4">
                            <div className="flex gap-1 items-center">
                                <HiOutlineLightBulb className="h-4 w-4 mr-1" />
                                <span className="text-sm">Hint {props.index + 1}</span>
                            </div>
                            <HiChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
                        </DisclosureButton>
                        <DisclosurePanel className="">
                            <div className="pl-4 pb-3 flex gap-2">
                                <span className="text-xs px-2 py-1">{props.bodyText}</span>
                            </div>
                        </DisclosurePanel>
                    </>

                )}
            </Disclosure>
        </div>
    )
}
