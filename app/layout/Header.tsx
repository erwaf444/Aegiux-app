'use client'
import Link from 'next/link'
import React from 'react'
import {Button as AuthButton} from '../auth/Button'
import {SessionProvider} from 'next-auth/react'

type Props = {}

const Header = (props: Props) => {
  return (
    <SessionProvider>
        <div className='border-b border-white flex justify-between'>
            <Link href="/" className='text-4xl px-2 py-4 text-black'>VIKISTORY</Link>
            {/* <AuthButton/> */}
        </div>
    </SessionProvider>
  )
}

export default Header