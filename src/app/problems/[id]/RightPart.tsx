import Split from "react-split";
import { TestCasePanel } from "./TestCasePanel";
import { CodeEditor } from "./CodeEditor";
import { TestCaseData } from "./types";
import { ProgrammingLanguage } from "@/lib/editor/types";

type RightPartProps = {
    problemId: string,
    testCaseDefaultList: Array<TestCaseData>,
    programmingLanguageList: Array<ProgrammingLanguage>,
}

export function RightPart({
    problemId,
    testCaseDefaultList,
    programmingLanguageList,
}: RightPartProps
) {
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
                        <CodeEditor
                            problemId={problemId}
                            programmingLanguageList={programmingLanguageList}
                        />
                        <TestCasePanel testCaseDefaultList={testCaseDefaultList} />
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
