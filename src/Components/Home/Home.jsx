import Autors from './Autors'
import '../css/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <section className='bg-[url(imgs/leer.jpg)] bg-cover bg-center h-[300px] '>
                <section className='bg-[#005e74]/90 text-white p-4 pb-5 h-[100%] '>
                    <div className='flex justify-end '>
                        <img src="/imgs/bandera-mexico.png" alt="Bandera México" />
                        <img src="/imgs/bandera-francia.png" alt="Bandera Francia" />
                    </div>
                    <h2 className='title ' >
                        <i className='bx bx-right-arrow-alt'></i> Competencia</h2>
                    <p className=' '>
                        Reconocer la relevancia de leer y escribir como herramientas formativas para la construcción y transformación de conocimientos, así como para comunicarlos en diversos contextos.
                    </p>
                </section>
            </section>

            <section id='InfGeneral' className='bg-[url(/imgs/leer2.jpg)] bg-cover bg-center '>
                <section className='bg-[#916400]/90 text-white p-4 pb-5 '>
                    <h2 className='title py-2'>
                        <i className='bx bxs-comment-error'></i> Información general</h2>
                    <p>
                        Conocimientos previos: se requiere tener una noción básica del uso de la computadora e internet.
                        Duración del recurso: este material está previsto para realizarse en 20 horas repartidas en 4 semanas.
                        Comunidad a la que va dirigido: estudiantes de primer semestre en Educación Superior.
                        Nivel de dificultad para utilizar el recurso: básico, debido a que los conceptos no son de carácter técnico-especializado.
                    </p>
                </section>
            </section>

            <section>
                <Autors />
            </section>

            <section id='Description' className='bg-[url(/imgs/escritura.jpg)] bg-cover bg-center '>
                <section className='bg-[#005e74]/90 text-white p-4 pb-5 '>
                    <h2 className='title '><i className='bx bx-clipboard'></i>
                    Descripción</h2>
                    <p>El lenguaje es presencia permanente en las diferentes dimensiones de la vida del ser humano; a través de él se desarrolla la inteligencia y el pensamiento, se alimenta la sensibilidad, la imaginación, se refuerzan los valores adquiridos y, sobretodo, la forma de comunicarlos. Mediante el lenguaje conformamos nuestra identidad en tanto seres humanos y, por ende, nuestra relación con el mundo, lo que supone que desarrollemos y utilicemos diversas esferas: cognitivas, psicolingüísticas, socioculturales y afectivas.</p>
                    <p>El presente recurso de aprendizaje busca que los estudiantes universitarios valoren las prácticas de lectura y escritura. En primer lugar, como herramientas que les ayudarán a desempeñarse eficazmente en su trayecto formativo; pero también como vías de conocimiento que involucran valores, saberes y emociones.</p>
                    <p>Para lograr dicho objetivo se abordan temas acompañados de materiales de consulta. Al concluir el contenido se proporciona una lista de fuentes de información con el fin de promover el ejercicio de la lectura y la escritura. Al final, se incluye un ejercicio que integra aspectos de lectura y escritura para que el participante se autoevalúe.</p>
                </section>
            </section>

            <section id='Introducction' className='bg-[url(/imgs/escritura3.jpg)] bg-cover bg-center '>
                <section className='bg-[#916400]/90 text-white p-4 pb-5 '>
                    <h2 className='title '><i className='bx bxs-edit-alt'></i>
                    Introducción</h2>
                    <p>Lectura y escritura son acciones complementarias e inseparables; al hablar de una, necesariamente se hablará de la otra y viceversa. Gutiérrez (2015) menciona que debemos saber leer para saber escribir, saber escribir para saber pensar y saber pensar para poder expresarnos y vincularnos con el mundo. Si logramos unir todos estos conocimientos, podremos relacionarnos de manera adecuada con nuestro entorno.</p>
                    <p>Por lo anterior, actualmente el cómo se lee y se escribe es una de las crecientes preocupaciones en el medio latinoamericano. Esto ha ocasionado que el número de investigaciones o proyectos institucionales se dirijan hacia el fortalecimiento de la lectura y la escritura, con el fin de actualizar y perfeccionar las metodologías de enseñanza (Silva, 2012). El fin último de estos esfuerzos es que los individuos tengan una maduración en cuanto a la comprensión y creación de textos tanto cotidianos como académicos, según lo que su contexto les exija.</p>
                    <p>Por ejemplo, en Educación Superior es imprescindible que el estudiante desarrolle las competencias lectoras y escriturales, ya que así lo requiere la diversidad de trabajos que realizará. Un universitario tiene que ser un buen lector y ejercitarse en la escritura. Esto no es opcional. Tiene que ser (Garrido, 2014).</p>
                </section>
            </section>

            <section className='bg-[#0B0F2B] p-4 text-white '>
                <h2 className='title '><i className='bx bxs-book-content'></i> Contenido</h2>
                <div className='grid gap-2 justify-center items-center p-2 '>
                    <Link to={'/read'}  className='bg-[#00BCD4] rounded-xl px-4 py-1 hover:bg-black hover:text-white duration-500 transition-colors hover:scale-105 ' >Tema 1: ¿Qué es leer?</Link>
                    <Link to={'/write'} className='bg-[#00BCD4] rounded-xl px-4 py-1 hover:bg-black hover:text-white duration-500 transition-colors hover:scale-105 ' >Tema 2: ¿Qué es Escribir?</Link>
                    <Link to={'/exercise'} className='bg-[#00BCD4] rounded-xl px-4 py-1 hover:bg-black hover:text-white duration-500 transition-colors hover:scale-105 ' >Ejercicio integrador</Link>
                </div>
            </section>

            <section className='flex justify-center items-center bg-[#0B0F2B] 
            h-[100px] '>
                <button className='border border-black p-4 rounded-2xl
                animate-bounceIn hover:animate-none hover:scale-105 bg-black text-white
                text-lg hover:bg-white hover:text-black transition-all duration-700 
                flex justify-center items-center gap-4 '>
                    Descarga la información  
                <i className='bx bx-down-arrow-alt bg-red-400 hover:bg-red-700  rounded-full '></i> </button>
            </section>
        </main>
    )
}

export default Home