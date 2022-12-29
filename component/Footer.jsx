import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='text-center relative md:pt-10 pt-2 md:pb-10 pb-10 bg-gray-900 border-t-2 border-gray-400 text-white w-[100vw]'  >
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5 mt-10 md:justify-start ' >
                <div className=' text-gray-300 relative h-[100px] w-[100px] rounded-full flex md:justify-center md:items-center justify-center items-center m-auto md:ml-[10em]  ' >
                    <Image
                        fill
                        src="/projects/logo.jpeg"
                        className='absolute object-fill rounded-full  '
                    />
                </div>
                <div className='flex flex-col md:justify-center py-[2em] md:items-center justify-center items-center md:mr-[5em] ' >
                    <div className='flex md:gap-10 gap-7 justify-center items-center' >
                        <FaGithub size={"50px"} />
                        <FaInstagram size={"50px"} />
                        <FaLinkedin size={"50px"} />
                    </div>
                    <ul className=' grid grid-cols-3 md:hidden mt-[2em] '>
                        <Link
                            href='/#intro'
                            prefetch={false}
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
                        >
                            <li
                                className='p-4 text-small'
                            >
                                About
                            </li>
                        </Link>
                        <Link
                            href='/#skill'
                            prefetch={false}
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
                        >
                            <li
                                className='p-4 text-small'
                            >
                                Experience
                            </li>
                        </Link>
                        <Link
                            href='/Project'
                            prefetch={false}
                        >
                            <li
                                className='p-4 text-small'
                            >
                                Projects
                            </li>
                        </Link>
                        <Link
                            href='/#contact'
                            prefetch={false}
                        >
                            <li
                                className='p-4 text-small'
                            >
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <ul className=' hidden md:grid-cols-2 md:grid '>
                    <Link
                        href='/#intro'
                        prefetch={false}
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
                    >
                        <li
                            className='p-4 text-small'
                        >
                            About
                        </li>
                    </Link>
                    <Link
                        href='/#skill'
                        prefetch={false}
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
                    >
                        <li
                            className='p-4 text-small'
                        >
                            Experience
                        </li>
                    </Link>
                    <Link
                        href='/Project'
                        prefetch={false}
                    >
                        <li
                            className='p-4 text-small'
                        >
                            Projects
                        </li>
                    </Link>
                    <Link
                        href='/#contact'
                        prefetch={false}
                    >
                        <li
                            className='p-4 text-small'
                        >
                            Contact
                        </li>
                    </Link>
                </ul>
            </div>
            <div className=' font-extrabold text-white w-full absolute bottom-0  ' >Copyright © Alkiviades Savoullis</div>
        </footer>
    )
}

export default Footer
