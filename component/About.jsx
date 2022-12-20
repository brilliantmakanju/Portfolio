import React from 'react'
import dynamic from 'next/dynamic'
import { AboutMe } from '../data'
import Link from 'next/link'
const Image = dynamic(() => import("next/image"))

const About = () => {
    return (
        <div className='w-screen bg-gray-700 py-[13em] px-5 mx-auto h-auto flex items-center  ' id='about'>
            <div className='max-w-[1240px]  mx-auto md:grid md:grid-cols-3 gaps-8 xl:gap-[100px] '>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5e51e5] '>About</p>
                    <h2 className='text-gray-900' >Who I Am</h2>
                    {
                        AboutMe.map((value, id) => (
                            <>
                                <p key={id} className='py-2 text-gray-200'>{value.overview}</p>

                            </>
                        ))
                    }
                    <Link href="Experience" >
                        <p className='py-2 text-gray-300 underline cursor-pointer ' >Check out some of my Job Experience.</p>
                    </Link>
                </div>
                <div className='w-[90%] relative h-[50vh] m-auto mt-5 shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center  p-4 hover:scale-[1.03] ease-in duration-300 '>
                    {
                        AboutMe.map((value, id) => (
                            <>
                                <Image
                                    fill
                                    key={id}
                                    src='/assets/bus1.jpg'
                                    className='rounded-xl absolute object-fill'
                                    alt={'Alkis Savoullis'}
                                />

                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About