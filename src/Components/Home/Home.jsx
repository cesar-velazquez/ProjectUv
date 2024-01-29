import Autors from './Autors'
import '../css/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main className='pt-[75px] '>
            <section className='bg-[url(imgs/leer.jpg)] bg-cover bg-center h-[300px]  '>
                <section className='bg-green-700/80 text-white p-4 pb-5 h-[100%] '>
                    <div className='flex justify-end '>
                        <img src="/imgs/bandera-mexico.png" alt="Bandera México" />
                        <img src="/imgs/bandera-francia.png" alt="Bandera Francia" />
                    </div>
                    <h2 className='title sm:text-[2rem] ' >
                        <i className='bx bx-right-arrow-alt'></i> Competencia</h2>
                    <p className=' sm:text-xl sm:w-[600px] sm:text-left sm:pl-6 '>
                        Reconocer la relevancia de leer y escribir como herramientas formativas para la construcción y transformación de conocimientos, así como para comunicarlos en diversos contextos.
                    </p>
                </section>
            </section>

            <section className='hidden sm:block bg-white h-[100px] '>
                <ul className='flex gap-4 justify-between  h-[100%] items-center px-8 text-2xl font-bold ' >
                    <li className=''>
                        <div className=''>
                            <i className='grid justify-center text-[#00BCD4] bx bxs-comment-error'></i>
                            <a className='hover:text-[#00bcd4] ' href='#InfGeneral' >Información General</a>
                        </div>
                    </li>

                    <li className=''>
                        <div>
                            <i className='grid justify-center text-[#3b4edf] bx bx-clipboard'></i>
                            <a href='#Description' className='hover:text-[#3b4edf] ' >Descripción</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <i className='grid justify-center text-[#e93cc6] bx bxs-edit-alt'></i>
                            <a href='#Introducction' className='hover:text-[#e93cc6]'>Introducción</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <i className='grid justify-center text-[#FFC107] bx bxs-book-content'></i>
                            <a href='#content' className='hover:text-[#FFC107]'>Contenido</a>
                        </div>
                    </li>
                </ul>
            </section>

            <section id='InfGeneral' className='bg-[url(/imgs/leer2.jpg)] bg-cover bg-center '>
                <section className='bg-black/80  text-white p-4 pb-5 '>
                    <h2 className='title py-2 sm:text-[2rem]'>
                        <i className='bx bxs-comment-error'></i> Información general</h2>
                    <p className='sm:text-xl '>
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
                <section className='bg-white text-black p-4 pb-5 '>
                    <h2 className='title sm:text-[2rem] '><i className='bx bx-clipboard'></i>
                        Descripción</h2>
                    <div className='sm:grid sm:gap-4'>
                        <p className='sm:text-xl sm:pl-6 '>El lenguaje es presencia permanente en las diferentes dimensiones de la vida del ser humano; a través de él se desarrolla la inteligencia y el pensamiento, se alimenta la sensibilidad, la imaginación, se refuerzan los valores adquiridos y, sobretodo, la forma de comunicarlos. Mediante el lenguaje conformamos nuestra identidad en tanto seres humanos y, por ende, nuestra relación con el mundo, lo que supone que desarrollemos y utilicemos diversas esferas: cognitivas, psicolingüísticas, socioculturales y afectivas.</p>
                        <p className='sm:text-xl sm:pl-6 '>El presente recurso de aprendizaje busca que los estudiantes universitarios valoren las prácticas de lectura y escritura. En primer lugar, como herramientas que les ayudarán a desempeñarse eficazmente en su trayecto formativo; pero también como vías de conocimiento que involucran valores, saberes y emociones.</p>
                        <p className='sm:text-xl sm:pl-6 '>Para lograr dicho objetivo se abordan temas acompañados de materiales de consulta. Al concluir el contenido se proporciona una lista de fuentes de información con el fin de promover el ejercicio de la lectura y la escritura. Al final, se incluye un ejercicio que integra aspectos de lectura y escritura para que el participante se autoevalúe.</p>
                    </div>
                </section>
            </section>

            <section id='Introducction' className='bg-[url(/imgs/escritura3.jpg)] bg-cover bg-center '>
                <section className='bg-green-700/80 text-white p-4 pb-5 '>
                    <h2 className='title sm:text-[2rem] '><i className='bx bxs-edit-alt'></i>
                        Introducción</h2>
                    <div className='sm:grid sm:gap-4'>
                        <p className='sm:text-xl sm:pl-6 '>Lectura y escritura son acciones complementarias e inseparables; al hablar de una, necesariamente se hablará de la otra y viceversa. Gutiérrez (2015) menciona que debemos saber leer para saber escribir, saber escribir para saber pensar y saber pensar para poder expresarnos y vincularnos con el mundo. Si logramos unir todos estos conocimientos, podremos relacionarnos de manera adecuada con nuestro entorno.</p>
                        <p className='sm:text-xl sm:pl-6 '>Por lo anterior, actualmente el cómo se lee y se escribe es una de las crecientes preocupaciones en el medio latinoamericano. Esto ha ocasionado que el número de investigaciones o proyectos institucionales se dirijan hacia el fortalecimiento de la lectura y la escritura, con el fin de actualizar y perfeccionar las metodologías de enseñanza (Silva, 2012). El fin último de estos esfuerzos es que los individuos tengan una maduración en cuanto a la comprensión y creación de textos tanto cotidianos como académicos, según lo que su contexto les exija.</p>
                        <p className='sm:text-xl sm:pl-6 '>Por ejemplo, en Educación Superior es imprescindible que el estudiante desarrolle las competencias lectoras y escriturales, ya que así lo requiere la diversidad de trabajos que realizará. Un universitario tiene que ser un buen lector y ejercitarse en la escritura. Esto no es opcional. Tiene que ser (Garrido, 2014).</p>
                    </div>
                </section>
            </section>

            <section id='content' className='bg-[#151b48] p-4 text-white '>
                <h2 className='title sm:text-[2rem] '><i className='bx bxs-book-content'></i> Contenido</h2>
                <div className='flex gap-2 justify-center items-center p-2 h-auto '>
                    <Link to={'/read'} className=' w-[90px] sm:w-[180px] h-[250px] hover:scale-105 hover:bg-green-700 py-2 duration-1000 transition-colors '>
                        <img className='h-[150px] w-[100px] sm:w-[150px] m-auto ' src="/imgs/btnleer.jpg" alt="Leer" />
                        <p  className='text-sm  sm:text-lg text-center sm:w-[150px] m-auto ' >Tema 1: ¿Qué es leer?</p>
                    </Link>
                    <Link to={'/write'} className=' w-[90px] sm:w-[180px] h-[250px] hover:scale-105 hover:bg-green-700 py-2 duration-1000 transition-colors '>
                        <img className='h-[150px] w-[100px] sm:w-[150px] m-auto ' src="/imgs/btnescribir.jpg" alt="Leer" />
                        <p  className='text-sm sm:text-lg text-center  sm:w-[150px] m-auto ' >Tema 2: ¿Qué es Escribir?</p>
                    </Link>
                    <Link to={'/exercise'} className=' w-[90px] sm:w-[180px] h-[250px] hover:scale-105 hover:bg-green-700 py-2 duration-1000 transition-colors '>
                        <img className='h-[150px] w-[100px] sm:w-[150px] m-auto ' src="/imgs/btnlectura.jpg" alt="Leer" />
                        <p  className='text-sm sm:text-lg text-center  sm:w-[150px] m-auto ' >Lectura integradora</p>
                    </Link>
                </div>
            </section>

            <section className='flex justify-center items-center bg-[#151b48] 
            h-[100px] '>
                <a href='/Docs/leeryescribirparte1.pdf' target='_blank' className='border border-black p-4 rounded-2xl
                animate-bounceIn hover:animate-none hover:scale-105 bg-black text-white
                text-lg hover:bg-white hover:text-black transition-all duration-700 
                flex justify-center items-center gap-4 '>
                    Descarga la información
                    <i className='bx bx-down-arrow-alt bg-red-400 hover:bg-red-700  rounded-full '></i> </a>
            </section>
        </main>
    )
}

export default Home