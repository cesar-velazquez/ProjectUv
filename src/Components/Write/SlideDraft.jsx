// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SlideDraft = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide> */}

                <SwiperSlide className='bg-white/210 bg-white/20  flex justify-center items-center w-[300px]  h-[450px] sm:h-[450px] ' >
                    <div className=''>
                        <img className='absolute top-[10%] sm:left-[10%] left-[1%] w-[70px] aspect-square rounded-full ' src="/imgs/claridad.jpg" alt="Claridad" />
                        <img className='absolute top-[1%] left-1/2 -translate-x-1/2 h-[50px] w-[150px]' src="/imgs/cloudSF.png" alt="Nube" />

                        <h1 className='title absolute top-[3%] left-1/2 -translate-x-1/2 
                        sm:text-3xl '>Claridad</h1>
                        <p className='my-4 absolute top-[30%] left-1/2 -translate-x-1/2 w-[85%]
                        sm:text-[1.2rem] '>Debe corresponder a un lenguaje fácil, basado en palabras transparentes y frases breves. Según Zavala-Ruiz (citado en Salazar, 1999) esto quiere decir: conceptos bien digeridos y exposición limpia, con sintaxis correcta y vocabulario al alcance de la mayoría. Las ideas claras deben basarse en un orden lógico y sin palabras rebuscadas.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='bg-white/210 bg-white/20  flex justify-center items-center h-[450px] w-[300px] sm:h-[450px] ' >
                    <div className=''>
                        <img className='absolute top-[10%] sm:left-[10%] left-[1%] w-[70px] aspect-square rounded-full ' src="/imgs/claridad.jpg" alt="Claridad" />
                        <img className='absolute top-[1%] left-1/2 -translate-x-1/2 h-[50px] w-[150px]' src="/imgs/cloudSF.png" alt="Nube" />
                        <h1 className='title absolute top-[3%] left-1/2 -translate-x-1/2  
                        sm:text-3xl'>Consición</h1>
                        <p className='my-4 absolute top-[30%] left-1/2 -translate-x-1/2 w-[85%]
                        sm:text-[1.2rem] '>Consiste en decir lo más con lo menos, ahorrar palabras y evitar lo innecesario. Martín Vivaldi (citado en Salazar, 1999) anota que sólo debemos emplear aquellas palabras que sean absolutamente precisas para expresar lo que queremos decir. Lo contrario es la vaguedad, la imprecisión.</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide className='bg-white/210 bg-white/20  flex justify-center items-center h-[450px] w-[300px] sm:h-[450px] ' >
                    <div className=''>
                        <img className='absolute top-[10%] sm:left-[10%] left-[1%] w-[70px] aspect-square rounded-full ' src="/imgs/escribiendo.jpg" alt="Escribiendo" />
                        <img className='absolute top-[1%] left-1/2 -translate-x-1/2 h-[50px] w-[150px]' src="/imgs/cloudSF.png" alt="Nube" />
                        <h1 className='title absolute top-[3%] left-1/2 -translate-x-1/2  
                        sm:text-3xl'>Sencillez</h1>
                        <p className='my-4 absolute top-[30%] left-1/2 -translate-x-1/2 w-[85%]
                        sm:text-[1.2rem] '>Coonsiste en emplear palabras de uso común como tercera cualidad de la buena redacción. Para Zavala (citado en Salazar, 1999) la sencillez consiste en expresar las ideas escuetamente y sin retorcimiento, directa y precisamente; es decir con naturalidad.</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='bg-white/210 bg-white/20  flex justify-center items-center h-[450px] w-[300px] sm:h-[450px] ' >
                    <div className=''>
                        <img className='absolute top-[10%] sm:left-[10%] left-[1%] w-[70px] aspect-square rounded-full ' src="/imgs/escribiendo.jpg" alt="Escribiendo" />
                        <img className='absolute top-[1%] left-1/2 -translate-x-1/2 h-[50px] w-[150px]' src="/imgs/cloudSF.png" alt="Nube" />
                        <h1 className='title absolute top-[3%] left-1/2 -translate-x-1/2  
                        sm:text-3xl'>Sencillez</h1>
                        <p className='my-4 absolute top-[30%] left-1/2 -translate-x-1/2 w-[85%]
                        sm:text-[1.2rem] '>En torno a la claridad, la concisión y la sencillez giran otras virtudes: la densidad –que equivale en la práctica a la concisión cuando cada palabra o frase estén preñadas de sentido–, la exactitud, la precisión, la naturalidad, la originalidad y la brevedad, entre otras que Martín Vivaldi (citado en Salazar, 1999) examina con detalle. Todas ellas confluyen en un estilo claro, conciso, sencillo, denso, exacto, preciso, natural, original y breve.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SlideDraft