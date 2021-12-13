import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react"
import { Atoms } from "./../../Atoms";

export default function Navbar(props: any) {
    let location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const getLinks = () =>{
        return props.navLinks.map((link: any, index: number) => (
            <Atoms.NavLink 
                key={index}
                style={props.linkStyle} 
                name={link.name} page={link.page} 
                active={location.pathname===link.page}
            />
        ))
    }

    return (
        <nav className={`${props.style} w-full p-4`}>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center justify-between">
                <div className='flex flex-col justify-center h-full'>{props.title}</div>
                <div className='flex flex-row'>
                    {getLinks()}
                </div>
                <div className='flex flex-row'>{
                    props.userLinks.map((link: any, index: number) => {
                        if(sessionStorage.getItem('active')){
                            if(link.name === 'Logout'){
                                return <Atoms.NavLink 
                                            key={index}
                                            style={props.linkStyle} 
                                            name={link.name} 
                                            page={link.page}
                                        />     
                            }
                        }else if(link.name !== 'Logout'){
                            return <Atoms.NavLink 
                                        key={index}
                                        style={props.linkStyle} 
                                        name={link.name} 
                                        page={link.page}
                                    />     
                        }
                        return null;
                    })
                }</div>
            </div>
            {/* Mobile nav */}
            <div className="md:hidden flex items-center justify-between">
                <div className='flex flex-col justify-center h-full'>{props.title}</div>
                <Atoms.IconButton
                    // style=''
                    type='button'
                    onClick={() => setIsOpen(!isOpen)}
                    ariaControls="mobile-menu"
                    ariaExpanded={isOpen}

                >
                    <svg
                        className="block h-6 w-6"
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                    >
                        {isOpen ? (
                            <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        ):(
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        )}
                    </svg>
                </Atoms.IconButton>
            </div>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-500 transform"
                enterFrom="opacity-0 scale-0"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-500 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo='opacity-0 scale-95'
            >
                <div className="md:hidden">
                    <div className="flex ml-10 pt-2">
                        {getLinks()}
                    </div>
                </div>
            </Transition>
        </nav>
    )
}

Navbar.defaultProps = {
    style: '',
    logo: '',
    title: 'KredFeed',
    linkStyle:'',
    navLinks: [
        {
            name: 'Home-tes',
            link: '/'
        }
    ],
    userLinks: [
        {
            name: 'Login',
            link: '/login'
        },
        {
            name: 'Signup',
            link: '/signup'
        },
        {
            name: 'Logout',
            link: '/logout'
        },
    ]
}