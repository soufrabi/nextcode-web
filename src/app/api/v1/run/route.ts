import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { sourceCode, inputText, timeLimit, language } = reqBody
        console.log(reqBody)

        if (typeof process.env.RCEE_SERVER_ADDRESS === undefined ||
            typeof process.env.RCEE_SERVER_ADDRESS !== 'string' ||
            process.env.RCEE_SERVER_ADDRESS === ""
        ) {
            return NextResponse.json({
                error: "Internal Server Error : 4"
            }, {
                status: 500
            })
        }


        try {
            const res: AxiosResponse = await axios.post(`${process.env.RCEE_SERVER_ADDRESS}/api/v1/run`, {
                sourceCode: sourceCode,
                inputText: inputText,
                timeLimit: timeLimit,
                language: language,
            })

            // console.log(res.data)

            return NextResponse.json({
                // Successfully parsed response sent by golang server
                message: "Success : 0",
                ...res.data
            }, {
                status: 200
            })

        } catch (err: any) {
            // console.error(err)
            return NextResponse.json({
                // Could not connect connect to the golang server
                error: "Internal Server Error : 1",
                // errorDetail: JSON.stringify(err)
            }, {
                status: 500
            })
        }

    } catch (err: any) {
        // console.error(err)
        return NextResponse.json({
            // Encountered error at the outermost level
            error: "Internal Server Error : 2",
            // errorDetail: JSON.stringify(err)
        }, {
            status: 500
        })
    }
}
