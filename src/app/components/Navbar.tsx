"use client";

import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const toggleNavigation = () => {
        setIsOpen(!isOpen);
        setIsHidden(!isHidden);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <header className={`${isFixed ? "navbar-fixed" : "navbar-none"}`}>
            <div className="container max-w-7xl mx-auto">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#home" className="font-bold text-lg text-primary block py-6">
                            ZHANG
                        </a>
                    </div>
                    <div className="flex items-center px-4">
                        <button
                            id="hamburger"
                            name="hamburger"
                            type="button"
                            onClick={toggleNavigation}
                            className={`block absolute right-4 lg:hidden ${isOpen ? "hamburger-active" : ""}`}
                        >
                            <span className="hamburger-line line-1 origin-top-left transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line line-2 transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line line-3 origin-bottom-left transition duration-300 ease-in-out"></span>
                        </button>
                        <nav id='nav-menu' className={`${isHidden ? "absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full" : "hidden lg:block lg:static lg:bg-transparent lg:max-w-full"}`}>
                            <ul className='block lg:flex'>
                                <li className='group'>
                                    <a href="#home" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Home</a>
                                </li>
                                <li className='group'>
                                    <a href="#about" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>About Me</a>
                                </li>
                                <li className='group'>
                                    <a href="#portfolio" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Portfolio</a>
                                </li>
                                <li className='group'>
                                    <a href="#client" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Client</a>
                                </li>
                                <li className='group'>
                                    <a href="#blog" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Blog</a>
                                </li>
                                <li className='group'>
                                    <a href="#contact" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

