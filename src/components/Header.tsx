import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='flex gap-20 p-8 bg-green-200'>
            <Link href="\">homepage</Link>
            <Link href="\about">about page</Link>
            <Link href="\adress">adress page</Link>
        </div>
    )
}

export default Header