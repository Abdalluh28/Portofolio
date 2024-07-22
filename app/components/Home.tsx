'use client'

import React from 'react'
import imaOne from '../imgs/2272.jpg'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import gsap from 'gsap';

export default function HomePage() {




    let rotate = (num: Number) => {
        gsap.to('.icon', {
            rotate: num == 1 ? 90 : 0,
            duration: 0.3,
            ease: 'power1.inOut',
        })
    }


    let goToAbout = () => {
        let href = document.getElementById('About')
        if(href) {
            gsap.to(window, {
                scrollTo: {
                    y: href,
                },
                duration: 0.5,
                ease: 'power1.inOut',
            })
        }
    }


    return (
        <div id='Home' className='section'>
            <div className='flex justify-center items-center flex-col md:flex-row-reverse lg:translate-x-20 lg:mx-0 md:mx-10'>
                <div className='lg:h-1/3 lg:w-1/3 sm:h-1/2 sm:w-1/2 h-3/4 w-3/4 '>
                    <Image src={imaOne.src} alt="image" className='rounded-xl max-w-full h-auto' />
                </div>
                <div className='lg:h-2/3 lg:w-1/2 md:-translate-y-10 xl:mt-0 md:mt-20 mt-10 w-3/4 self-start lg:self-center lg:ml-0 ml-10 '>
                    <p className='font-bold lg:text-4xl text-2xl mb-3'>I&apos;m Abdalluh Khaled</p>
                    <p className='lg:text-3xl text-xl my-3 bg-customGreenTwo w-fit pl-2 pr-10'>Full Stack Developer</p>
                    <p className='text-xl mt-3 mb-10'>
                        Certified by ITI, one of the largest online professional education platforms in the Middle East, and by Benha University, where I studied as a Full Stack developer with JavaScript. Welcome to my portfolio, I&apos;m excited to share my journey with you!
                    </p>
                    <div className='flex gap-3 flex-wrap'>
                        <div onClick={goToAbout} className='cursor-pointer bg-customGreen w-fit py-3 pr-7 pl-4 text-dark text-lg font-medium rounded-lg' onMouseOver={() => rotate(1)} onMouseOut={() => rotate(0)}>
                            <span className='mr-3'>About me</span>
                            <FontAwesomeIcon icon={faChevronRight} className='icon' />
                        </div>
                        <Link href={'https://www.linkedin.com/in/abdo-khaled-34235b283/'} target='_blank' className='lg:hidden bg-customGreen w-fit py-3 px-4 text-dark text-lg font-medium rounded-lg'>
                            Linkedin
                        </Link >
                        <Link href={'https://github.com/Abdalluh28'} target='_blank' className='lg:hidden bg-customGreen w-fit py-3 px-4 text-dark text-lg font-medium rounded-lg'>
                            Github
                        </Link >
                        <Link href={'mailto:abdok7496@gmail.com'} target='_blank' className='lg:hidden bg-customGreen w-fit py-3 px-4 text-dark text-lg font-medium rounded-lg'>
                            Mail
                        </Link >
                    </div>
                </div>
            </div>

        </div>
    )
}
