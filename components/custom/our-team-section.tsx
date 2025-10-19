'use client'

import Image from 'next/image'
import Link from 'next/link'
import IconInstagram from '@/components/icons/icon-instagram'
import IconTwitter from '@/components/icons/icon-twitter'
import IconFaceBook from '@/components/icons/icon-facebook'
import IconLinkedin from '@/components/icons/icon-linkedin'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { ITeamData } from '@/types/team'
import SectionHeading from '@/components/custom/section-heading'

const teamData: ITeamData[] = [
    {
        id: 1,
        image: '/images/clinica-vitalis-equipo-especialista-1.webp',
        alt: 'Fisioterapeuta de Clínica Vitalis',
        name: 'Dra. Lucia Martinez',
        speciality: 'Fisioterapeuta',
    },
    {
        id: 2,
        image: '/images/clinica-vitalis-equipo-especialista-2.webp',
        alt: 'Neurólogo de Clínica Vitalis',
        name: 'Dr. Javier Gomez',
        speciality: 'Neurólogo',
    },
    {
        id: 3,
        image: '/images/clinica-vitalis-equipo-especialista-3.webp',
        alt: 'Especialista en fisioterapia Clínica Vitalis',
        name: 'Dra. Sofia Delgado',
        speciality: 'Fisioterapeuta',
    },
    {
        id: 4,
        image: '/images/clinica-vitalis-equipo-especialista-4.webp',
        alt: 'Dermatólogo de Clínica Vitalis',
        name: 'Dr. Alvaro Sanchez',
        speciality: 'Dermatólogo',
    },
    {
        id: 5,
        image: '/images/clinica-vitalis-equipo-especialista-5.webp',
        alt: 'Cardiólogo de Clínica Vitalis',
        name: 'Dr. Carlos Herrera',
        speciality: 'Fisioterapeuta',
    },
    {
        id: 6,
        image: '/images/clinica-vitalis-equipo-especialista-6.webp',
        alt: 'Neuróloga de Clínica Vitalis',
        name: 'Dra. Elena Ruiz',
        speciality: 'Neuróloga',
    },
]
export default function OurTeamSection() {
    return (
        <div className="bg-primary py-16 lg:py-20">
            <SectionHeading
                className="container text-center text-white"
                titleClassName="text-white"
                descriptionClassName="mx-auto text-gray-light"
                tagClassName="[&_svg]:text-white bg-secondary/20"
                tag="Conoce a nuestro equipo"
                title={
                    <>
                        Un equipo comprometido de{' '}
                        <span className="font-normal italic">
                            especialistas certificados y experimentados
                        </span>
                    </>
                }
                description="Nuestros médicos aportan años de experiencia y vocación para brindarte el más alto estándar de atención sanitaria."
            />
            <Swiper
                className="team-swiper mx-4! grid! sm:mx-20!"
                modules={[Autoplay, Pagination]}
                slidesPerView="auto"
                loop={true}
                spaceBetween={16}
                centeredSlides={true}
                speed={1500}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.team-swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
            >
                {teamData?.map((teamData, index) => (
                    <SwiperSlide key={index}>
                        <div className="group relative h-[400px] overflow-hidden">
                            <span className="absolute inset-0 bg-secondary/30"></span>
                            <Image
                                src={teamData.image}
                                alt={teamData.alt}
                                width={640}
                                height={800}
                                className="h-full w-full object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-secondary/70 px-4 py-5 backdrop-blur-xs">
                                <div className="-mt-14 mb-5 flex justify-center gap-2.5 duration-300 group-hover:mt-0">
                                    <Link
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://healthcare-theme-html.vercel.app/"
                                        className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                    >
                                        <IconFaceBook className="size-5 shrink-0" />
                                        <span className="sr-only">
                                            Facebook
                                        </span>
                                    </Link>
                                    <Link
                                        href="https://twitter.com/intent/tweet?url=https://healthcare-theme-html.vercel.app/&amp;text="
                                        className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                    >
                                        <IconTwitter className="size-5 shrink-0" />
                                        <span className="sr-only">Twitter</span>
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/?url=https%3A%2F%2Fhealthcare-theme-html.vercel.app%2F"
                                        className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                    >
                                        <IconInstagram className="size-5 shrink-0" />
                                        <span className="sr-only">
                                            Instagram
                                        </span>
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://healthcare-theme-html.vercel.app/"
                                        className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                    >
                                        <IconLinkedin className="size-5 shrink-0" />
                                        <span className="sr-only">
                                            LinkedIn
                                        </span>
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link
                                        href="/doctors"
                                        className="mb-1 inline-block text-2xl font-semibold text-gray-100 transition hover:opacity-80"
                                    >
                                        {teamData.name}
                                    </Link>
                                    <p className="text-primary">
                                        {teamData.speciality}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="team-swiper-pagination mt-10 flex items-center justify-center"></div>
        </div>
    )
}
