import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SliderWriter = () => {
    return (
        <section className=''>
            <article className='absolute right-0 hidden sm:block z-0
        w-[100%] bg-red-600 '>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className=' '>
                        <img className='w-[100%] h-[300px] bg-cover bg-center   ' src="/imgs/write1.jpg" alt="Escribiendo 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[100%] h-[300px]  bg-center bg-contain  ' src="/imgs/write2.jpg" alt="Escribiendo 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[100%] h-[300px]  bg-cover bg-center ' src="/imgs/write3.jpg" alt="Escribir 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-[100%] h-[300px]  bg-cover bg-center ' src="/imgs/write4.jpg" alt="Escribir 3" />
                    </SwiperSlide>

                </Swiper>
            </article>
        </section>
    )
}

export default SliderWriter