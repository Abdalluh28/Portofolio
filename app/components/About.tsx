'use client'


import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'
import { DownArrow } from './DownArrow'

export default function About() {

    let rotate = (num: Number) => {
        gsap.to('.icon', {
            rotate: num == 1 ? 90 : 0,
            duration: 0.3,
            ease: 'power1.inOut',
        })
    }




    return (
        <>
            <div className='container section' id='About'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-xl-9 flex justify-center flex-col'>
                        <p className='text-4xl my-10 font-bold underline underline-offset-[12px] decoration-customGreen'>About me</p>
                        <p className='my-10 text-xl'>Hey! I'm based on Egypt and I'm Professional in Web Development.</p>
                        <p className='my-5 text-xl'>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web applications. I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>
                        <div className='flex justify-center self-center'>
                            <DownArrow href='#Projects' />
                        </div>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </>
    )
}
