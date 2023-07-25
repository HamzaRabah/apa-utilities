import {NextResponse} from 'next/server'

export async function GET(Request) {
    return NextResponse.json("This is a new API route");
}

export async function POST() {
    const res = await fetch('https://httpdump.app/dumps/30b1fff4-70f9-434b-abea-acedb31ec63d', {
        method: 'POST', headers: {
            'Content-Type': 'application/json', 'API-Key': process.env.DATA_API_KEY,
        }, body: JSON.stringify({time: new Date().toISOString()}),
    })

    const data = await res.json()

    return NextResponse.json(data)
}