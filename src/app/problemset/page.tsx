"use server"

import { NavBar } from "../components/NavBar"
import { ProblemTable } from "./ProblemTable"

export default async function ProblemSetPage() {
    return (
        <main>
            <div className="h-screen w-screen">
                <NavBar />
                <div className="h-full w-screen flex justify-center pt-6">
                    <ProblemTable />
                </div>
            </div>

        </main>
    )
}
