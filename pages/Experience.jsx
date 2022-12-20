import React from 'react'
import Image from 'next/image'
import { JobLevel } from '../data'
import Topexp from '../component/Topexp'

const Experience = () => {
    return (
        <div className='bg-gray-900 h-auto w-screen pt-[1em] pb-[2em] text-gray-100 ' id='joblevel'>
            <h2 className='text-center  mb-10 mt-[100px] '>Experience </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center items-center md:px-10  mb-20  gap-5 '>
                {
                    JobLevel.map((value, index) => (
                        <div className='grid grid-cols-1 items-center w-[100%] md:w-[100%] border  shadow-lg shadow-gray-900  h-auto py-10 rounded-xl duration-300 hover:border hover:border-1 hover:border-[#13a094] ease-in-out text-left pl-[15px] ' key={index}>
                            <p className='text-[12px]  font-semibold'>{ value.year }</p>
                            <h3 className='text-[23px] text-gray-200 '>{ value.title }</h3>
                            <p className='font-semibold' >{ value.role }</p>
                            <p className='px-10 ' >{ value.overview }</p>
                        </div>
                    ))
                }
            </div>
            <Topexp />
        </div>
    )
}

export default Experience