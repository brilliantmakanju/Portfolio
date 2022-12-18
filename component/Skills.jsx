import React from 'react'
import dynamic from 'next/dynamic'
import { MySkill, TSkill } from '../data'
const Image = dynamic(() => import("next/image"))

const Skills = () => {
    return (
        <div className='w-full md:ml-[2em] lg:h-screen p-2 ' id='skills'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full ' >
                <p className='text-xl tracking-widest uppercase text-[#5e51e5] ' >Skills</p>
                <h3 className='my-5 text-2xl ' >Technical Skills</h3>
                <div className='flex flex-col mb-[5em] '>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                        {
                            TSkill.map((value, id) => (
                                <>
                                    <div key={id} className='p-6 md:w-[90%]  shadow-xl rounded-xl hover:scale-[1.03] ease-in duration-300  '>
                                        <div className='grid grid-cols-2 gap-6 justify-center items-start'>
                                            <div className='flex flex-col items-start justify-center' >
                                                <h3 className='capitalize' >{value.skillName}</h3>
                                            </div>
                                            <div className='w-full bg-gray-500 rounded-full h-1.5 mb-4  '>
                                                <div className='bg-blue-400 text-xs font-medium text-blue-700 p-0.5 leading-none h-1.5 rounded-full  ' style={{width:"50%"}} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
                <h3 className='my-5 text-2xl ' >Soft Skills</h3>
                <div className="flex flex-col mb-[5em] ">
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
                        {
                            MySkill.map((value, id) => (
                                <>
                                    <div key={id} className='p-6 md:w-[90%]  shadow-xl rounded-xl hover:scale-[1.03] ease-in duration-300  '>
                                        <div className='grid grid-cols-2 gap-6 justify-center items-center '>
                                            <div className='m-auto' >
                                                <Image
                                                    width={64}
                                                    height={64}
                                                    src={value.skillImg}
                                                    alt={value.skillName}
                                                />
                                            </div>
                                            <div className='flex flex-col items-center justify-center' >
                                                <h3 className='capitalize' >{value.skillName}</h3>
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