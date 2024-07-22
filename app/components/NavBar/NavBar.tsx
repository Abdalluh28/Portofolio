'use client'

import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';


function NavBar({ onToggle }: { onToggle: (isCollapsed: boolean) => void }) {


    gsap.registerPlugin(ScrollToPlugin);

    let [isCollapsed, setIsCollapsed] = useState(false)


    let handleToggle = () => {
        setIsCollapsed(!isCollapsed)
        onToggle(!isCollapsed)
    }

    let handleColor = (e: React.MouseEvent<HTMLElement>) => {
        let target = e.target as HTMLElement
        target.classList.remove('text-white')
        target.classList.add('text-black')
    }

    let returnColor = (e: React.MouseEvent<HTMLElement>) => {
        let target = e.target as HTMLElement
        target.classList.remove('text-black')
        target.classList.add('text-white')
    }



    useEffect(() => {
        let links = document.querySelectorAll('.link')

        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                let href = link.getAttribute('href');
                if (href) {
                    gsap.to(window, {
                        duration: 0.3,
                        scrollTo: {
                            y: href,
                            offsetY: 70,
                        },
                        ease: 'power1.inOut',
                    })
                }
            })
        })
    }, [])


    return (
        <Navbar expand="xl" className="text-xl ml-10 mb-5 bg-backGroundColor" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='text-2xl text-white pointer-events-none'>{'{}'} Abdalluh Khaled</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-color' onClick={handleToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='link text-white p-3 mx-3 my-2 hover:bg-customGreen transition hover:scale-105 duration-500 rounded-lg ' onMouseOver={handleColor} onMouseOut={returnColor} href="#Home">Home</Nav.Link>
                        <Nav.Link className='link text-white p-3 mx-3 my-2 hover:bg-customGreen transition hover:scale-105 duration-500 rounded-lg ' onMouseOver={handleColor} onMouseOut={returnColor} href="#About">About</Nav.Link>
                        <Nav.Link className='link text-white p-3 mx-3 my-2 hover:bg-customGreen transition hover:scale-105 duration-500 rounded-lg ' onMouseOver={handleColor} onMouseOut={returnColor} href="#Projects">Projects</Nav.Link>
                        <Nav.Link className='link text-white p-3 mx-3 my-2 hover:bg-customGreen transition hover:scale-105 duration-500 rounded-lg ' onMouseOver={handleColor} onMouseOut={returnColor} href="#Technologies">Technologies</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;