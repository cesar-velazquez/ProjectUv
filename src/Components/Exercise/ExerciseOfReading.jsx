import { Link } from "react-router-dom"


const ExerciseOfReading = () => {
    return (
        <main className="bg-[#151b48]/90 p-4 text-white pt-[75px] ">
            <h2 className="title mb-2 sm:text-[2rem] ">Niveles de comprensión lectora</h2>
            <p className="sm:text-xl sm:text-left sm:pl-6 sm:py-4">Las fábulas son composiciones literarias de carácter alegórico, escritas generalmente en verso, que mediante la personificación de seres irracionales,inanimados o abstractos, pretenden dar una enseñanza útil o moral, que a menudo aparece formulada de forma expresa en lo que se conoce como moraleja (Suárez, s/f). </p>

            <h3 className="title my-3 sm:text-[2rem] "><i className='bx bxs-bulb'></i> Objetivo</h3>
            <p className="sm:text-xl sm:text-left sm:pl-6 sm:py-4">Identifica los diversos elementos que componen una fabula, como recurso para el fomento a la lectura y a la reflexión de la misma.</p>

            <h3 className="title my-3 sm:text-[2rem] " ><i className='bx bxs-book-content'></i> Descripción de la actividad</h3>
            <ol className="list-decimal pl-6 grid gap-3
            sm:text-xl sm:text-left sm:pl-6 sm:py-4">
                <li>Lee  a detalle la siguiente fabula de Augusto Monterroso titulada “La parte del león”</li>
                <li>Una ves terminada tu lectura, responde adecuadamente las siguientes preguntas.</li>
            </ol>

            <section className="bg-black/80 p-4 my-3 
            flex flex-col justify-center items-center m-auto sm:w-[850px]  ">
                <h3 className="title my-2 " >La parte del león</h3>
                <div className="" >
                    <img className="w-[250px] h-[120px] sm:w-[200px] sm:h-[150px] " src="/imgs/leon1.jpg" alt="Leon" />
                </div>
                <div className="grid gap-4  ">
                    <p className="text-xl ">La vaca, la cabra y la paciente oveja se asociaron un día con el león para gozar alguna vez de una vida tranquila, pues las depredaciones del monstruo (como lo llamaban a sus espaldas) las mantenía en una atmósfera de angustia y zozobra de la que difícilmente podían escapar como no fuera por las buenas.</p>

                    <p className="text-xl ">Con la conocida habilidad cinegética de los cuatro, cierta tarde cazaron un ágil ciervo (cuya carne por supuesto repugnaba a la vaca, a la cabra y a la oveja, acostumbradas como estaban a alimentarse con las hierbas que cogían) y de acuerdo con el convenio dividieron el vasto cuerpo en partes iguales.</p>

                    <p className="text-xl ">Aquí, profiriendo al unísono toda clase de quejas y aduciendo su indefensión y extrema debilidad, las tres se pusieron a vociferar acaloradamente, confabuladas de antemano para quedarse también con la parte del león, pues como enseñaba la hormiga, querían guardar algo para los días duros del invierno.</p>

                    <p className="text-xl ">Pero esta vez el león ni siquiera se tomó el trabajo de enumerar las sabidas razones por las cuales el ciervo le pertenecía a él solo, sino que se las comió allí mismo de una sentada, en medio de los largos gritos de ellas en que se escuchaban expresiones como Contrato social, Constitución, Derechos Humanos y otras igualmente fuertes y decisivas.</p>

                    <p className="text-red-600 bg-white/5 text-center p-2" ><span className="font-extrabold " >Moraleja: </span>El abuso de poder y la falta de equidad en el reparto, cuando uno se asocia con alguien más poderoso. </p>

                    <p className="text-[.8rem] font-semibold text-right ">Monterroso, A. (1986) Obras completas (y otros cuentos).  México: SEP. Pp. 79 y 80.</p>
                </div>
            </section>
            <section className="flex flex-col gap-3 justify-center items-center 
            h-auto py-4 ">
                <Link className=' px-3 py-2 text-white border-2 border-white hover:bg-green-700 
                transition-colors duration-700 w-[250px] text-center ' to={-1} >Regresar al tema anterior<i className='bx bx-left-arrow-alt text-white '></i></Link>

                <Link className="border px-4 py-2 w-[250px] text-center
            border-white flex justify-center gap-3
            hover:bg-green-700 transition-colors duration-700
            m-auto " to={'/form'}>
                    <span><i className='bx bxs-right-arrow-circle'></i></span>Ir al Ejercicio</Link>
            </section>
        </main>
    )
}

export default ExerciseOfReading