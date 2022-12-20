// import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsPersonFill } from 'react-icons/bs'
import React, { useState, useEffect } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'

// const Link = dynamic(() => import("next/link"))
// const Image = dynamic(() => import("next/image"))

const Nav = () => {

    const router = useRouter()

    const [mobile, setMobile] = useState(false)


    const handleMobile = () => {
        setMobile(!mobile)
    }

    const [fixed, setFixed] = useState(false)

    const FixedChange = () => {
        if (window.scrollY >= 100) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", FixedChange)
    }, [])

    return (
        <nav className={` ${router.pathname === '/Experience' ? 'fixed top-0  ' : ''}  ease-in duration-100 transition-colors ${fixed ? "fixed w-full h-20 shadow-md z-[100]  bg-gray-900 shadow-gray-900  border-b-2 border-[black]" : " fixed w-full h-20 z-[100] "} `}>
            <div className='flex text-white justify-between items-center w-full h-full pl-[15px] px-2 2xl:px-16 '>
                <h2  >
                    Alkis Savoullis
                </h2>
                <div>
                    <ul className={` ${fixed ? " hidden md:flex text-white" : " hidden md:flex"}`}>
                        <Link
                            href='/#intro'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                Home
                            </li>
                        </Link>
                        <Link
                            href='/#about'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                About
                            </li>
                        </Link>
                        <Link
                            href='/#skill'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                Skills
                            </li>
                        </Link>
                        <Link
                            href='/Experience'
                            prefetch={false}
                            onClick={(() => setMobile(false))}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                Experience
                            </li>
                        </Link>
                        <Link
                            href='/#contact'
                            prefetch={false}
                        >
                            <li
                                className='ml-10 text-small uppercase hover-border-b'
                            >
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className={`text-white  md:hidden`} onClick={() => handleMobile()}>
                    <AiOutlineMenu size={35} />
                </div>
            </div>

            <div className={` ${mobile ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-[#141313b2] ' : '  '}  `}>
                <div className={mobile ? 'fixed  left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-500  ' : ' fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-300 text-gray-200 '}>
                    <div className='ml-[-20px] text-gray-200  ' >
                        <div className='flex w-full justify-end'>
                            <div onClick={() => handleMobile()} className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 '>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-full h-full mt-[20px] ' >
                            <h2>
                                Alkis Savoullis
                            </h2>
                        </div>
                        <div className='border-b border-gray-300 py-4'>
                            <p className='w-[85%] md:w-[50%] py-4 '>Let's Build the future together</p>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link
                                    href='/#intro'
                                    prefetch={false}
                                    onClick={(() => setMobile(false))}
                                >
                                    <li
                                        className='p-4 text-small'
                                    >
                                        Home
                                    </li>
                                </Link>
                                <Link
                                    href='/#about'
                                    prefetch={false}
                                    onClick={(() => setMobile(false))}
                                >
                                    <li
                                        className='p-4 text-small'
                                    >
                                        About
                                    </li>
                                </Link>
                                <Link
                                    href='/#skills'
                                    prefetch={false}
                                    onClick={(() => setMobile(false))}
                                >
                                    <li
                                        className='p-4 text-small'
                                    >
                                        Skills
                                    </li>
                                </Link>
                                <Link
                                    href='/Experience'
                                    prefetch={false}
                                    onClick={(() => setMobile(false))}
                                >
                                    <li
                                        className='p-4 text-small'
                                    >
                                        Experience
                                    </li>
                                </Link>
                                <Link
                                    href='/#contact'
                                    prefetch={false}
                                    onClick={(() => setMobile(false))}
                                >
                                    <li
                                        className='p-4 text-small'
                                    >
                                        Contact
                                    </li>
                                </Link>
                            </ul>

                            <div className='pt-40'>
                                <p className='uppercase tracking-widest text-[gray] '>Let's Connect</p>
                                <div className='flex items-center justify-between py-4 w-full sm:w-[100%] '>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <BsPersonFill />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav