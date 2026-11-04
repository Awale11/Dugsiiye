//4: API User Profile

import { NextRequest, NextResponse } from "next/server"

interface UserNameProps {
    params: {
        username: string
    }
}

export async function GET (request: NextRequest, {params}: UserNameProps){
    return NextResponse.json({
        username : `${ params.username }`
    })
}