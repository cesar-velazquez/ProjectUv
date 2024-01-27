import React from "react";
import Slider from "react-slick";
import './css/Slidertoptobottom.css'

const SliderTopToBottom = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (prevArrow, nextSlide) {
        },
        afterChange: function (currentSlide) {
        }
    };

    return (
        <main className="w-full flex flex-col justify-center m-auto sm:w-[750px] my-2 p-4 h-auto ">
            <p className="text-white text-lg ">Haz clic en las flechas para leer la información.
                <i className='flex justify-center bx bxs-hand-down'></i>
            </p>
            <Slider {...settings}>
                <div className="slide-item ">
                    <img className="m-auto h-[250px]" src="/imgs/escribirau.jpg" alt="Prueba" />                    
                    <p className=" scrollable-text m-auto rounded-b-2xl text-white p-2 bg-[#0B0F2B] h-[250px]">¿Qué implica escribir en la Educación Superior?, ¿cuáles son las diferencias entre escribir en la universidad y escribir en niveles educativos anteriores?, ¿cuánta es la importancia de aprender a escribir en el contexto de la Educación Superior? Plantearse estas preguntas puede ser el inicio de una mayor comprensión de la necesidad de desarrollar las competencias que permitan comprender y expresar eficazmente los saberes. Si cuestionar e inquirir son acciones fundamentales para quienes aspiran al aprendizaje significativo, saber escribir también se torna un medio para el aprendizaje. De este modo habrá un crecimiento profundo en los aspectos académicos, profesionales y personales.</p>
                </div>
                <div className="slide-item">
                    <img className="m-auto h-[250px]" src="/imgs/practiceEscriture.jpg" alt="Prueba" />                    
                    <p className="scrollable-text m-auto rounded-b-2xl text-white p-2 bg-[#0B0F2B] h-[250px]" >Cuando un estudiante llega a la Educación Superior se enfrenta a prácticas de escritura que le exigen el desarrollo de sus habilidades de comunicación escrita, pero también el entendimiento de las formas convenidas de los productos textuales. Lamentablemente, muchos siguen concibiendo la escritura como el medio para reproducir el conocimiento, no para asimilarlo, transformarlo y generarlo. Pero en la universidad, esta concepción de la escritura ―“decir” el conocimiento (Bereiter y Scardamalia, 1992)― no es la adecuada ante las tareas de producción escrita que, además, se sitúan en un marco específico de la ciencia, la técnica o el arte.</p>
                </div>
                <div className="slide-item">
                    <img className="m-auto h-[250px]" src="/imgs/escribir3.jpg" alt="Prueba" />                    
                    <p className=" scrollable-text m-auto rounded-b-2xl text-white p-2 bg-[#0B0F2B] h-[250px]">Escribir en la Educación Superior implica más que los conocimientos de lengua y la suficiencia léxica (competencia lingüística); requiere el aprendizaje de las prácticas discursivas y las convenciones textuales (competencia discursivo-textual), de la comprensión precisa sobre la situación comunicativa: qué, para qué y a quién se escribe (competencia sociolingüística), y de la autorregulación del proceso, arduo y complejo, de la escritura como práctica social para transformar y generar conocimientos (competencia estratégica).</p>
                </div>
                <div className="slide-item">
                    <img className="m-auto h-[250px]" src="/imgs/profesionalexi.jpg" alt="Prueba" />                    
                    <p className=" scrollable-text m-auto rounded-b-2xl text-white p-2 bg-[#0B0F2B] h-[250px]">¿Quién puede considerarse un profesional exitoso si no domina la escritura? En el mundo tecnificado en el que vivimos la escritura es mucho más que una serie de grafías. Hoy, a través de la escritura se forman seres humanos capacitados para comunicarse; como dice Garrido: la escritura es el medio más importante para explorar el corazón del hombre, proponer ideas, abrir horizontes y acrecentar la conciencia; para crear, conservar y difundir conocimientos; para construir y sostener civilizaciones.</p>
                </div>                
            </Slider>
        </main>
    );
};

export default SliderTopToBottom;
