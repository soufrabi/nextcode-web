import Split from "react-split";
import { TestCasePanel } from "./TestCasePanel";
import { CodeEditor } from "./CodeEditor";

export function RightPart() {
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
