import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { HiChevronUp } from "react-icons/hi2"
import type { BoilerPlateCode } from "../data/editor"
import { nanoid } from "nanoid"


type TemplateSelectorProps = {
    boilerPlateCodeMapForSelectedLanguage: { [key: string]: BoilerPlateCode },
    selectedBoilerPlateCode: BoilerPlateCode,
    setSelectedBoilerPlateCode: React.Dispatch<React.SetStateAction<BoilerPlateCode>>,
}


export function TemplateSelector({ boilerPlateCodeMapForSelectedLanguage, selectedBoilerPlateCode, setSelectedBoilerPlateCode }: TemplateSelectorProps) {
    return (
        <Listbox
            value={selectedBoilerPlateCode}
            onChange={setSelectedBoilerPlateCode}
        >
            <ListboxButton
                className="py-2 px-3 bg-sky-100 dark:bg-sky-700 dark:text-gray-200 rounded-md flex flex-row gap-2 justify-center items-center"
            >
                <span
                    className="font-medium"
                >Template</span>
                <HiChevronUp
                    className="w-4 h-4"
                />
            </ListboxButton>
            <ListboxOptions
                anchor="top end"
                className={"text-sm bg-white dark:bg-black dark:text-white rounded-lg border-gray-100 border-2 z-20"}
            >
                {
                    Object.entries(boilerPlateCodeMapForSelectedLanguage).map(([name, boilerPlate]) => (
                        <ListboxOption
                            key={nanoid()}
                            value={boilerPlate}
                            className={"p-2 cursor-pointer hover:shadow-customhovereffect"}
                        >
                            <span>{name}</span>

                        </ListboxOption>

                    ))

                }
            </ListboxOptions>
        </Listbox>

    )
}


