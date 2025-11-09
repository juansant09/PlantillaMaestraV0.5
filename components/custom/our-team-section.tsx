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
import { CLINICA } from '@/config/clinic'

const teamData: ITeamData[] = CLINICA.equipo.map((profesional, index) => ({
    id: index + 1,
    image: profesional.imagen,
    alt: profesional.alt ?? `Especialista de ${CLINICA.nombre}`,
    name: profesional.nombre,
    speciality: profesional.especialidad,
}))

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
                        En {CLINICA.nombre} contamos con{' '}
                        <span className="font-normal italic">especialistas certificados y experimentados</span>
                    </>
                }
                description="Nuestros médicos aportan años de experiencia y vocación para brindarte el más alto estándar de atención sanitaria."
            />
            <Swiper
                className="team-swiper mx-4! grid! sm:mx-20!"
                modules={[Autoplay, Pagination]}
                slidesPerView="auto"
                loop
                spaceBetween={16}
                centeredSlides
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
                }}
            >
                {teamData?.map(({ id, image, alt, name, speciality }) => (
                    <SwiperSlide key={id}>
                        <div className="group relative h-[400px] overflow-hidden">
                            <span className="absolute inset-0 bg-secondary/30"></span>
                            <Image
                                src={image}
                                alt={alt}
                                width={640}
                                height={800}
                                className="h-full w-full object-cover object-center"
                            />
                            <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-secondary/70 px-4 py-5 backdrop-blur-xs">
                                <div className="-mt-14 mb-5 flex justify-center gap-2.5 duration-300 group-hover:mt-0">
                                    <Link
                                        href={CLINICA.redes.facebook}
                                        className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <IconFaceBook className="size-5 shrink-0" />
                                        <span className="sr-only">Facebook</span>
                                    </Link>
                                    <Link
                                        href={CLINICA.redes.twitter}
                                        className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <IconTwitter className="size-5 shrink-0" />
                                        <span className="sr-only">Twitter</span>
                                    </Link>
                                    <Link
                                        href={CLINICA.redes.instagram}
                                        className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <IconInstagram className="size-5 shrink-0" />
                                        <span className="sr-only">Instagram</span>
                                    </Link>
                                    <Link
                                        href={CLINICA.redes.linkedin}
                                        className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <IconLinkedin className="size-5 shrink-0" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link
                                        href="/doctors"
                                        className="mb-1 inline-block text-2xl font-semibold text-gray-100 transition hover:opacity-80"
                                    >
                                        {name}
                                    </Link>
                                    <p className="text-primary">{speciality}</p>
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
