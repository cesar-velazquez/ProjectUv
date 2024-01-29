import React, { useState } from 'react'

const FiveParWrite = () => {
    const [isSource, setIsSource] = useState(0)
    const handleSourceWrite = (index) => {
        setIsSource(index)
    }

    return (
        <main className='bg-[#151b48] p-4 '>
            <h2 className='title text-white '>Fuentes de información</h2>

            <section className='bg-black/30 sm:w-[500px] md:w-[700px] sm:m-auto '>
                <div className='flex my-2 p-2 '>
                    <button onClick={() => handleSourceWrite(1)} className='sm:h-[80px] sm:border sm:text-[1.3rem] text-white font-bold text-base w-[50%] text-center hover:font-bold hover:text-black hover:bg-green-700 hover:border-2 hover:border-green-700 transition-colors duration-300 ' >Fuentes Básicas</button>
                    <button onClick={() => handleSourceWrite(2)} className='sm:h-[80px] sm:border sm:text-[1.3rem] text-white font-bold text-base w-[50%] text-center hover:font-bold hover:text-black hover:bg-green-700 hover:border-2 hover:border-green-700 transition-colors duration-300 ' >Fuentes Complementarias </button>
                </div>
            </section>
            {
                isSource === 1 ?
                    (
                        <main className='sm:w-[500px] md:w-[700px] sm:m-auto text-white grid gap-6 bg-[#0B0F2B] p-2 py-5 rounded-lg '>
                            <div className='flex flex-col gap-2'>
                                <p className='sm:text-[1.2rem] '>Castro, M. & Sánchez, M. (2016). Características genéricas y estrategias de lectura. Una propuesta para la comprensión de textos académicos; en Enseñar a leer y escribir en la educación superior. Propuestas educativas basadas en la educación. Libros digitales de acceso libre. Recuperado de:</p>
                                <a className='sm:w-[20%] hover:scale-105 bg-green-700 border-white border-2 text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://www.fundacion-sm.org.mx/sites/default/files/Ense%C3%B1ar%20a%20leer%20y%20escribir.pdf">Visitar</a>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='sm:text-[1.2rem] '>Mendoza, G. (2012). La importancia de escribir correctamente. El diario. Recuperado de:</p>
                                <a className='sm:w-[20%] hover:scale-105 bg-green-700 border-white border-2 text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://www.eldiario.ec/noticias-manabi-ecuador/216703-la-importancia-de-escribir-correctamente/">Visitar</a>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='sm:text-[1.2rem] '>Salazar, A. (1999). La redacción: concepto, características, sus fases. Universidad Autónoma Metropolitana. División de Ciencias Sociales y Humanidades. Recuperado de:</p>
                                <a className='sm:w-[20%] hover:scale-105 bg-green-700 border-white border-2 text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://www.posgrado.unam.mx/arquitectura/aspirantes/La_Redaccion.pdf">Visitar</a>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='sm:text-[1.2rem] '>Suárez, P. (s/f). La fábula. Literatura latina. Departamento de clásicas. Instituto Español Cañada Blanch. Recuperado de:</p>
                                <a className='sm:w-[20%] hover:scale-105 bg-green-700 border-white border-2 text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://es.calameo.com/read/004561956383552eb2402">Visitar</a>
                            </div>
                        </main>
                    ) :
                    (
                        <main className='sm:w-[500px] md:w-[700px] sm:m-auto text-white grid gap-6 bg-[#0B0F2B] p-2 py-5 rounded-lg '>
                            <div className='flex flex-col gap-2'>
                                <p className='sm:text-[1.2rem]' >Castro, M. coord.ª (2013). Prácticas de Escritura Académica en la Universidad: la producción del ensayo escolar. México: Universidad Autónoma de Tlaxcala, Facultad de Filosofía y Letras.</p>
                                <p className='sm:text-[1.2rem] '>Clavel, A. (2012). Faltas de lenguaje. Columnas, Domingo el Universal. Recuperado de:</p>
                                <a className='sm:w-[20%] hover:scale-105 bg-green-700 border-white border-2 text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://www.domingoeluniversal.mx/columnas/detalle/Faltas+de+lenguaje-827">Visitar</a>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='sm:text-[1.2rem]'>González, F. (2015). Pensamiento crítico y argumentación: continuidades y rupturas. Universidad de Sonora.</p>
                                <p className='sm:text-[1.2rem] '>Matute, A. (2004). Felipe Garrido: el escritor profesor. Revista de la Universidad de México. Universidad de México. Pp 94-96. Recuperado de:</p>
                                <a className='sm:w-[20%] hover:scale-105 bg-green-700 border-white border-2 text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://www.revistadelauniversidad.unam.mx/0204/pdfs/res_felipe_garrido.pdf">Visitar</a>
                            </div>

                        </main>
                    )
            }

        </main>
    )
}

export default FiveParWrite