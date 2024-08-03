import { ReactNode, useEffect } from "react";


export function DocumentBodyOverflow({
    children
}: {
    children: ReactNode
}): JSX.Element {

    useEffect(() => {
        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = "visible"
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
