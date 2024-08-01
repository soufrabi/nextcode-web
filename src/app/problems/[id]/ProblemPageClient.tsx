"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Split from "react-split";
import { Media } from "../../components/media"
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from "./NavBar";
import { LeftPart } from "./LeftPart";
import { RightPart } from "./RightPart";
import { TestCaseData } from "./types";

type ProblemPageClientProps = {
    testCaseDefaultList : Array<TestCaseData>,
}

export default function ProblemPageClient({testCaseDefaultList}:ProblemPageClientProps) {
    React.useEffect(() => {
        document.body.style.overflow = "hidden"

        return ()=>{
            document.body.style.overflow = "visible"
        }
    }, [])

    return (
            <main className="bg-slate-200 h-lvh w-screen max-w-screen">
                <NavBar />
                <div className="">
                    <Media at="sm">
                        <LeftPart />
                    </Media>
                    <Media greaterThanOrEqual="md">
                        <Split
                            sizes={[50, 50]}
                            minSize={200}
                            expandToMin={false}
                            gutterSize={10}
                            gutterAlign="center"
                            snapOffset={30}
                            dragInterval={1}
                            direction="horizontal"
                            cursor="col-resize"
                            className="split-horizontal"
                        >
                            <LeftPart />
                            <RightPart testCaseDefaultList={testCaseDefaultList} />
                        </Split>
                    </Media>
                </div>
                <ToastContainer />
            </main >
    )
}
