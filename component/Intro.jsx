import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { BriefIntro } from '../data'
import { BsPersonFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

const Image = dynamic(() => import("next/image"))

const Intro = () => {
    return (
        <div className='w-screen h-screen mx-auto bg-gray-900 text-center md:mb-0 ' id='intro'>
            <div className='max-w-[1240px] w-full h-screen mx-auto p-2 flex flex-col justify-center items-center '>

                <div className='sm:mt-[0] mt-[100px]'>
                    {
                        BriefIntro.map((Value) => (
                            <>
                                <div className='relative bg-gray-300 shadow-lg shadow-gray-800 rounded-[5px] rounded-bl-[70px] rounded-br-[150px] rounded-tl-[100px] mx-auto w-[20rem] h-[20rem] hover:scale-[1.1] duration-300 md:mt-9 mt-0 overflow-hidden hover:border-[5px] ' style={{ borderRadius: " 55% 45% 70% 30% / 44% 80% 20% 56%  " }} >
                                    <Image src="/projects/Alkis.png" fill className='absolute  object-cover ' />
                                </div>

                                {/* <p className='uppercase text-sm tracking-widest text-gray-500 ' >{Value.quote}</p> */}
                                <h1 className='py-1  text-gray-700'><span className='text-[#5651e5] '>
                                    {Value.name}</span></h1>
                                <p className=' md:w-[70%] md:px-[auto] pl-[20px] mx-[auto] text-gray-200'>{Value.role}</p>
                                <div className='flex items-center justify-between max-w-[330px] m-auto py-4 ' >
                                    <div className='rounded-full shadow-lg bg-gray-300 text-blue-800 shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg bg-gray-300 shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg bg-gray-300 text-blue-500 shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaTwitter />
                                    </div>
                                    <div className='rounded-full shadow-lg bg-gray-300 text-[red] shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaYoutube />
                                    </div>
                                </div>

                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Intro


// {/* <div className='w-full flex md:flex-row flex-col items-center justify-center  h-[80vh] top-[100vh] '>
//     <Image
//         src='/assets/people01.png'
//         alt='Alkis Savuollis'
//         width={250}
//         height={250}
//     />
// </div> */}