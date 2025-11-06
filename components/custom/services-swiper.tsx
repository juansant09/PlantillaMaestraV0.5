'use client'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import ServiceCard from '@/components/custom/service-card'
import { serviceListings } from '@/types/service'



export default function ServicesSwiper() {
    
    return (
        <Swiper
            className="service-swiper px-1! py-2.5!"
            modules={[Autoplay, Navigation]}
            slidesPerView="auto"
            loop={true}
            spaceBetween={20}
            centeredSlides={false}
            speed={1500}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: '.service-swiper-btn-next',
                prevEl: '.service-swiper-btn-prev',
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
        >
            {serviceListings.map((service) => (
                <SwiperSlide key={service.id}>
                    <ServiceCard data={service} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}