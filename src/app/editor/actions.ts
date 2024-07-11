"use server"

import axios from "axios"
import { BoilerPlate, ProgrammingLanguage } from "../data/editor"

export async function getProgrammingLanguages(): Promise<Array<ProgrammingLanguage>> {
    try {
        const res = await axios.get(`${process.env.API_SERVER_URL}/editor/language/all`)
        const data: Array<ProgrammingLanguage> = res.data
        console.log("Programming Language", data)
        return data
    } catch (err) {
        console.error("failed to get programming language list")
        return []
    }
}

export async function getBoilerPlateList(languageId: number): Promise<Array<BoilerPlate>> {
    try {
        const res = await axios.get(`${process.env.API_SERVER_URL}/editor/boilerplate/${languageId}`)
        const data: Array<BoilerPlate> = res.data
        console.log("Boiler Plate List", data)
        return data

    } catch (err) {
        console.error("failed to get boiler plate")
        return []
    }

}
