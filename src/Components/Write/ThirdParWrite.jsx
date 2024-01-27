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
            <h1 className='title my-4 '>
                <i className='bx bxs-copy-alt'></i>
                Características de una buena redacción</h1>
            <p>Un texto claro, sencillo y conciso será el reflejo del conocimiento del tema y del uso adecuado del idioma por parte de quien lo escribe (Salazar, 1999).</p>

            <p className='mt-4 '>
                Haz clic en las flechas laterales para leer la información.
                <i className='bx bxs-hand-down'></i> </p>

            <section className='max-w-[600px] flex justify-center items-center m-auto h-auto bg-white/20 '>
                <SlideDraft/>                
            </section>

        </main>
    )
}

export default ThirdParWrite