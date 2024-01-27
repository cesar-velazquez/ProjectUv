import React from "react";
import Slider from "react-slick";

const SliderTopToBottom = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 0,
        vertical: true,
        verticalSwiping: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        beforeChange: function (prevArrow, nextSlide) {
            // console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    return (
        <section className="bg-[#005e74]/90 relative 
        h-auto w-[300px] flex flex-col rounded-lg
        items-center m-auto mt-8 px-4 p-4 my-4 ">
            <p className="text-white text-lg ">Haz clic en las flechas para leer la información.
                <i className='flex justify-center bx bxs-hand-down'></i>
            </p>
            <Slider {...settings}>
                <section className=" p-4 pb-[2rem]">
                    <div className="flex flex-col justify-center w-[100%]   ">
                        <img src="/imgs/escribirau.jpg" alt="Image" />
                        <p className="text-white py-3" >¿Qué implica escribir en la educación superior?, ¿cuáles son las diferencias entre escribir en la universidad y escribir en niveles educativos anteriores?, ¿cuánta es la importancia de aprender a escribir en el contexto de la educación superior? Plantearse estas preguntas puede ser el inicio de una mayor comprensión de la necesidad de desarrollar las competencias que permitan comprender y expresar eficazmente los saberes. Si cuestionar e inquirir son acciones fundamentales para quienes aspiran al aprendizaje significativo, saber escribir también se torna un medio para el aprendizaje. De este modo habrá un crecimiento profundo en los aspectos académicos, profesionales y personales.</p>
                    </div>
                </section>
                <section className="p-[.7rem] ">
                    <div className="flex flex-col justify-center w-[100%]   ">
                        <img src="/imgs/practiceEscriture.jpg" alt="Practice" />
                        <p className="text-white py-1 " >Cuando un estudiante llega a la Educación Superior se enfrenta a prácticas de escritura que le exigen el desarrollo de sus habilidades de comunicación escrita, pero también el entendimiento de las formas convenidas de los productos textuales. Lamentablemente, muchos siguen concibiendo la escritura como el medio para reproducir el conocimiento, no para asimilarlo, transformarlo y generarlo. Pero en la universidad, esta concepción de la escritura ―“decir” el conocimiento (Bereiter y Scardamalia, 1992)― no es la adecuada ante las tareas de producción escrita que, además, se sitúan en un marco específico de la ciencia, la técnica o el arte.</p>
                    </div>
                </section>

                <section className="p-4 pb-[8rem] ">
                    <div className="flex flex-col justify-center w-[100%]   ">
                        <img src="/imgs/escribir3.jpg" alt="Image" />
                        <p className="text-white " >
                            Escribir en la Educación Superior implica más que los conocimientos de lengua y la suficiencia léxica (competencia lingüística); requiere el aprendizaje de las prácticas discursivas y las convenciones textuales (competencia discursivo-textual), de la comprensión precisa sobre la situación comunicativa: qué, para qué y a quién se escribe (competencia sociolingüística), y de la autorregulación del proceso, arduo y complejo, de la escritura como práctica social para transformar y generar conocimientos (competencia estratégica).
                        </p>
                    </div>
                </section>

                <section className="p-4 pb-[8rem] ">
                    <div className="flex flex-col justify-center w-[100%]   ">
                        <img src="/imgs/profesionalexi.jpg" alt="Image" />
                        <p className="text-white pb-[5.8rem]" >
                        ¿Quién puede considerarse un profesional exitoso si no domina la escritura? En el mundo tecnificado en el que vivimos la escritura es mucho más que una serie de grafías. Hoy, a través de la escritura se forman seres humanos capacitados para comunicarse; como dice Garrido: la escritura es el medio más importante para explorar el corazón del hombre, proponer ideas, abrir horizontes y acrecentar la conciencia; para crear, conservar y difundir conocimientos; para construir y sostener civilizaciones.
                        </p>
                    </div>
                </section>
            </Slider>
        </section>
    );
};

// Componente para la flecha personalizada hacia arriba
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            ↑
        </div>
    );
};

// Componente para la flecha personalizada hacia abajo
const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            ↓
        </div>
    );
};

export default SliderTopToBottom;
