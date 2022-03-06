
import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const dashboard: NextPage = () => {
    return (
        <>
            <div>dashboard</div>
            <Link href="/" passHref={true}>
                <button>Goto Index</button>
            </Link>
            <Link href="/about" passHref>
                <button>Goto About</button>
            </Link>
        </>
    )
}

export default dashboard