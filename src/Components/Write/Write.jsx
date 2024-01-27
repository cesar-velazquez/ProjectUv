import React from 'react'
import FirstPartWrite from './FirstPartWrite'
import SecondPartWrite from './SecondPartWrite'
import ThirdParWrite from './ThirdParWrite'
import FourthPartWrite from './FourthPartWrite'
import FiveParWrite from './FiveParWrite'
import { Link } from 'react-router-dom'

const Write = () => {
    return (
        <main>
            <FirstPartWrite />

            <section>
                <SecondPartWrite />
            </section>

            <section>
                <ThirdParWrite />
            </section>

            <section>
                <FourthPartWrite />
            </section>

            <section>
                <FiveParWrite />
            </section>

            <section className='flex flex-col gap-3 justify-center items-center bg-[#916400] 
            h-[150px] '>
                <button className='border border-black p-4 rounded-2xl
                animate-bounceIn hover:animate-none hover:scale-105 bg-black text-white
                text-lg hover:bg-white hover:text-black transition-all duration-700 
                flex justify-center items-center gap-4 '>
                    Descarga la información
                    <i className='bx bx-down-arrow-alt bg-red-400 hover:bg-red-700  rounded-full '></i> </button>

                <Link className=' px-3 py-2 text-white border-2 border-[#00BCD4] hover:bg-[#00BCD4] hover:border-black
                transition-colors duration-700' to={'/exercise'} >Pasar al ejercicio <i className='bx bx-right-arrow-alt text-white '></i></Link>
            </section>

        </main>
    )
}

export default Write