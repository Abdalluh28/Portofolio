'use client'


import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'
import { DownArrow } from '../DownArrow'
import { SingleProject } from './singleProject'

import imgOne from '../../imgs/anime.jpeg'
import imgTwo from '../../imgs/miniStore.png'
import imgThree from '../../imgs/XO.png'
import imgFour from '../../imgs/store.png'
import imgFive from '../../imgs/admin.png'


export default function Projects() {



    let myProjects = [
        {
            demo: 'https://animetriks.netlify.app/',
            code: 'https://github.com/Abdalluh28/AnimeTriks',
            src: imgOne
        },
        {
            demo: 'http://ministorewebsite.rf.gd/',
            code: 'https://github.com/Abdalluh28/MiniStore.git',
            src: imgTwo
        },
        {
            demo: 'https://xo-abdo.netlify.app/',
            code: 'https://github.com/Abdalluh28/XO_game',
            src: imgThree
        },
        {
            demo: 'https://electronic-store-g5lb.vercel.app/',
            code: 'https://github.com/Abdalluh28/Electronic-Store',
            src: imgFour
        },
        {
            demo: 'https://store-admin-panel-rbmq.vercel.app/',
            code: 'https://github.com/Abdalluh28/Electronic-Store-admin-panel',
            src: imgFive
        }
    ]


    return (
        <>
            <div className='container section' id='Projects'>
                <div className='row mb-5'>
                    <div className='col-2'></div>
                    <div className='col-xl-9 flex justify-center flex-col'>
                        <p className='text-4xl my-3 font-bold self-start underline underline-offset-[12px] decoration-customGreen'>Projects</p>
                        <p className='mb-2 text-xl'>Check out some of my work here</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5' >
                            {myProjects.map((item, index) => (
                                <div key={index} className=''>
                                    <SingleProject demo={item.demo} code={item.code} src={item.src.src} />
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center'>
                            <DownArrow href='#Technologies' />
                        </div>                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </>
    )
}
