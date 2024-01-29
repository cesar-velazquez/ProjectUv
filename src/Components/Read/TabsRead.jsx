import React, { useState } from 'react'

const TabsRead = () => {
    const [IsVisible, setIsVisible] = useState(1)

    const handleView = (index) => {
        setIsVisible(index);
    }

    return (
        <main className=''>            
            <section className='bg-black/95 text-white pb-5 '>
                <section className=' w-[100%] h-auto flex justify-center m-auto '>
                    <article className='p-4 '>        
                    <p className=' text-center sm:w-[600px] sm:m-auto sm:text-xl '><i className='bx bxs-hand-down py-6 font-bold'>
                        Haz clic en el título para desplegar la información correspondiente.</i></p>                
                        <div className='flex justify-center mb-4 py-3 w-[95%] h-[100px]
                        sm:w-[500px] sm:h-auto sm:m-auto sm:my-2  ' >
                            <button onClick={() => handleView(1)} className='hover:bg-[#005e74] px-1 font-bold transition-colors duration-500 border flex flex-col justify-center items-center
                            sm:w-[300px] sm:text-xl ' ><i className='bx bx-book-reader'></i>Lectura universitaria</button>
                            <button onClick={() => handleView(2)} className='hover:bg-[#005e74] px-1 font-bold transition-colors duration-500 border flex flex-col justify-center items-center
                            sm:w-[300px] sm:text-xl ' > <i className='bx bx-text'></i> Textos académicos</button>
                            <button onClick={() => handleView(3)} className='hover:bg-[#005e74] px-1 font-bold transition-colors duration-500 border flex flex-col justify-center items-center
                            sm:w-[300px] sm:text-xl ' > <i className=' bx bxs-component'></i> Lectura y tecnología</button>
                        </div>
                        {IsVisible === 1 && 
                        <section className='transition-all duration-700 animate-fade-up
                        bg-white/70 text-black p-2 rounded-xl sm:w-[500px] sm:m-auto sm:p-4 sm:grid sm:gap-4 sm:text-xl ' >
                            <p>En la formación universitaria el estudiante se acerca a un campo de conocimiento particular, el cual es un legado de estudios que se han desarrollado a lo largo del tiempo. Para acceder a él se necesita voluntad, conocimientos previos y responsabilidad, además es necesario poseer un buen nivel de comprensión lectora ya que la lectura es una estrategia de aprendizaje efectivo, si no se sabe leer y escribir no se puede estudiar. </p>
                            <p>La interacción exitosa con los textos especializados es condición necesaria para tener acceso al conocimiento disciplinar. En consecuencia, leer no será una actividad reproductiva; se tiene que concebir como el principal recurso para la producción sistemática de textos escritos.</p>
                        </section>}
                        {IsVisible === 2 && 
                        <section className='transition-all duration-700 animate-fade-down
                        bg-white/70 text-black p-2 rounded-xl
                        sm:w-[500px] sm:m-auto sm:p-4 sm:grid sm:gap-4 sm:text-xl ' >
                            <p className=''>En otras palabras, se debe aprender a examinar los textos académicos y especializados propios de un área disciplinar para descubrir lo siguiente:</p>
                            <ol className='pl-6 list-decimal '>
                                <li>Que los textos que pertenecen a un mismo género presentan ciertas regularidades.</li>
                                <li>Que esas regularidades se pueden observar en los procesos de producción y recepción de los textos.</li>
                                <li>Que la lectura y escritura de los géneros académicos y especializados se facilita en la medida que el lector/escritor se familiariza con esas regularidades a partir de la continua interacción y consecuente descripción del género (Castro & Sánchez, 2016).</li>
                            </ol>
                        </section>}
                        {IsVisible === 3 && 
                        <section className='transition-all duration-700 animate-fade-right 
                        sm:w-[500px] sm:m-auto sm:p-4 sm:grid sm:gap-4 sm:text-xl '  >
                            <p className='bg-white/70 text-black p-2 rounded-xl '>Hoy día el campo de la lectura se amplía con el uso de las tecnologías; por ejemplo, tenemos a nuestro alcance blogs, bibliotecas virtuales, revistas, eBooks especializados en diversas áreas del conocimiento, etcétera. Incluso las redes sociales han traído consigo un campo rico de intercambios. Tal vez hoy más que nunca tenemos acceso a la información, lo único que hace falta es convertirla en conocimiento, para ello se requiere de la lectura crítica y la comprensión, ambas se enriquecerán con el acto de escribir.</p>
                        </section>}
                    </article>
                </section>
            </section>
        </main>
    )
}

export default TabsRead