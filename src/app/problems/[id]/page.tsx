"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Split from "react-split";
import { Media } from "../../components/media"
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from "./NavBar";
import { TestCasePanel } from "./TestCasePanel";
import { CodeEditor } from "./CodeEditor";
import { LeftPart } from "./LeftPart";


function RightPart() {
    // const handleDrag = (sizes:number[])=>{
    //     console.log(sizes)
    // }
    return (
        <>
            {
                <div className="h-[calc(100vh-4rem)]">
                    <Split
                        sizes={[60, 40]}
                        minSize={[50, 35]}
                        expandToMin={false}
                        gutterSize={10}
                        gutterAlign="center"
                        snapOffset={30}
                        dragInterval={1}
                        direction="vertical"
                        cursor="col-resize"
                        className="split-vertical w-full h-full "
                    // onDrag={handleDrag}
                    >
                        <CodeEditor />
                        <TestCasePanel />
                    </Split>
                </div >
            }
            {
                // <div className={`w-full md:flex md:flex-col hidden p-1 mr-1 max-h-screen`}>
                // <CodeEditor />
                // <TestCasePanel />
                // </div>
            }
        </>
    )
}


export default function ProblemPage() {
    React.useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])

    return (
            <main className="bg-slate-200 h-screen w-screen max-h-screen max-w-screen">
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
                            <RightPart />
                        </Split>
                    </Media>
                </div>
                <ToastContainer />
            </main >
    )
}
