'use client'

import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { ITestimonialData } from '@/types/team'
import {
    ArrowLeft,
    ArrowRight,
    BriefcaseMedical,
    Ribbon,
    ShieldPlus,
    UserPlus2,
} from 'lucide-react'
import CountsUp from '@/components/custom/counts-up'

const testimonialdata: ITestimonialData[] = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=256&q=80',
        name: 'Sarah Johnson',
        speciality: 'Nutricionista',
        message:
            '"¡La atención que recibí fue excepcional! El equipo es muy atento y los servicios superaron todas mis expectativas."',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
        name: 'Dr. Miguel Lopez',
        speciality: 'Cardiólogo',
        message:
            '"Su compromiso con la salud del paciente es admirable. Me sentí acompañado y valorado durante todo mi tratamiento."',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&q=80',
        name: 'Emily Carter',
        speciality: 'Pediatra',
        message:
            '"Servicio increíble y un ambiente muy cordial. Se nota que realmente se preocupan por el bienestar de sus pacientes."',
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=256&q=80',
        name: 'David Thompson',
        speciality: 'Cirujano ortopédico',
        message:
            '"Atención profesional y confiable en cada paso. Recomiendo ampliamente su experiencia médica."',
    },
]

const floatingProfiles = [
    {
        id: 'profile-1',
        src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80',
        alt: 'Retrato de paciente sonriendo',
        width: 112,
        height: 112,
        className:
            'left-0 top-6 w-20 h-20 sm:-left-28 sm:top-2 sm:w-24 sm:h-24 opacity-80',
    },
    {
        id: 'profile-2',
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
        alt: 'Paciente relajada durante su consulta',
        width: 104,
        height: 104,
        className:
            'right-0 top-12 w-16 h-16 sm:-right-28 sm:top-8 sm:w-20 sm:h-20 opacity-75',
    },
    {
        id: 'profile-3',
        src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
        alt: 'Especialista del equipo Ecofet sonriendo',
        width: 120,
        height: 120,
        className:
            'left-2 bottom-2 w-20 h-20 sm:-left-24 sm:bottom-8 sm:w-24 sm:h-24 opacity-80',
    },
    {
        id: 'profile-4',
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        alt: 'Paciente recuperado disfrutando del resultado',
        width: 120,
        height: 120,
        className:
            'right-6 bottom-0 w-20 h-20 sm:-right-24 sm:bottom-10 sm:w-24 sm:h-24 opacity-80',
    },
    {
        id: 'profile-5',
        src: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=200&q=80',
        alt: 'Paciente feliz tras su tratamiento estético',
        width: 96,
        height: 96,
        className:
            'left-1/2 top-0 hidden -translate-x-1/2 md:block w-16 h-16 sm:-top-10 sm:w-20 sm:h-20 opacity-70',
    },
]
export default function TestimonialSection() {
    return (
        <div className="overflow-hidden bg-gray-100 bg-[url(/images/map.png)] bg-contain bg-center bg-no-repeat">
            <div className="container relative mx-auto pt-12 text-center sm:max-w-4xl lg:pt-20">
                {floatingProfiles.map((profile) => (
                    <Image
                        key={profile.id}
                        src={profile.src}
                        alt={profile.alt}
                        width={profile.width}
                        height={profile.height}
                        className={`jump absolute rounded-full border-4 border-white object-cover shadow-lg ${profile.className}`}
                    />
                ))}
                <Swiper
                    className="swiper testimonials-swiper"
                    modules={[Autoplay, Navigation, Pagination]}
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
                        el: '.testimonials-swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.testimonials-btn-next',
                        prevEl: '.testimonials-btn-prev',
                    }}
                >
                    {testimonialdata?.map((item, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="mx-auto mb-5 size-32 overflow-hidden rounded-full">
                                <Image
                                    src={item.image}
                                    width={128}
                                    height={128}
                                    alt={`Retrato de ${item.name}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="mb-7 space-y-1 lg:mb-10">
                                <h3 className="text-xl/6 font-semibold text-primary">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-secondary">
                                    {item.speciality}
                                </p>
                            </div>
                            <p className="text-base/6 text-gray lg:text-xl/8">
                                {item.message}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="testimonials-swiper-pagination mb-10 mt-6 flex items-center justify-center" />
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="testimonials-btn-prev group grid size-14 place-content-center rounded-tl-xl bg-gray-light text-primary transition hover:bg-primary hover:text-white"
                    >
                        <ArrowLeft className="size-5 shrink-0" />
                    </button>

                    <button
                        type="button"
                        className="testimonials-btn-next lg group grid size-14 place-content-center rounded-tr-xl bg-gray-light text-primary transition hover:bg-primary hover:text-white"
                    >
                        <ArrowRight className="size-5 shrink-0" />
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="rounded-full bg-gray-light p-px"></div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-7 py-14 md:grid-cols-4 lg:py-20">
                    <div className="space-y-1">
                        <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold sm:text-4xl">
                            <ShieldPlus className="size-10 shrink-0 text-secondary" />
                            <CountsUp
                                start={500}
                                end={1200}
                                duration={3}
                                suffix="+"
                                delay={0}
                            />
                        </div>
                        <p className="text-center text-gray">
                            Pacientes tratados con éxito
                        </p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold sm:text-4xl">
                            <UserPlus2 className="size-10 shrink-0 text-secondary" />
                            <CountsUp
                                start={0}
                                end={8}
                                duration={3}
                                delay={0}
                                suffix="+"
                            />
                        </div>
                        <p className="text-center text-gray">
                            Profesionales de la salud
                        </p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold sm:text-4xl">
                            <Ribbon className="size-10 shrink-0 text-secondary" />
                            <CountsUp
                                start={0}
                                end={870}
                                duration={3}
                                delay={0}
                                suffix="+"
                            />
                        </div>
                        <p className="text-center text-gray">
                            Casos oncológicos
                        </p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold sm:text-4xl">
                            <BriefcaseMedical className="size-10 shrink-0 text-secondary" />
                            <CountsUp
                                start={0}
                                end={20}
                                duration={2}
                                delay={0}
                                suffix="+"
                            />
                        </div>
                        <p className="text-center text-gray">
                            Años de experiencia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
