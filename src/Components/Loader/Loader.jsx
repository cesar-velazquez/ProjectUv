import React from 'react'
import './Loader.css'

const Loader = () => {
    return (
        <section className='bg-green-600 min-h-screen relative '>
            <section className='absolute left-[50%] -translate-x-1/2 -translate-y-1/2
            top-[50%]'>
                <div className=" loadership_YHEGH  ">                    
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className=''>
                    <img src="./imgs/uvlogo.jpg" alt="Logo" />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </section>
    )
}

export default Loader