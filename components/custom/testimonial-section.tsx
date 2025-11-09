
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
import { CLINICA } from '@/config/clinic'

type FloatingProfile = {
    id?: string | number
    src?: string
    alt?: string
    className?: string
    width?: number
    height?: number
}

const clinic = CLINICA ?? ({} as typeof CLINICA)
const testimonials = Array.isArray(clinic.testimonios) ? clinic.testimonios : []
const testimonialdata: ITestimonialData[] = testimonials.map((testimonio, index) => ({
    id: index + 1,
    image: testimonio?.imagen ?? '/images/clinica-vitalis-paciente-satisfecho-1.webp',
    name: testimonio?.nombre ?? `Paciente ${index + 1}`,
    speciality: testimonio?.especialidad ?? '',
    message: testimonio?.mensaje ?? '',
}))
const floatingProfiles: FloatingProfile[] = Array.isArray(clinic.testimoniosPerfiles)
    ? (clinic.testimoniosPerfiles as FloatingProfile[])
    : []
const stats = Array.isArray(clinic.stats) ? clinic.stats : []
const images = clinic.imagenes ?? {}

const statsIconMap = {
    ShieldPlus,
    UserPlus2,
    BriefcaseMedical,
    Ribbon,
}

export default function TestimonialSection() {
    return (
        <div
            className="overflow-hidden bg-gray-100 bg-contain bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${images.testimoniosFondo ?? '/images/map.png'})`,
            }}
        >
            <div className="container relative mx-auto pt-12 text-center sm:max-w-4xl lg:pt-20">
                {floatingProfiles.map((profile, index) => (
                    <Image
                        key={profile?.id ?? index}
                        src={profile?.src ?? images.default ?? '/images/centro.jpg'}
                        alt={profile?.alt ?? 'Paciente satisfecho'}
                        width={profile?.width ?? 96}
                        height={profile?.height ?? 96}
                        className={`jump absolute rounded-full border-4 border-white object-cover shadow-lg ${profile?.className ?? ''}`}
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
                    {testimonialdata.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
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
                                <h3 className="text-xl/6 font-semibold text-primary">{item.name}</h3>
                                <p className="text-sm text-secondary">{item.speciality}</p>
                            </div>
                            <p className="text-base/6 text-gray lg:text-xl/8">{item.message}</p>
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
                    {stats.map((stat, index) => {
                        const Icon = statsIconMap[stat?.icon as keyof typeof statsIconMap] ?? ShieldPlus
                        return (
                            <div key={stat?.descripcion ?? index} className="space-y-1">
                                <div className="flex flex-col items-center justify-center gap-3 text-2xl font-bold sm:text-4xl">
                                    <Icon className="size-10 shrink-0 text-secondary" />
                                    <CountsUp
                                        start={0}
                                        end={
                                            typeof stat?.valor === 'number'
                                                ? stat.valor
                                                : Number(stat?.valor) || 0
                                        }
                                        duration={3}
                                        delay={0}
                                        suffix={stat?.sufijo ?? ''}
                                    />
                                </div>
                                <p className="text-center text-gray">{stat?.descripcion ?? ''}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
