import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='fixed bottom-0 left-0 w-full flex justify-center p-4'>
            <Link href="#" className='p1-3 pr-3'>privacy</Link>
            <Link href="#" className='p1-3 pr-3'>terms</Link>
            <Link href="#" className='p1-3 pr-3'>condition</Link>
        </div>
    )
}

export default Footer