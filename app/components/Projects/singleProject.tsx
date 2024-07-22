'use client'

import Link from 'next/link'
import React from 'react'
import { Image } from 'react-bootstrap'


type Propos = {
    demo: string,
    code: string,
    src: string,
}

export const SingleProject: React.FC<Propos> = ({ demo, code, src }) => {
    return (
        <div className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
            <div className='w-full mb-3'>
                <Image src={src} alt="project" className='max-w-full h-auto  rounded-lg' />
            </div>
            <div className='flex flex-wrap justify-between items-center'>
                <Link href={demo} target='_blank' className="text-white hover:scale-150 transition duration-300 text-center w-1/2 px-3 pt-2 pb-3">Demo</Link>
                <Link href={code} target='_blank' className="text-white hover:scale-150 transition duration-300 text-center w-1/2 px-3 pt-2 pb-3">Code</Link>
            </div>
        </div>
    )
}
