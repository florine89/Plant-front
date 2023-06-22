// j'ai testé mon api avec cette route en json sur le navigateur

import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const baseUrl = 'https://trefle.io/api/v1/plants/search?token=';

export async function GET(request : NextRequest) {
    // const res = await fetch(baseUrl)
    const res = await fetch(`${baseUrl}${process.env.TOKEN}&q=${value}&limit=1`, { cache: "no-cache" }); // , next: { revalidate: 1 }

    const test = await res.json()

    const path = request.nextUrl.searchParams.get('path') || '/';

    revalidatePath(path);

    return NextResponse.json(test)
}