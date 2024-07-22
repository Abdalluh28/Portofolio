'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import Link from 'next/link';

export default function SideBar() {


    useEffect(() => {

        let sections = document.querySelectorAll('.parent>a') as NodeListOf<HTMLDivElement>;

        let handleMove = (item: HTMLDivElement, num: number) => {

            gsap.to(item, {
                duration: 0.3,
                x: num == 1 ? 0 : -105,
                ease: 'power1.inOut',
                
            })
        }

        sections.forEach(item => {
            item.addEventListener('mouseover', () => { handleMove(item, 1) })
        })
        sections.forEach(item => {
            item.addEventListener('mouseout', () => { handleMove(item, 0) })
        })


    }, [])



    return (
        <div className='h-60 parent'>
            <Link target='_blank' href={'https://www.linkedin.com/in/abdo-khaled-34235b283/'} className='flex justify-center items-center -translate-x-[105px] cursor-pointer py-2 pr-4 rounded-tr-lg bg-customGreen one'>
                <p className='text-2xl w-4/5 py-2 pl-2 pr-4 text-black '>Linkedin</p>
                <FontAwesomeIcon icon={faLinkedin} className='text-black text-3xl scale-125 ' />
            </Link>
            <Link target='_blank' href={'https://github.com/Abdalluh28'} className='flex justify-center items-center -translate-x-[105px] cursor-pointer py-2 pr-4 bg-customGreen two'>
                <p className='text-2xl w-4/5 py-2 pl-2 pr-4 text-black '>GitHub</p>
                <FontAwesomeIcon icon={faGithub} className='text-black text-3xl scale-125 ' />
            </Link>
            <Link target='_blank' href={'mailto:abdok7496@gmail.com'} className='flex justify-center items-center -translate-x-[105px] cursor-pointer py-2 pr-4 bg-customGreen three'>
                <p className='text-2xl w-4/5 py-2 pl-2 pr-4 text-black '>Mail</p>
                <FontAwesomeIcon icon={faEnvelope} className='text-black text-3xl scale-125 ' />
            </Link>
        </div>
    );
}
