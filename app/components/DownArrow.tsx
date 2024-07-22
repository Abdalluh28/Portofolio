'use client'


import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {
    href: string
}

export const DownArrow: React.FC<Props> = ({ href }) => {



    useEffect(() => {
        let icon = document.querySelectorAll('.fa-chevron-down')
        gsap.to(icon, {
            y: 20,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        })


        icon.forEach(item => {
            item.addEventListener('click', () => {
                let id = item.getAttribute('id')
                if (id) {
                    gsap.to(window, {
                        duration: 0.3,
                        scrollTo: {
                            y: id,
                            offsetY: 70
                        },
                        ease: 'power1.inOut',
                    })
                }
            })
        })
    }, [])

    return (
        <>
            <FontAwesomeIcon icon={faChevronDown} id={href} className='mt-10 text-5xl hover:text-customGreen cursor-pointer' />
        </>
    )
}