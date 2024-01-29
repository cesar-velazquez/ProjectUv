// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SlideDraft from './SlideDraft';


const ThirdParWrite = () => {
    return (
        <main className='bg-[#0B0F2B] text-white p-4 h-auto '>
            <h1 className='title my-4 sm:text-[2rem] sm:py-4 '>
                <i className='bx bxs-copy-alt'></i>
                Características de una buena redacción</h1>

            <div className='sm:flex  '>
                <div className='sm:grid sm:m-auto
                sm:text-xl sm:text-left sm:w-[50%]  '>
                    <p >Un texto claro, sencillo y conciso será el reflejo del conocimiento del tema y del uso adecuado del idioma por parte de quien lo escribe (Salazar, 1999).</p>

                    <p className='mt-4 '>
                        Haz clic en las flechas laterales para leer la información.
                        <i className='bx bxs-hand-right'></i> </p>
                </div>

                <section className='sm:w-[50%] max-w-[600px] flex justify-center items-center m-auto h-auto bg-white/20 '>
                    <SlideDraft />
                </section>
            </div>

        </main>
    )
}

export default ThirdParWrite