"use client";

import {useEffect, useState} from "react";
import Container from "next/app"
// @ts-ignore
import Retool from 'react-retool';

export default function RetoolWrapper() {
    const [retoolEmbedUrl, setRetoolEmbedUrl] = useState("");

    useEffect(() => {
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"}, // body: JSON.stringify({userJwt, retoolAppName}),
        };
        fetch("/api", options)
            .then((res) => res.json())
            .then((data) => {
                setRetoolEmbedUrl(data["embedUrl"]);
            });
    }, []);

    return (retoolEmbedUrl && (<div style={{height: '100vh'}}>
        <Retool url={retoolEmbedUrl}/>
    </div>));

}
