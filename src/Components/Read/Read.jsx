import React, { useEffect, useState } from 'react'
import VideoRead from './VideoRead';
import TabsRead from './TabsRead';
import ComprehensionRead from './ComprehensionRead';
import Sources from './Sources';
import { Link } from 'react-router-dom';

const Read = ({ IsShow,
    handleShow,
    handleClose }) => {
    return (
        <main>
            <section className='bg-[url(imgs/leer.jpg)] bg-cover bg-center h-[300px] '>
                <section className='bg-[#005e74]/90 text-white p-4 pb-5 h-[100%] '>
                    <div className='flex justify-end '>
                        <img src="/imgs/bandera-mexico.png" alt="Bandera México" />
                        <img src="/imgs/bandera-francia.png" alt="Bandera Francia" />
                    </div>
                    <h2 className='title ' >
                        <i className='bx bx-right-arrow-alt'></i> ¿Qué es leer?</h2>
                    <p className=' '>
                        Propósito del tema: El estudiante valorará la lectura como medio esencial para aprender y comunicar ideas, emociones y saberes.
                    </p>
                </section>
            </section>

            <section className='bg-[url(/imgs/escritura.jpg)] bg-cover bg-center '>
                <section className='bg-[#916400]/90 text-white p-4 pb-5 '>
                    <h1 className='title'><i className='bx bx-book'> La lectura y su importancia</i></h1>
                    <article className='grid gap-4'>
                        <p>Definimos la lectura como un proceso cognitivo y comunicativo que dinamiza interacciones entre autor, lector y texto y pone en juego simultáneo actividades intelectuales, afectividad, operaciones de la memoria y tareas del pensamiento. Todos factores estratégicos para alcanzar la comprensión (Margarit, 2008), a la cual llegaremos a través del uso del lenguaje.</p>
                        <p>Felipe Garrido (2014) asegura que leer nos permite nombrar al mundo, tomar conciencia, ordenar la experiencia, relacionarnos con nosotros mismos y con los demás, a través del lenguaje comunicamos lo que pensamos, sentimos y hacemos. Como se mencionó en el párrafo anterior, no se trata sólo de leer por leer, sino para comprendernos, comprender el mundo que vivimos y poder transformarlo.</p>
                        <p>Es decir, la lectura no es solamente un conjunto de procesos cognitivos de comprensión pues más que un asunto mental, es  un proceso social, en el que toda decodificación e intento de comprensión está determinado histórica y socialmente en la interacción social. Por lo tanto, mientras más se lee, aumenta considerablemente la adquisición de contenidos y mejora el conocimiento del mundo (Silva, 2014).</p>
                        <p>En resumen, leer es observar en perspectiva fragmentos de realidad (veraz o verosímil), lo que nos obliga a confrontar, casi sin darnos cuenta, hechos, problemas, emociones recientes, etcétera. Todo esto se irá uniendo a la enciclopedia que reúne los conocimientos que adquirimos desde que nacemos. Es decir, lo leído tendrá peso en todo lo que hemos aprendido, ya sea en la educación formal o en todo el universo de experiencias a las cuales hemos atribuido significado. Leer es, entonces, una práctica sumamente rica y exigente.</p>
                    </article>
                    <section>
                        <VideoRead />
                    </section>
                </section>
            </section>

            <section className='p-4 bg-[#005e74] text-white'>
                <h1 className='title'><i className='bx bxs-book-open'></i> Comprensión lectora</h1>
                <p>El texto incluye la intención del autor, el contenido de lo dicho y la forma en que se estructura el mensaje. Leer, entender lo que se lee y escribe constituyen acciones lingüísticas, cognitivas y socioculturales cuya utilidad trasciende el ámbito escolar y académico al insertarse en los diferentes ámbitos de la vida personal y social de los seres humanos (Lomas, 2001). El objetivo de la lectura es, efectivamente, alcanzar la comprensión, entendida como un proceso creador e integrador del significado.</p>

            </section>

            <section>
                <TabsRead />
            </section>

            <section>
                <ComprehensionRead IsShow={IsShow} handleShow={handleShow} handleClose={handleClose} />
            </section>

            <section>
                <Sources/>
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
                transition-colors duration-700' to={'/write'} >Pasar al siguiente tema <i className='bx bx-right-arrow-alt text-white '></i></Link>
            </section>


        </main>
    )
}

export default Read