"use server"

import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";
import { getServerSession } from "next-auth";


type RunRequest = {
    languageId: number,
    sourceCode: string,
    inputText: string,
    compileTimeLimit: number,
    executionTimeLimit: number,
    bufferMaxSize: number,

}

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession()
        if (!session) {
            return NextResponse.json({
                error: "User is not authenticated"
            }, {
                status: 401
            })
        }

        const reqBody: RunRequest = await request.json()
        console.log("Request Body", reqBody)

        if (typeof process.env.API_SERVER_URL === undefined ||
            typeof process.env.API_SERVER_URL !== 'string' ||
            process.env.API_SERVER_URL === ""
        ) {
            return NextResponse.json({
                error: "Internal Server Error : 4"
            }, {
                status: 500
            })
        }


        try {
            const res: AxiosResponse = await axios.post(`${process.env.API_SERVER_URL}/editor/run`,
                reqBody,
                {
                    timeout: 7000,
                }
            )

            console.log("Response Data", res.data)

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
                // failed to connect connect to the golang server
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
