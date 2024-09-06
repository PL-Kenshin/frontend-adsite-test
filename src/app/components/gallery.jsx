"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Gallery = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-blue-600 text-lg font-semibold">Prezentacja firmy</h2>
                <h1 className="text-4xl font-bold text-gray-900 mt-2 uppercase">Zobacz naszą galerię zdjęć</h1>
                <div className="flex mt-4 space-x-4">
                    <a href="#" className="text-blue-600 font-semibold underline hover:no-underline">Samochody osobowe</a>
                    <a href="#" className="text-gray-600">Samochody dostawcze</a>
                </div>
            </div>
            <div className="container mx-auto px-4 select-none">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView:1,
                        },
                        576: {
                            slidesPerView:3,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-20"
                >
                    <SwiperSlide><img src="/car1.png" alt="Samochód 1" className="object-cover"/></SwiperSlide>
                    <SwiperSlide><img src="/car2.png" alt="Samochód 2" className="object-cover"/></SwiperSlide>
                    <SwiperSlide><img src="/car3.png" alt="Samochód 3" className="object-cover"/></SwiperSlide>
                    <SwiperSlide><img src="/car1.png" alt="Samochód 1" className="object-cover"/></SwiperSlide>
                    <SwiperSlide><img src="/car2.png" alt="Samochód 2" className="object-cover"/></SwiperSlide>
                    <SwiperSlide><img src="/car3.png" alt="Samochód 3" className="object-cover"/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Gallery;