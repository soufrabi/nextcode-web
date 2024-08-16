import { HiChevronDown } from "react-icons/hi2"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import type { ProgrammingLanguage } from "@/lib/editor/types"

type LanguageSelectorProps = {

    programmingLanguageList: Array<ProgrammingLanguage>,
    selectedLanguage: ProgrammingLanguage,
    setSelectedLanguage: (newLanguage: ProgrammingLanguage) => void,
}

export function LanguageSelector({
    programmingLanguageList,
    selectedLanguage,
    setSelectedLanguage,

}: LanguageSelectorProps) {


    return (
        <Listbox
            value={selectedLanguage}
            onChange={setSelectedLanguage}
        >
            <ListboxButton
                className={"bg-white dark:bg-black dark:text-white px-2 py-1.5 border-gray-200/75 border-2 text-sm flex flex-row gap-2 items-center hover:shadow-customhovereffect rounded-lg"}
            >
                <span>
                    {selectedLanguage.name}
                </span>
                <HiChevronDown
                    width={5}
                    height={5}
                />
            </ListboxButton>
            <ListboxOptions
                anchor="bottom start"
                className={"text-sm shadow-lg bg-white dark:bg-black dark:text-white rounded-lg z-20"}
            >
                {
                    programmingLanguageList.map((language) => (
                        <ListboxOption
                            key={language.id}
                            value={language}
                            disabled={!language.available}
                            className={"p-2 cursor-pointer hover:shadow-customhovereffect"}
                        >
                            <span>{language.name}{language.available ? "" : " (Coming Soon)"}</span>
                        </ListboxOption>

                    ))
                }
            </ListboxOptions>


        </Listbox>
    )
}

