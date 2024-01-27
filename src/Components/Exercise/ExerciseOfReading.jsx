import { Link } from "react-router-dom"


const ExerciseOfReading = () => {
    return (
        <main className="bg-[#0B0F2B]/90 p-4 text-white ">
            <h2 className="title mb-2 ">Niveles de comprension lectora</h2>
            <p>Las fábulas son composiciones literarias de carácter alegórico, escritas generalmente en verso, que mediante la personificación de seres irracionales,inanimados o abstractos, pretenden dar una enseñanza útil o moral, que a menudo aparece formulada de forma expresa en lo que se conoce como moraleja (Suárez, s/f). </p>

            <h3 className="title my-3 "><i className='bx bxs-bulb'></i> Objetivo</h3>
            <p>Identifica los diversos elementos que componen una fabula, como recurso para el fomento a la lectura y a la reflexión de la misma.</p>

            <h3 className="title my-3 " ><i className='bx bxs-book-content'></i> Descripción de la actividad</h3>
            <ol className="list-decimal pl-6 grid gap-3">
                <li>Lee  a detalle la siguiente fabula de Augusto Monterroso titulada “La parte del león”</li>
                <li>Una ves terminada tu lectura, responde adecuadamente las siguientes preguntas.</li>
            </ol>

            <section className="bg-white/20 p-4 my-3 
            flex flex-col justify-center items-center m-auto ">
                <h3 className="title my-2 " >La parte del león</h3>
                <div className="" >
                    <img className="w-[250px] h-[120px] " src="/imgs/leon1.jpg" alt="Leon" />
                </div>
                <div className="grid gap-4  ">
                <p>La vaca, la cabra y la paciente oveja se asociaron un día con el león para gozar alguna vez de una vida tranquila, pues las depredaciones del monstruo (como lo llamaban a sus espaldas) las mantenía en una atmósfera de angustia y zozobra de la que difícilmente podían escapar como no fuera por las buenas.</p>

<p>Con la conocida habilidad cinegética de los cuatro, cierta tarde cazaron un ágil ciervo (cuya carne por supuesto repugnaba a la vaca, a la cabra y a la oveja, acostumbradas como estaban a alimentarse con las hierbas que cogían) y de acuerdo con el convenio dividieron el vasto cuerpo en partes iguales.</p>

<p>Aquí, profiriendo al unísono toda clase de quejas y aduciendo su indefensión y extrema debilidad, las tres se pusieron a vociferar acaloradamente, confabuladas de antemano para quedarse también con la parte del león, pues como enseñaba la hormiga, querían guardar algo para los días duros del invierno.</p>

<p>Pero esta vez el león ni siquiera se tomó el trabajo de enumerar las sabidas razones por las cuales el ciervo le pertenecía a él solo, sino que se las comió allí mismo de una sentada, en medio de los largos gritos de ellas en que se escuchaban expresiones como Contrato social, Constitución, Derechos Humanos y otras igualmente fuertes y decisivas.</p>

<p className="text-red-600 bg-white/70" ><span className="font-extrabold " >Moraleja: </span>El abuso de poder y la falta de equidad en el reparto, cuando uno se asocia con alguien más poderoso. </p>

<p className="text-[.8rem] font-semibold ">Monterroso, A. (1986) Obras completas (y otros cuentos).  México: SEP. Pp. 79 y 80.</p>
                </div>                
            </section>
            <Link className="border px-4 py-2 w-[200px] text-center
            border-pink-500 flex justify-center gap-3
            hover:bg-pink-500 hover:text-black transition-colors duration-700
            m-auto " to={'/form'}> 
            <span><i class='bx bxs-right-arrow-circle'></i></span>Ir al Ejercicio</Link>
        </main>
    )
}

export default ExerciseOfReading