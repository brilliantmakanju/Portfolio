import React from 'react'

const Footer = () => {
    return (
        <footer className='text-center px-5 py-20 bg-gray-900 text-white w-[100vw]'  >
            <div className=' w-full flex flex-col justify-center items-center  ' >
                <input type="email" name="email" className=' rounded-md md:w-[40%] font-bold w-[100%] h-[3em] text-black px-3 ' required />
                <button className='w-full md:w-[40%] mt-[5px] font-bold h-[3em] rounded-md bg-gray-900 border-[#000000c5] border-2 shadow-none mb-[20px] ' >Join Newsletter</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14 mt-12 ' >
                <div className=' mt-[30px] flex md:justify-start md:items-center justify-center items-center md:ml-[5em] ' >
                    <h2>
                        Alkis Savoullis
                    </h2>
                </div>
                <div className='flex flex-col md:justify-end md:items-end justify-center items-center md:mr-[5em] ' >
                    <div className='flex gap-3 justify-center items-center' >
                        <h2>S</h2>
                        <h2>T</h2>
                        <h2>F</h2>
                        <h2>E</h2>
                        <h2>L</h2>
                        <h2>G</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer