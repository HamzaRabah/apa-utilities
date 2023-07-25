import {NextResponse} from 'next/server'

export async function GET() {
    return NextResponse.json("This is a new API route");
}

// base URL of your Retool instance + https://
const retoolURL = "https://apaleo.retool.com";
// key you generate in Settings > API in Retool
const secret_key = process.env.RETOOL_API_KEY ?? "";
const app_uuid = "b0e9156c-2b0a-11ee-b939-7b6b556284d2";

export async function POST() {
    const headers: HeadersInit = {
        'Content-Type': 'application/json', // The RETOOL_API_KEY is the token generated in the first step
        Authorization: `Bearer ${secret_key}`
    };

    // all parameters can be found here: https://docs.retool.com/docs/retool-embed-quickstart#post-request-parameters
    const body = {
        landingPageUuid: app_uuid, // IDs of the groups you want the user to belong to - array of IDs
        groupIds: [1865667], // external identifier - typically email address
        externalIdentifier: "123", userInfo: {
            firstName: "", lastName: "", email: "hamza.rabah@apaleo.com",
        }, metadata: {
            msg: "Custom message",
        },
    };
    try {
        const res = await fetch(`${retoolURL}/api/embed-url/external-user`, {
            method: 'POST', headers: headers, body: JSON.stringify(body)
        })
        const data: any = await res.json();
        console.log("route log ===============");
        console.log({data});
        return NextResponse.json({embedUrl: data["embedUrl"] ?? "https://retoolin.tryretool.com/embedded/public/f7607e1f-670a-4ebf-9a09-be54cf17181e"});
    } catch (error) {
        console.log({error});
        return NextResponse.json({error});
    }
}