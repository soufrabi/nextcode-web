import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { HiChevronUp } from "react-icons/hi2"
import type { BoilerPlate } from "../data/editor"
import { nanoid } from "nanoid"


type TemplateSelectorProps = {
    boilerPlateListForSelectedLanguage: Array<BoilerPlate>,
    selectedBoilerPlate: BoilerPlate,
    setSelectedBoilerPlate: React.Dispatch<React.SetStateAction<BoilerPlate>>,
}


export function TemplateSelector({ boilerPlateListForSelectedLanguage, selectedBoilerPlate, setSelectedBoilerPlate }: TemplateSelectorProps) {
    return (
        <Listbox
            value={selectedBoilerPlate}
            onChange={setSelectedBoilerPlate}
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
                    boilerPlateListForSelectedLanguage.map((boilerPlate) => (
                        <ListboxOption
                            key={nanoid()}
                            value={boilerPlate}
                            className={"p-2 cursor-pointer hover:shadow-customhovereffect"}
                        >
                            <span>{boilerPlate.name}</span>

                        </ListboxOption>

                    ))

                }
            </ListboxOptions>
        </Listbox>

    )
}


