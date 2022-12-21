import React from 'react'
import dynamic from 'next/dynamic'
import { MySkill, TSkill } from '../data'
const Image = dynamic(() => import("next/image"))

const Skills = () => {
    return (
        <div className='w-screen mb-0 bg-gray-900 pb-32 h-auto mx-auto  md:pt-[2em] lg:pt-[5em] xl:pt-[1em] md:px-6 px-7 lg:px-6 ' id='skill'>
            <div className='max-w-[1240px] mx-auto justify-center h-auto pt-32 ' >
                <p className='text-xl tracking-widest uppercase text-[#5e51e5] ' >Skills</p>
                <h3 className='my-5 text-gray-400 text-2xl ' >Technical Skills</h3>
                <div className='flex flex-col mb-[5em] '>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                        {
                            TSkill.map((value, id) => (
                                <>
                                    <div key={id} className='p-10 mb-5 md:w-[90%] border-[2px] bg-gray-400 border-gray-900 shadow-xl rounded-xl hover:scale-[1.03] ease-in duration-300  '>
                                        <div className='flex flex-row  justify-between items-center '>
                                            <div className='flex flex-col items-start justify-center w-[32vh] ml-[-30px]  ' >
                                                <h3 className='capitalize' >{value.skillName}</h3>
                                            </div>
                                            <div className='w-full bg-gray-500 rounded-full h-1.5'>
                                                <div className='bg-blue-400 text-xs font-medium text-blue-700 p-0.5 leading-none h-1.5 rounded-full  ' style={{ width: "50%" }} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                <h3 className='my-5 text-gray-400 text-2xl ' >Soft Skills</h3>
                <div className="flex flex-col mb-[5em] ">
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 '>
                        {
                            MySkill.map((value, id) => (
                                <>
                                    <div key={id} className='py-10 px-2 mb-5 md:w-[90%] border-[2px] bg-gray-400 border-gray-900 shadow-xl rounded-xl hover:scale-[1.03] ease-in duration-300 '>
                                        <div className='grid grid-cols-2 gap-6 justify-center items-center '>
                                            <div className='flex flex-col items-start justify-center w-[150%]' >
                                                <h3 className='capitalize' >{value.skillName}</h3>
                                            </div>
                                            <div className='w-full bg-gray-500  rounded-full h-1.5  '>
                                                <div className='bg-blue-400 text-xs font-medium text-blue-700 p-0.5 leading-none h-1.5 rounded-full  ' style={{ width: "90%" }} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills