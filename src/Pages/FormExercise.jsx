import React from 'react'

const FormExercise = () => {
    return (
        <main className=''>
            <h5 className='px-4 font-bold bg-[#FFC107] '>Pregunta en el nivel literal (análisis). La vaca, la cabra y la oveja se asociaron con el león porque:</h5>
            <div className='flex flex-col pl-4 gap-4 bg-[#0B0F2B] text-white py-4 '>


                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Querían llevar una existencia sin temor.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Pensaban que las protegería de un monstruo.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">El león cazaría para que ellas no pasaran hambre.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">La unión hace la fuerza.</label>
                </div>
            </div>

            <h5 className='px-4 font-bold bg-[#FFC107] '>
                Pregunta en el nivel literal (síntesis). El título “La parte del león” se refiere a:
            </h5>
            <div className='flex flex-col pl-4 gap-4 bg-[#0B0F2B] text-white py-4 '>


                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Que violando el convenio el león devoró a las tres.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Que el ciervo completo le correspondía al león.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Que el león se comió la parte de ellas y a ellas mismas.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Que la parte del león era insuficiente para su apetito.</label>
                </div>
            </div>


            <h5 className='px-4 font-bold bg-[#FFC107] '>Pregunta en el nivel inferencial (extrapolación). Consideras que el león actuó:</h5>
            <div className='flex flex-col pl-4 gap-4 bg-[#0B0F2B] text-white py-4 '>


                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Como un gobernante demócrata.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Según el convenio con los otros animales.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Como un tirano que no respeta lo convenido.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">De acuerdo con su instinto.</label>
                </div>
            </div>


            <h5 className='px-4 font-bold bg-[#FFC107] '>Pregunta en el nivel inferencial (inducción) ¿Cuál es el tema?</h5>
            <div className='flex flex-col pl-4 gap-4 bg-[#0B0F2B] text-white py-4 '>


                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">El abuso del poder.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">El carnívoro siempre devorará herbívoros.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Desconfiar del enemigo.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">La injusticia.</label>
                </div>
            </div>

            <h5 className='px-4 font-bold bg-[#FFC107] '>Pregunta en el nivel creativo. Es una enseñanza o lección que se desprende de un apólogo o de una fábula.</h5>
            <div className='flex flex-col pl-4 gap-4 bg-[#0B0F2B] text-white py-4 '>


                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Satira.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Fabula</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Moraleja.</label>
                </div>

                <div className='flex gap-3 '>
                    <input type="checkbox" />
                    <label htmlFor="">Cuento.</label>
                </div>
            </div>


        </main>
    )
}

export default FormExercise