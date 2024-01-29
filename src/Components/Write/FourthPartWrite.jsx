import SliderTopToBottom from "./SliderTopToBottom"

const FourthPartWrite = () => {
    return (
        <main className="bg-white p-4 text-black ">
            <h1 className="title sm:text-[2rem] sm:py-4 ">
                <i className='bx bx-edit'></i>
                Escribir en el ámbito universitario</h1>

            <div className="sm:flex ">
                <div className="sm:w-[50%] sm:grid sm:items-center ">
                    <p className=" sm:p-2 sm:text-[1.3rem] sm:text-left ">En el contexto universitario, leer y escribir son prácticas generalmente asociadas con la construcción y divulgación de saberes. Es claro que no se trata de actividades mecánicas que puedan aprenderse de la noche a la mañana (Castro & Sánchez, 2013). Por lo anterior, la enseñanza de la escritura continúa hasta la educación superior, pues la finalidad es que se escriba correctamente, se aprenda a organizar ideas y expresarlas de modo claro (Mendoza, 2012).</p>
                </div>

                <section className="sm:w-[50%] ">
                    <SliderTopToBottom />
                </section>
            </div>

        </main>
    )
}

export default FourthPartWrite