

export function InputBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-0 h-full flex flex-col">
            <div className="pl-2 pb-1">
                <span
                    className="text-xs font-mono"
                >Input</span>
            </div>
            <textarea
                className="flex-1 w-full bg-slate-50/10 p-3 text-sm font-mono rounded-none outline-none resize-none focus:border-blue-400 focus:border-2 "
                readOnly={false}
                value={props.value}
                onChange={handleChange}
                spellCheck={false}
                maxLength={1_000}
            // placeholder="stdin"
            />
        </div>
    )
}

export function OutputBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-0 h-full flex flex-col">
            <div className="pl-2 pb-1">
                <span
                    className="text-xs font-mono"
                >Output</span>
            </div>
            <textarea
                className="flex-1 w-full bg-slate-50/10 p-3 text-sm font-mono rounded-none outline-none resize-none"
                readOnly={true}
                value={props.value}
                onChange={handleChange}
                spellCheck={false}
            // placeholder="stdout"
            />
        </div>
    )
}

export function ErrorBox(props: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {

    const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.setValue(ev.target.value)
    }
    return (
        <div className="p-0 h-full">
            <textarea
                className="w-full h-full bg-slate-50/10 p-3 text-sm font-mono rounded-none outline-none resize-none"
                readOnly={true}
                value={props.value}
                onChange={handleChange}
                spellCheck={false}
                placeholder="Error Messages will show up here"
            />
        </div>
    )
}

