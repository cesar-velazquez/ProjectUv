// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Autors = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <main className='bg-[#0B0F2B] text-white font-bold '>
            <h1 className='title flex items-center justify-center pt-8
            gap-2 sm:text-[2.5rem] '>
            <i className='bx bxs-user-circle'></i> Autores</h1>
            <section className=' h-[250px] sm:h-[400px] flex flex-col justify-center items-center ' >
                <article className=' w-[300px] h-[150px] sm:w-[350px] sm:h-[300px] '>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='flex justify-center items-start h-[200px] ' >
                            <div className='bg-black/20 w-[100%] sm:w-[150%] sm:h-[250px] p-2 rounded-xl items-center flex flex-col '>
                                <img className='rounded-full  ' src="/imgs/autor5.jpg" alt="Autor" />
                                <a href='#' className='items-center sm:text-2xl sm:text-center '>Judith Guadalupe Páez Paniagua</a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='flex justify-center items-start h-[200px] ' >
                            <div className='bg-black/20 w-[100%] sm:w-[150%] sm:h-[250px] p-2 rounded-xl items-center flex flex-col '>
                                <img className='rounded-full' src="/imgs/autor1.jpg" alt="Autor" />
                                <p className='items-center '>Eric Damián Espinosa Gutiérrez</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='flex justify-center items-start h-[200px] ' >
                            <div className='bg-black/20 w-[100%] sm:w-[150%] sm:h-[250px] p-2 rounded-xl items-center flex flex-col '>
                                <img className='rounded-full' src="/imgs/autor3.jpg" alt="Autor" />
                                <p className='items-center '>Gloria Leticia Chama Beristáin</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex justify-center items-start h-[200px] ' >
                            <div className='bg-black/20 w-[100%] sm:w-[150%] sm:h-[250px] p-2 rounded-xl items-center flex flex-col '>
                                <img className='rounded-full' src="/imgs/autor4.jpg" alt="Autor" />
                                <p className='items-center '>Maité María Teresa Sampieri Croda</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </article>
            </section>
        </main>
    )
}

export default Autors