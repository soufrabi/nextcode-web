"use server"

import axios from "axios"
import { ProgrammingLanguage } from "../data/editor"

export async function getProgrammingLanguages() : Promise<Array<ProgrammingLanguage>>{
    try {
        const res = await axios.get(`${process.env.API_SERVER_URL}/editor/language/all`)
        const data:Array<ProgrammingLanguage> = res.data
        console.log("Programming Language", data)
        return data
    } catch (err) {
        console.error("Failed to get data")
        return []
    }
}
