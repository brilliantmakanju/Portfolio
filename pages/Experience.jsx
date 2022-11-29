import React from 'react'
import Image from 'next/image'
import { JobLevel } from '../data'

const Experience = () => {
    return (
        <div id='joblevel'>
            <h2 className='text-center  mb-10 mt-[100px] '>Experience </h2>
            <div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center md:px-20 mb-20 ml-[1%] gap-5 '>
                {
                    JobLevel.map((value, index) => (
                        <div className='grid grid-cols-1 items-center w-[98%] md:w-[100%] border  shadow-lg shadow-gray-900  h-auto py-10 rounded-xl duration-300 hover:border hover:border-1 hover:border-[#13a094] ease-in-out text-left pl-[15px] ' key={index}>
                            <p className='text-[12px]  font-semibold'>{ value.year }</p>
                            <h3 className='text-[23px] text-slate-800 '>{ value.title }</h3>
                            <p className='font-semibold' >{ value.role }</p>
                            <p className='px-10 ' >{ value.overview }</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experience