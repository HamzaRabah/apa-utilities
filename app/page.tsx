"use client";

// @ts-ignore
import Retool from 'react-retool';

export default function Home() {
    const sample = {name: 'Sample data'}

    return (<div style={{height: '100vh'}}>
        <Retool
            url="https://retoolin.tryretool.com/embedded/public/f7607e1f-670a-4ebf-9a09-be54cf17181e"
            data={sample}
        />
    </div>)
}

