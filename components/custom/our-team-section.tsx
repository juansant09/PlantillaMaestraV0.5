"use client"

import Image from "next/image"
import Link from "next/link"
import IconInstagram from "@/components/icons/icon-instagram"
import IconTwitter from "@/components/icons/icon-twitter"
import IconFaceBook from "@/components/icons/icon-facebook"
import IconLinkedin from "@/components/icons/icon-linkedin"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { ITeamData } from "@/types/team"
import SectionHeading from "@/components/custom/section-heading"

const teamData: ITeamData[] = [
    {
        id: 1,
        image: "/images/clinica-vitalis-equipo-especialista-1.webp",
        alt: "Dra. Valentina Ríos sonriendo en consulta",
        name: "Dra. Valentina Ríos",
        speciality: "Medicina estética facial",
        description:
            "Diseña planes de armonización facial con biotecnología y resultados naturales.",
    },
    {
        id: 2,
        image: "/images/clinica-vitalis-equipo-especialista-2.webp",
        alt: "Dr. Martín Aguilar revisando un expediente clínico",
        name: "Dr. Martín Aguilar",
        speciality: "Dermatología láser",
        description:
            "Experto en láser fraccionado para tratar manchas, cicatrices y textura cutánea.",
    },
    {
        id: 3,
        image: "/images/clinica-vitalis-equipo-especialista-3.webp",
        alt: "Dra. Renata Solís asesorando a una paciente",
        name: "Dra. Renata Solís",
        speciality: "Nutrición estética",
        description:
            "Integra planes nutricionales premium y suplementación de precisión para potenciar resultados.",
    },
    {
        id: 4,
        image: "/images/clinica-vitalis-equipo-especialista-4.webp",
        alt: "Dra. Camila Duarte en el área de tratamientos regenerativos",
        name: "Dra. Camila Duarte",
        speciality: "Medicina regenerativa",
        description:
            "Emplea terapias celulares y colágeno inteligente para estimular la reparación tisular.",
    },
    {
        id: 5,
        image: "/images/clinica-vitalis-equipo-especialista-5.webp",
        alt: "Dr. Sebastián Vega atendiendo en consulta",
        name: "Dr. Sebastián Vega",
        speciality: "Lifting no quirúrgico",
        description:
            "Aplica hilos tensores, ultrasonido focalizado y radiofrecuencia para redefinir contornos.",
    },
    {
        id: 6,
        image: "/images/clinica-vitalis-equipo-especialista-6.webp",
        alt: "Dra. Elisa Navarro preparando cuidados postoperatorios",
        name: "Dra. Elisa Navarro",
        speciality: "Cuidados postoperatorios",
        description:
            "Coordina protocolos postoperatorios con fisioterapia estética y drenaje linfático.",
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
                        Un equipo comprometido de{" "}
                        <span className="font-normal italic">
                            especialistas certificados y experimentados
                        </span>
                    </>
                }
                description="Nuestros médicos aportan años de experiencia y vocación para brindarte el más alto estándar de atención sanitaria."
            />
            <Swiper
                className="team-swiper mx-auto max-w-6xl px-4 sm:px-12"
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                spaceBetween={24}
                centeredSlides
                speed={1500}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".team-swiper-pagination",
                    type: "bullets",
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 32,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 36,
                    },
                }}
            >
                {teamData?.map(
                    ({ id, image, alt, name, speciality, description }) => (
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
                                <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-secondary/70 px-4 py-6 backdrop-blur-xs">
                                    <div className="-mt-14 mb-5 flex justify-center gap-2.5 duration-300 group-hover:mt-0">
                                        <Link
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://healthcare-theme-html.vercel.app/"
                                            className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
                                        >
                                            <IconFaceBook className="size-5 shrink-0" />
                                            <span className="sr-only">Facebook</span>
                                        </Link>
                                        <Link
                                            href="https://twitter.com/intent/tweet?url=https://healthcare-theme-html.vercel.app/&text="
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
                                            <span className="sr-only">Instagram</span>
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com/shareArticle?mini=true&url=https://healthcare-theme-html.vercel.app/"
                                            className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-100 transition hover:opacity-70"
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
                                        {description && (
                                            <p className="mt-2 text-sm text-gray-100/85">
                                                {description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ),
                )}
            </Swiper>
            <div className="team-swiper-pagination mt-10 flex items-center justify-center"></div>
        </div>
    )
}
