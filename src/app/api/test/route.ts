// j'ai testé mon api avec cette route en json sur le navigateur

import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://trefle.io/api/v1/plants?token=vnrixh9S9eLoI82jjRKpjR5GB14W31ySQcOrsMD1JGg"

export async function GET() {
    console.log(DATA_SOURCE_URL)
    const res = await fetch(DATA_SOURCE_URL)
    

    const test = await res.json()

    return NextResponse.json(test)
}