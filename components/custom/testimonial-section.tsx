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
        image: '/images/clinica-vitalis-paciente-satisfecho-1.webp',
        name: 'Sarah Johnson',
        speciality: 'Nutricionista',
        message:
            '"¡La atención que recibí fue excepcional! El equipo es muy atento y los servicios superaron todas mis expectativas."',
    },
    {
        id: 2,
        image: '/images/clinica-vitalis-paciente-satisfecho-2.webp',
        name: 'Dr. Miguel Lopez',
        speciality: 'Cardiólogo',
        message:
            '"Su compromiso con la salud del paciente es admirable. Me sentí acompañado y valorado durante todo mi tratamiento."',
    },
    {
        id: 3,
        image: '/images/clinica-vitalis-paciente-satisfecho-3.webp',
        name: 'Emily Carter',
        speciality: 'Pediatra',
        message:
            '"Servicio increíble y un ambiente muy cordial. Se nota que realmente se preocupan por el bienestar de sus pacientes."',
    },
    {
        id: 4,
        image: '/images/clinica-vitalis-paciente-satisfecho-2.webp',
        name: 'David Thompson',
        speciality: 'Cirujano ortopédico',
        message:
            '"Atención profesional y confiable en cada paso. Recomiendo ampliamente su experiencia médica."',
    },
]
export default function TestimonialSection() {
    return (
        <div className="overflow-hidden bg-gray-100 bg-[url(/images/map.png)] bg-contain bg-center bg-no-repeat">
            <div className="container relative mx-auto pt-12 text-center sm:max-w-4xl lg:pt-20">
                <Image
                    src="/images/testimonial-img.png"
                    alt="perfiles de pacientes"
                    className="jump absolute -left-[450px] w-72 opacity-60"
                    width={288}
                    height={334}
                />
                <Image
                    src="/images/testimonial-img2.png"
                    alt="perfiles de especialistas"
                    className="jump absolute -right-[450px] w-72 opacity-60"
                    width={288}
                    height={328}
                />
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
                            Pacientes recuperados con éxito
                        </p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold sm:text-4xl">
                            <UserPlus2 className="size-10 shrink-0 text-secondary" />
                            <CountsUp
                                start={0}
                                end={240}
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
