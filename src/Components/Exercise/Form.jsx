import { Warning } from 'postcss';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    const [revisionRealizada, setRevisionRealizada] = useState(false);
    const [mostrarError, setMostrarError] = useState(false)

    const respuestasCorrectas = {
        pregunta1: 'Querían llevar una existencia sin temor',
        pregunta2: 'Que violando el convenio el león devoró a las tres',
        pregunta3: 'Como un tirano que no respeta lo convenido',
        pregunta4: 'El abuso del poder',
        pregunta5: 'Moraleja'
    };

    const [respuestasUsuario, setRespuestasUsuario] = useState({
        pregunta1: '',
        pregunta2: '',
        pregunta3: '',
        pregunta4: '',
        pregunta5: ''
    });

    const [respuestasCorrectasEstado, setRespuestasCorrectasEstado] = useState({
        pregunta1: '',
        pregunta2: '',
        pregunta3: '',
        pregunta4: '',
        pregunta5: ''
    });

    const handleCheckboxChange = (e) => {
        if (!revisionRealizada) {
            const { name, value } = e.target;
            setRespuestasUsuario(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const revisarRespuestas = () => {
        if (Object.values(respuestasUsuario).some(respuesta => respuesta === "")) {
            setMostrarError(true)
            return;
        } else {
            setMostrarError(false)
            const nuevasRespuestasCorrectasEstado = {};
            for (const pregunta in respuestasCorrectas) {
                nuevasRespuestasCorrectasEstado[pregunta] = respuestasUsuario[pregunta] === respuestasCorrectas[pregunta] ? 'correcta' : 'incorrecta';
            }
            setRespuestasCorrectasEstado(nuevasRespuestasCorrectasEstado);
            setRevisionRealizada(true);
        }
    };

    const segundoIntento = () => {
        setRevisionRealizada(false);
        setMostrarError(false);
        setRespuestasUsuario({
            pregunta1: '',
            pregunta2: '',
            pregunta3: '',
            pregunta4: '',
            pregunta5: ''
        });
        setRespuestasCorrectasEstado({
            pregunta1: '',
            pregunta2: '',
            pregunta3: '',
            pregunta4: '',
            pregunta5: ''
        });
    }

    return (

        <main className=' bg-[#060b34] text-white'>
            <section className='sm:max-w-[600px] md:max-w-[700px] m-auto py-4 pt-8  '>

                <h5 className='sm:text-xl px-4 font-bold bg-green-700 '>Pregunta en el nivel literal (análisis). La vaca, la cabra y la oveja se asociaron con el león porque:</h5>
                <div className='flex flex-col pl-4 gap-4 bg-[#26318a] text-white py-4 '>

                    <div className="flex gap-3">
                        <input type="radio" id="opc1_p1" name="pregunta1"
                            value="Querían llevar una existencia sin temor" onChange={handleCheckboxChange} />
                        <label htmlFor="opc1_p1" className={respuestasUsuario.pregunta1 === "Querían llevar una existencia sin temor" && respuestasCorrectasEstado.pregunta1 === 'correcta' ? 'text-green-700' : ''}>Querían llevar una existencia sin temor.</label>
                    </div>

                    <div className="flex gap-3">
                        <input type="radio" id="opc2_p1" name="pregunta1"
                            value="Pensaban que las protegería de un monstruo" onChange={handleCheckboxChange} />
                        <label htmlFor="opc2_p1" className={respuestasUsuario.pregunta1 === "Pensaban que las protegería de un monstruo" && respuestasCorrectasEstado.pregunta1 === 'incorrecta' ? 'text-red-500' : ''}>Pensaban que las protegería de un monstruo.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="opc3_p1" name="pregunta1"
                            value="El león cazaría para que ellas no pasaran hambre" onChange={handleCheckboxChange} />
                        <label htmlFor="opc3_p1"
                            className={respuestasUsuario.pregunta1 === "El león cazaría para que ellas no pasaran hambre" && respuestasCorrectasEstado.pregunta1 === 'incorrecta' ? 'text-red-500' : ''}
                        >El león cazaría para que ellas no pasaran hambre.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="opc4_p1" name="pregunta1"
                            value="La unión hace la fuerza" onChange={handleCheckboxChange} />
                        <label htmlFor="opc4_p1"
                            className={respuestasUsuario.pregunta1 === "La unión hace la fuerza" && respuestasCorrectasEstado.pregunta1 === 'incorrecta' ? 'text-red-500' : ''}
                        >La unión hace la fuerza.</label>
                    </div>
                </div>


                <h5 className='sm:text-xl px-4 font-bold bg-green-700 '>
                    Pregunta en el nivel literal (síntesis). El título “La parte del león” se refiere a:
                </h5>
                <div className='flex flex-col pl-4 gap-4 bg-[#26318a] text-white py-4 '>


                    <div className='flex gap-3 '>
                        <input type="radio" id="op1_p2" name="pregunta2"
                            value="Que violando el convenio el león devoró a las tres" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta2 === "Que violando el convenio el león devoró a las tres" && respuestasCorrectasEstado.pregunta2 === 'correcta' ? 'text-green-500' : ''}
                        >Que violando el convenio el león devoró a las tres.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op2_p2" name="pregunta2"
                            value="Que el ciervo completo le correspondía al león" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta2 === "Que el ciervo completo le correspondía al león" && respuestasCorrectasEstado.pregunta2 === 'incorrecta' ? 'text-red-500' : ''}
                        >Que el ciervo completo le correspondía al león.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op3_p2" name="pregunta2"
                            value="Que el león se comió la parte de ellas y a ellas mismas" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta2 === "Que el león se comió la parte de ellas y a ellas mismas" && respuestasCorrectasEstado.pregunta2 === 'incorrecta' ? 'text-red-500' : ''}
                        >Que el león se comió la parte de ellas y a ellas mismas.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op4_p2" name="pregunta2"
                            value="Que la parte del león era insuficiente para su apetito" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta2 === "Que la parte del león era insuficiente para su apetito" && respuestasCorrectasEstado.pregunta2 === 'incorrecta' ? 'text-red-500' : ''}
                        >Que la parte del león era insuficiente para su apetito.</label>
                    </div>
                </div>


                <h5 className='sm:text-xl px-4 font-bold bg-green-700 '>Pregunta en el nivel inferencial (extrapolación). Consideras que el león actuó:</h5>
                <div className='flex flex-col pl-4 gap-4 bg-[#26318a] text-white py-4 '>


                    <div className='flex gap-3 '>
                        <input type="radio" id="op1_p3" name="pregunta3"
                            value="Como un gobernante demócrata" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta3 === "Como un gobernante demócrata" && respuestasCorrectasEstado.pregunta3 === 'incorrecta' ? 'text-red-500' : ''}
                        >Como un gobernante demócrata.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op2_p3" name="pregunta3"
                            value="Según el convenio con los otros animales" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta3 === "Según el convenio con los otros animales" && respuestasCorrectasEstado.pregunta3 === 'incorrecta' ? 'text-red-500' : ''}
                        >Según el convenio con los otros animales.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op3_p3" name="pregunta3"
                            value="Como un tirano que no respeta lo convenido" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta3 === "Como un tirano que no respeta lo convenido" && respuestasCorrectasEstado.pregunta3 === 'correcta' ? 'text-green-500' : ''}
                        >Como un tirano que no respeta lo convenido.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op4_p3" name="pregunta3"
                            value="De acuerdo con su instinto" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta3 === "De acuerdo con su instinto" && respuestasCorrectasEstado.pregunta3 === 'incorrecta' ? 'text-red-500' : ''}
                        >De acuerdo con su instinto.</label>
                    </div>
                </div>


                <h5 className='sm:text-xl px-4 font-bold bg-green-700 '>Pregunta en el nivel inferencial (inducción) ¿Cuál es el tema?</h5>
                <div className='flex flex-col pl-4 gap-4 bg-[#26318a] text-white py-4 '>


                    <div className='flex gap-3 '>
                        <input type="radio" id="op1_p4" name="pregunta4"
                            value="El abuso del poder" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta4 === "El abuso del poder" && respuestasCorrectasEstado.pregunta4 === 'correcta' ? 'text-green-500' : ''}
                        >El abuso del poder.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op2_p4" name="pregunta4"
                            value="El carnívoro siempre devorará herbívoros" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta4 === "El carnívoro siempre devorará herbívoros" && respuestasCorrectasEstado.pregunta4 === 'incorrecta' ? 'text-red-500' : ''}
                        >El carnívoro siempre devorará herbívoros.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op3_p4" name="pregunta4"
                            value="Desconfiar del enemigo" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta4 === "Desconfiar del enemigo" && respuestasCorrectasEstado.pregunta4 === 'incorrecta' ? 'text-red-500' : ''}
                        >Desconfiar del enemigo.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op4_p4" name="pregunta4"
                            value="La injusticia" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta4 === "La injusticia" && respuestasCorrectasEstado.pregunta4 === 'incorrecta' ? 'text-red-500' : ''}
                        >La injusticia.</label>
                    </div>
                </div>

                <h5 className='sm:text-xl px-4 font-bold bg-green-700 '>Pregunta en el nivel creativo. Es una enseñanza o lección que se desprende de un apólogo o de una fábula.</h5>
                <div className='flex flex-col pl-4 gap-4 bg-[#26318a] text-white py-4 '>


                    <div className='flex gap-3 '>
                        <input type="radio" id="op1_p5" name="pregunta5"
                            value="Satira" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta5 === "Satira" && respuestasCorrectasEstado.pregunta5 === 'incorrecta' ? 'text-red-500' : ''}
                        >Satira.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op2_p5" name="pregunta5"
                            value="Fabula" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta5 === "Fabula" && respuestasCorrectasEstado.pregunta5 === 'incorrecta' ? 'text-red-500' : ''}
                        >Fabula</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op3_p5" name="pregunta5"
                            value="Moraleja" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta5 === "Moraleja" && respuestasCorrectasEstado.pregunta5 === 'correcta' ? 'text-green-500' : ''}
                        >Moraleja.</label>
                    </div>

                    <div className='flex gap-3 '>
                        <input type="radio" id="op4_p5" name="pregunta5"
                            value="Cuento" onChange={handleCheckboxChange} />
                        <label htmlFor=""
                            className={respuestasUsuario.pregunta5 === "Cuento" && respuestasCorrectasEstado.pregunta5 === 'incorrecta' ? 'text-red-500' : ''}
                        >Cuento.</label>
                    </div>

                    {mostrarError && (
                        <p className="text-red-500">Por favor, responde todas las preguntas antes de continuar.</p>
                    )}

                    {
                        revisionRealizada ?
                            <input type="button"
                                onClick={segundoIntento}
                                value={'Intentar de nuevo'} />
                            :
                            <input className='border-green-700 border-2 h-[40px] w-[100px] m-auto  
                        hover:bg-green-700 transition-colors duration-700 
                        font-bold hover:border-none ' type="button" value={'Revisar'}
                                onClick={revisarRespuestas}
                            />
                    }
                </div>

                <section className="flex flex-col gap-3 justify-center items-center 
            h-auto py-4 ">

                    <Link className="border px-4 py-2 w-[250px] text-center
            border-green-700 flex justify-center gap-3
            hover:bg-green-700 hover:text-black transition-colors duration-700
            m-auto " to={'/'}>
                        <span><i className='bx bxs-left-arrow-circle'></i></span>Regresar al Inicio</Link>
                </section>
            </section>
        </main>
    )
}

export default Form