import React from 'react'
import SliderWriter from './SliderWriter'

const FirstPartWrite = () => {
    return (
        <main className=''>
            <section className='relative h-[300px] z-10'>
                <SliderWriter />
                <section className='absolute left-0 right-0 bg-green-700/80 text-white p-4 pb-5 h-[100%] '>
                    <div className='flex justify-end '>
                        <img src="/imgs/bandera-mexico.png" alt="Bandera México" />
                        <img src="/imgs/bandera-francia.png" alt="Bandera Francia" />
                    </div>

                    <h1 className='title sm:text-[2rem] '>
                        <i className='bx bxs-edit-alt'></i>
                        ¿Qué es escribir?</h1>
                    <p className='sm:text-xl sm:w-[600px] sm:text-left
                sm:pl-6 sm:py-2' >Propósito del tema: El estudiante valorará la escritura
                        como una herramienta de comunicación de las ideas, emociones y saberes.</p>
                </section>
            </section>
        </main>
    )
}

export default FirstPartWrite