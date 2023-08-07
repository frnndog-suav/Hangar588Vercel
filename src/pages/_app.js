import React from 'react'
import '../styles/GlobalTheme.css'
import PageFrame from '../components/PageFrame'

export default function MyApp({ Component, pageProps }) {
    return (
        <PageFrame>
            <Component {...pageProps} />
        </PageFrame>
    )
}
