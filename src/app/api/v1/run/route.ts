import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { sourceCode, inputText, timeLimit, language } = reqBody
        console.log(reqBody)

        try {
            const res: AxiosResponse = await axios.post("http://127.0.0.1:8001/api/v1/run", {
                sourceCode: sourceCode,
                inputText: inputText,
                timeLimit: timeLimit,
                language: language,
            })

            // console.log(res.data)

            return NextResponse.json({
                message: "Worked reached golang server",
                ...res.data
            }, {
                status: 200
            })

        } catch (err: any) {
            return NextResponse.json({
                error: "Could not connect to golang server",
                errorDetail: JSON.stringify(err)
            }, {
                status: 503
            })
        }

    } catch (error: any) {
        return NextResponse.json({
            error: "Error at top level",
            errorDetail: JSON.stringify(error)
        }, {
            status: 501
        })
    }
}
