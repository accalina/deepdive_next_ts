import type { NextPage } from "next"
import Link from 'next/link'
import React from 'react'

const about: NextPage = () => {
  return (
      <>
        <div>about</div>
        <p>Hello World!</p>
        <Link href='/' passHref>
            <button>Goto index</button>
        </Link>
        <Link href='/dashboard' passHref>
            <button>Goto dashboard</button>
        </Link>
      </>
  )
}

export default about