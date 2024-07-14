import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay'


export default function Banner() {
    return (
        <div className="hero bg-gradient-to-r to-[#2DBB81] from-[#015560] container mx-auto rounded-3xl py-20 mt-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-[500px] lg:block hidden'>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 2000 }}








                    >
                        <SwiperSlide><div className='flex items-center justify-center'><img src='/media/bannerimg.png' className='lg:h-[20rem] h-[10rem]' alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='flex items-center justify-center'><img src='/media/AuthorIcon.png' className='lg:h-[20rem] h-[10rem]' alt="" /></div></SwiperSlide>
                        <SwiperSlide><div className='flex items-center justify-center'><img src='/media/bannerimg.png' className='lg:h-[20rem] h-[10rem]' alt="" /></div></SwiperSlide>

                    </Swiper>

                </div>

                <div className="flex flex-col justify-center lg:items-start items-center gap-12 lg:text-left text-center">
                    <h1 className="text-6xl font-bold w-2/3 text-[#FFC702]">Books to freshen up your bookshelf</h1>

                    <a href="/listed-books/read"><button className="bg-[#23BE0A] text-white text-xl font-bold p-7 rounded-lg w-48">View The List</button></a>
                </div>
            </div>
        </div >
    )
}