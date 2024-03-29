import React from 'react';
import Head from 'next/head'

const MetaTags = () => {
    return (
        <div>
            <Head>
                <title>Definitely Demo'ing</title>
                <meta property="og:title" content="Definitely Demo'ing" />
                <meta property="og:url" content="https://defdao.xyz" />
                <meta property="og:image" content="https://defdao.xyz/def-logo.png" />   
                <link rel="shortcut icon" href="/favicon.png" />             
            </Head>
        </div>
    )
}

export default MetaTags