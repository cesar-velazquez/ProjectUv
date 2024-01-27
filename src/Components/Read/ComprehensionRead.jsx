import React, { useState } from 'react'
import '../css/Home.css'
import './CSS Comprehension/comprehension.css'

const ComprehensionRead = ({ IsShow,
    handleShow,
    handleClose }) => {

    return (
        <main className='p-4 bg-[#005e74] text-white '>
            <h2 className='title '><i className='bx bx-transfer-alt'></i> Niveles de comprensión lectora</h2>
            <div className='grid gap-4 '>
                <p>Es importante destacar que los niveles de comprensión de la lectura no son independientes, sino que se superponen unos a otros, se mezclan e interactúan entre sí, de tal modo que no hay un buen entendimiento crítico sin la comprensión inferencial y ésta a su vez depende de la literal; de igual forma la comprensión crítica activa la apreciativa y la creadora.</p>
                <p>En la siguiente pirámide podrás ver las características de los diferentes niveles de la comprensión lectora. Haz clic en el título que desees revisar para desplegar su información.</p>
            </div>



            <div id='pyramid' className='w-[100%] h-[350px]  bg-gray-200 relative  ' >

                <button onClick={() => handleShow(1)} className='absolute bottom-[15.8rem] left-[50%] -translate-x-1/2 '>
                    <div className="step step1 hover:scale-110">
                        <div className=''>
                            <p className='w-[20px] aspect-square bg-black flex justify-center items-center rounded-full '>5</p>
                            <p className='bg-[#1a1e3b]/70 w-[140px]  text-sm flex flex-col justify-start items-center '>
                                Comprensión creativa</p>
                        </div>
                    </div>
                </button>
                {
                    IsShow === 1 &&
                    <main className='fixed z-10 top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/60 '>
                        <div className='bg-white w-[300px] h-auto rounded-2xl'>
                            <button onClick={handleClose} className='absolute top-0 right-0 px-3 w-8 h-8 bg-gray-300 rounded-full text-red-600 font-bold flex justify-center items-center'>X</button>
                            <h3 className='bg-[#FFC107] text-xl rounded-t-2xl p-4 title'>5.- Comprensión creativa</h3>
                            <p className='text-black text-center font-bold'>Acciones y resultados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-[lower-latin]'>
                                <li>Creación personal de textos a partir de la lectura.</li>
                                <li>Realización de acciones tendientes a modificar creativamente la realidad, motivadas por lo leído.</li>
                                <li>Realización de obras artísticas a partir de la lectura de un escrito.</li>
                            </ol>
                            <p className='text-black text-center font-bold'>Productos esperados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-disc'>
                                <li>Ensayo, artículo, creación literaria, libros científicos, filosóficos o políticos, inventos o innovaciones técnicas o artísticas, programas de desarrollo humano, proyectos de transformación social, etc.</li>
                            </ol>
                        </div>
                    </main>                
                }



                <button onClick={() => handleShow(2)} className='absolute bottom-[11.6rem] left-[50%] -translate-x-1/2 '>
                    <div className="step step2 hover:scale-105">
                        <div className=''>
                            <p className='w-[20px] aspect-square bg-black flex justify-center items-center rounded-full ' >4</p>
                            <p className='bg-[#1a1e3b]/70 w-[150px] text-[.8rem] flex justify-center '>
                                Comprensión apreciativa</p>
                        </div>
                    </div>
                </button>
                {
                    IsShow === 2 &&
                    <main className='fixed bottom-0 top-0 left-0 right-0 z-10 flex justify-center items-center bg-black/60' >
                        <div className='bg-white w-[300px] h-auto rounded-2xl '>
                            <button onClick={handleClose} className='absolute right-0 top-0 px-3 w-8 h-8 aspect-square bg-[#9c9c9c] text-red-600 font-bold rounded-full flex justify-center items-center  ' >X</button>
                            <h3 className='bg-[#00BCD4] text-xl rounded-t-2xl p-4 title '>4.- Comprensión apreciativa</h3>
                            <p className='text-black text-center font-bold '>Acciones y resultados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-[lower-latin] '>
                                <li>Respuesta emocional al texto leído.</li>
                                <li>Apreciación estética.</li>
                            </ol>
                            <p className='text-black text-center font-bold' >Productos esperados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-disc '>
                                <li>Manifestación de emociones y sentimientos: risa, ira, llanto, rebeldía, piedad, solidaridad, amor, placer, etcétera</li>
                            </ol>
                        </div>
                    </main>
                }

                <button onClick={() => handleShow(3)} className='absolute bottom-[7.4rem] left-[50%] -translate-x-1/2 '>
                    <div className="step step3 hover:scale-105">
                        <div className=''>
                            <p className='w-[20px] aspect-square bg-black flex justify-center items-center rounded-full ' >3</p>
                            <p className='bg-[#1a1e3b]/70 w-[150px] text-[.8rem] flex justify-center '>
                                Comprensión crítica</p>
                        </div>
                    </div>
                </button>

                {
                    IsShow === 3 &&
                    <main className='fixed z-10 bottom-0 top-0 left-0 right-0 flex justify-center items-center bg-black/60 ' >
                        <div className=' bg-white w-[300px] h-auto rounded-2xl '>
                            <button onClick={handleClose} className='absolute top-0 right-0 px-3 w-8 text-red-600 font-bold aspect-square bg-[#9c9c9c] rounded-full flex justify-center items-center  ' >X</button>
                            <h3 className='bg-[#005e74] text-xl rounded-t-2xl p-4 title '>3.- Comprensión crítica</h3>
                            <p className='text-black text-center font-bold '>Acciones y resultados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-[lower-latin] '>
                                <li>Dimensión de valoración o crítica del texto.</li>
                                <li>Identifica el propósito y la intencionalidad del autor.</li>
                                <li>Reconoce el grado de confiabilidad del texto.</li>
                                <li>Capta el tono del texto y el tipo de lenguaje empleado.</li>
                                <li>Juzga lo que el texto dice, cómo y por qué lo dice.</li>
                                <li>Valora lo que el autor expone en relación con otros textos sobre el mismo asunto.</li>
                                <li>Juzga la importancia del texto en relación con la época en que fue escrito y con la actualidad.</li>
                            </ol>
                            <p className='text-black text-center font-bold' >Productos esperados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-disc '>
                                <li>Comentario de texto</li>
                                <li>Reseña crítica</li>
                            </ol>
                        </div>
                    </main>
                }


                <button onClick={() => handleShow(4)} className='absolute bottom-[3.2rem] left-[50%] -translate-x-1/2 '>
                    <div className="step step4 hover:scale-105">
                        <div className=''>
                            <p className='w-[20px] aspect-square bg-black flex justify-center items-center rounded-full ' >2</p>
                            <p className='bg-[#1a1e3b]/70 w-[150px] text-[.8rem] flex justify-center '>
                                Comprensión inferencial</p>
                        </div>
                    </div>
                </button>
                {
                    IsShow === 4 &&
                    <main className='fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-10 bg-black/60 ' >
                        <div className='absolute bg-white w-[300px] h-auto rounded-2xl '>
                            <button onClick={handleClose} className='absolute top-0 right-0 px-3 w-8 text-red-600 font-bold aspect-square bg-[#9c9c9c] rounded-full flex justify-center items-center  ' >X</button>
                            <h3 className='bg-[#333554] text-xl rounded-t-2xl p-4 title '>2. Comprensión inferencial</h3>
                            <p className='text-black text-center font-bold '>Acciones y resultados:</p>
                            <ol className='text-black text-left p-4 pl-8 list-[lower-latin] '>
                                <li>Dimensión de profundidad textual: lo que el texto esconde “entre líneas”.</li>
                                <li>Interpreta lo que el autor quiso decir indirectamente, mediante palabras o expresiones connotativas.</li>
                                <li>El lector razona lo leído, lo relaciona con sus propios conocimientos o experiencia y extrae conclusiones o inferencias no dichas abiertamente en el escrito.</li>
                            </ol>
                            <p className='text-black text-center font-bold' >Productos esperados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-disc '>
                                <li>Plantea hipótesis derivadas de la lectura</li>
                                <li>Reseña de un texto</li>
                                <li>Investigación documental</li>
                                <li>Paráfrasis</li>
                            </ol>
                        </div>
                    </main>
                }

                <button onClick={() => handleShow(5)} className='absolute bottom-0 left-[50%] -translate-x-1/2 '>
                    <div className="step step5 hover:scale-105">
                        <div className=''>
                            <p className='w-[20px] aspect-square bg-black flex justify-center items-center rounded-full ' >1</p>
                            <p className='bg-[#1a1e3b]/70 w-[150px] text-[.8rem] flex justify-center '>
                                Comprensión literal</p>
                        </div>
                    </div>
                </button>
                {
                    IsShow === 5 &&
                    <main className='fixed bg-black/60 bottom-0 top-0 left-0 right-0 flex justify-center items-center ' >
                        <div className=' bg-white w-[300px] h-auto rounded-2xl '>
                            <button onClick={handleClose} className='absolute top-0  right-0 px-3 w-8 text-red-600 font-bold aspect-square bg-[#9c9c9c] rounded-full flex justify-center items-center  ' >X</button>
                            <h3 className='bg-[#0B0F2B] text-xl rounded-t-2xl p-4 title '>1. Comprensión literal</h3>
                            <p className='text-black text-center font-bold '>Acciones y resultados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-[lower-latin] '>
                                <li>Dimensión de superficie textual.</li>
                                <li>Capta lo que el autor dice directamente.</li>
                                <li>Comprende las lecturas de análisis y de síntesis.</li>
                                <li>El lector recupera información explícita: detalles, ideas principales, secuencias de causa y efecto.</li>
                            </ol>
                            <p className='text-black text-center font-bold' >Productos esperados:</p>
                            <ol className='text-black text-center p-4 pl-8 list-disc '>
                                <li>Resumen</li>
                                <li>Cuadro sinóptico</li>
                                <li>Mapa conceptual</li>
                                <li>Esquema</li>
                                <li>Fichas de trabajo</li>
                            </ol>
                        </div>
                    </main>
                }
            </div>

            <section className='pt-5'>
                <p>En resumen, al leer se trata de aprender el significado (lo que se dice) y el sentido (lo que quiere decir y por qué lo dice) del texto para conformar nuestro criterio, y con ello participar conscientemente en la solución de problemas reales. La lectura, entonces, deja de ser un acto decodificador simple para convertirse en un trabajo activo de construcción de significados a partir de los signos plasmados en el texto (Jiménez, 2015).</p>
            </section>
        </main>
    )
}

export default ComprehensionRead