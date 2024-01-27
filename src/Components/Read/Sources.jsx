import React, { useState } from 'react'

const Sources = () => {
    const [IsSourceType, setIsSourceType] = useState(1)

    const handleSource = (index) => {
        setIsSourceType(index)
    }

    return (
        <main className='p-4 bg-[#916400] '>
            <h1 className='title text-white '>Fuentes de información</h1>
            <section className='bg-black/30 '>
                <div className='flex my-2'>
                    <button onClick={() => handleSource(1)} className='w-[50%] text-center hover:font-bold hover:bg-[#FFC107] transition-colors duration-300 ' >Fuentes Básicas</button>
                    <button onClick={() => handleSource(2)} className='w-[50%] text-center hover:font-bold hover:bg-[#FFC107] transition-colors duration-300 ' >Fuentes Complementarias </button>
                </div>
            </section>
            {
                IsSourceType === 1 &&
                <main className='text-white grid gap-6 bg-[#0B0F2B] p-2 py-5 rounded-lg '>
                    <div className='flex flex-col gap-2'>
                        <p className=''>Castro, M. & Sánchez, M. (2016). Características genéricas y estrategias de lectura. Una propuesta para la comprensión de textos académicos; en Enseñar a leer y escribir en la educación superior. Propuestas educativas basadas en la investigación. Libros de acceso libre. Universidad Autónoma de Tamaulipas. Recuperado de: </p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://www.fundacion-sm.org.mx/sites/default/files/Ense%C3%B1ar%20a%20leer%20y%20escribir.pdf">Visitar</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=''>Garrido, F. (2014). El buen lector no nace, se hace. Ariel Practicum. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto   ' href="ftp://ftp.uady.mx/pub/bibliotecas/PHIP/El%20buen%20lector.pdf">Visitar</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=''>Gutiérrez, J. (2015). La importancia de escribir bien. Universidad de los Andes, Chile. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto' href="http://www.uandes.cl/noticias/la-importancia-de-escribir-bien.html">Visitar</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=''>Jiménez, J. (2015). Niveles de comprensión lectora, en Lectura, expresión oral y escrita. Colección Alta Educación. Compañía Editorial Nueva Imagen. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto ' href="https://drive.google.com/file/d/0B7mYvFS1w1x3NXFsd2xWajJhbGM/view">Visitar</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=''>Lomas, C. (2001). Leer para entender el mundo. Trabajo presentado el 25 de mayo en un Seminario Internacional sobre rendimiento escolar en lectura y matemáticas organizado por Santillana. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://www.quadernsdigitals.net/datos/hemeroteca/r_1/nr_490/a_6670/6670.html">Visitar</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=''>Margarit, A. (2008). La lectura como proceso cognitivo y comunicativo. Programa y Unidades de Redacción I. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://fcpolit.unr.edu.ar/blogs/programa/2008/03/08/la-lectura-como-proceso-cognitivo-y-comunicativo/">Visitar</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=''>Silva, M. (2014). La comprensión lectora es una habilidad para la vida. EducarChile. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto   ' href="http://www.educarchile.cl/ech/pro/app/detalle?ID=225396">Visitar</a>
                    </div>
                </main>
            }
            {
                IsSourceType === 2 &&
                <main className='text-white grid gap-6 bg-[#0B0F2B] p-2 py-5 rounded-lg '>
                    <div className='flex flex-col gap-2'>
                        <p className=''>Castro, M. coord.ª (2013). Alfabetización Académica y Comunicación de Saberes: la lectura y la escritura en la universidad. México: Universidad Autónoma de Tlaxcala, Facultad de Filosofía y Letras.</p>
                        <p>Chagoya, E. (2008). Enseñanza de la lectura y la escritura. Gestiópolis. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto   ' href="https://www.gestiopolis.com/ensenanza-de-la-lectura-y-la-escritura/">Visitar</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=''>Desarthe, A. (2014). Cómo aprendí a leer. España: Editorial Periférica.</p>
                        <p>González, F. (2015). Pensamiento crítico y argumentación: continuidades y rupturas. México: Universidad de Sonora.</p>
                        <p>Parra, E. (2013) De puño y letra (un picapiedra entre supersónicos). Luvina Revista Digital. Número 73, Invierno. Estudios Latinoamericanos. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto   ' href="https://literaturamexicanaactual.files.wordpress.com/2017/02/1-1-parra-de-puc3b1o-y-letra.pdf">Visitar</a>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className=''>Pennac, D. (2001). Como una novela. Barcelona, España: Anagrama.</p>
                        <p>Villarreal, E. (2017). Importancia de la comprensión lectora. Página web. Recuperado de:</p>
                        <a className='hover:scale-105 bg-[#f1c43f] text-black font-bold p-2 w-[50%] text-center m-auto   ' href="httpshttps://www.importancia.org/comprension-lectora.php">Visitar</a>
                    </div>                  
                </main>
            }
        </main>

    )
}

export default Sources