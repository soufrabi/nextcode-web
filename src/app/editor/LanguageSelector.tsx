import { HiChevronDown } from "react-icons/hi2"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import type { ProgrammingLanguage } from "../data/editor"

type LanguageSelectorProps = {

    programmingLanguageList: Array<ProgrammingLanguage>,
    selectedLanguage: ProgrammingLanguage,
    setSelectedLanguage: React.Dispatch<React.SetStateAction<ProgrammingLanguage>>,
}

export function LanguageSelector({
    programmingLanguageList,
    selectedLanguage,
    setSelectedLanguage,

}: LanguageSelectorProps) {


    return (
        <div className="">
            <Listbox
                value={selectedLanguage}
                onChange={setSelectedLanguage}
            >
                <ListboxButton
                    className={"p-2 border-gray-200/75 border-2 text-sm flex flex-row gap-2 items-center hover:shadow-customhovereffect rounded-lg"}
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
        </div>
    )
}

