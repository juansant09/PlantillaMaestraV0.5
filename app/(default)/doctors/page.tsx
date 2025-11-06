import AppointmentSection from '@/components/custom/appointment-section'
import HeroSection from '@/components/custom/hero-section'
import SectionHeading from '@/components/custom/section-heading'
import IconFaceBook from '@/components/icons/icon-facebook'
import IconInstagram from '@/components/icons/icon-instagram'
import IconLinkedin from '@/components/icons/icon-linkedin'
import IconTwitter from '@/components/icons/icon-twitter'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const doctors = [
    {
        name: 'Dra. Valentina Ríos',
        speciality: 'Medicina estética facial',
        description:
            'Diseñamos planes de armonización y rejuvenecimiento que combinan bioestimuladores, neuromoduladores y tecnología lumínica para resultados naturales.',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=720&q=80',
    },
    {
        name: 'Dr. Martín Aguilar',
        speciality: 'Dermatología láser',
        description:
            'Especialista en láser y energía fraccionada para tratar manchas, cicatrices y textura cutánea con precisión milimétrica.',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=720&q=80',
    },
    {
        name: 'Dra. Renata Solís',
        speciality: 'Nutrición estética',
        description:
            'Integra planes nutricionales premium con suplementación de precisión para potenciar los resultados médico-estéticos desde el interior.',
        image: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=720&q=80',
    },
    {
        name: 'Dra. Camila Duarte',
        speciality: 'Medicina regenerativa',
        description:
            'Utiliza terapias celulares, PRP y colágeno inteligente para estimular la reparación tisular y mejorar la resiliencia cutánea.',
        image: 'https://images.unsplash.com/photo-1584467735871-bd092043d2a7?auto=format&fit=crop&w=720&q=80',
    },
    {
        name: 'Dr. Sebastián Vega',
        speciality: 'Lifting no quirúrgico',
        description:
            'Experto en hilos tensores, ultrasonido focalizado y radiofrecuencia que redefinen el óvalo facial sin recurrir al bisturí.',
        image: 'https://images.unsplash.com/photo-1622253692010-333cb2c6e86f?auto=format&fit=crop&w=720&q=80',
    },
    {
        name: 'Dra. Elisa Navarro',
        speciality: 'Cuidados postoperatorios',
        description:
            'Acompaña cada tratamiento con fisioterapia estética, drenaje linfático y rituales sensoriales que aceleran la recuperación.',
        image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=720&q=80',
    },
]

export const metadata: Metadata = {
    title: 'Equipo médico | Ecofet Centro Médico Estético',
    description:
        'Conoce a los especialistas de Ecofet Centro Médico Estético: profesionales certificados que combinan experiencia, calidez y tecnología para cuidar tu bienestar.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Equipo médico | Ecofet Centro Médico Estético',
        description:
            'Conoce a los especialistas de Ecofet Centro Médico Estético: profesionales certificados que combinan experiencia, calidez y tecnología para cuidar tu bienestar.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function Doctors() {
    return (
        <>
            <HeroSection
                className="bg-[url(/imagenes-ecofet/hero-about.jpg)] bg-cover bg-center"
                title="Nuestro equipo médico"
                pageName="Profesionales"
            />

            <div className="bg-primary py-16 lg:py-20">
                <div className="container">
                    <SectionHeading
                        className="text-center text-white"
                        titleClassName="text-white"
                        descriptionClassName="mx-auto text-gray-light"
                        tagClassName="[&_svg]:text-white bg-secondary/20"
                        tag="Especialistas Ecofet"
                        title={
                            <>
                                Vocación, ciencia y calidez
                                <span className="font-normal italic">&nbsp;al servicio de tu salud</span>
                            </>
                        }
                        description="Cada profesional de Ecofet combina formación continua, experiencia clínica y trato humano para guiarte en cada paso del tratamiento."
                    />
                    <div className="mx-auto grid gap-6 lg:gap-8 xl:max-w-(--breakpoint-xl) xl:grid-cols-2">
                        {doctors.map((doctor) => (
                            <div
                                key={doctor.name}
                                className="relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-[0_24px_60px_rgba(12,10,10,0.4)] backdrop-blur-md"
                            >
                                <div className="relative h-[320px] w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={doctor.image}
                                        alt={`Retrato de ${doctor.name}`}
                                        fill
                                        sizes="(min-width: 1280px) 45vw, (min-width: 1024px) 50vw, 90vw"
                                        className="object-cover object-center"
                                    />
                                    <span className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                                </div>
                                <div className="relative z-10 flex w-full flex-col items-center text-center">
                                    <Link
                                        href="/doctors"
                                        className="text-xl font-semibold text-gray-100 transition hover:opacity-80 sm:text-2xl"
                                    >
                                        {doctor.name}
                                    </Link>
                                    <p className="mt-1 text-sm uppercase tracking-[0.35em] text-secondary">
                                        {doctor.speciality}
                                    </p>
                                    <p className="mt-2.5 max-w-xl font-light text-gray-light">
                                        {doctor.description}
                                    </p>
                                    <div className="mt-5 inline-flex gap-2.5 rounded-2xl border border-secondary/40 p-1.5">
                                        <Link
                                            href="https://www.facebook.com/sharer/sharer.php?u=https://ecofet.com"
                                            target="_blank"
                                            className="grid size-8 place-content-center rounded-full text-white transition hover:opacity-70"
                                        >
                                            <IconFaceBook className="size-5" />
                                            <span className="sr-only">Facebook</span>
                                        </Link>
                                        <Link
                                            href="https://twitter.com/intent/tweet?url=https://ecofet.com"
                                            target="_blank"
                                            className="grid size-8 place-content-center rounded-full text-white transition hover:opacity-70"
                                        >
                                            <IconTwitter className="size-5" />
                                            <span className="sr-only">Twitter</span>
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com/"
                                            target="_blank"
                                            className="grid size-8 place-content-center rounded-full text-white transition hover:opacity-70"
                                        >
                                            <IconInstagram className="size-5" />
                                            <span className="sr-only">Instagram</span>
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com/shareArticle?mini=true&url=https://ecofet.com"
                                            target="_blank"
                                            className="grid size-8 place-content-center rounded-full text-white transition hover:opacity-70"
                                        >
                                            <IconLinkedin className="size-5" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <AppointmentSection />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Equipo médico",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Especialistas certificados de Ecofet Centro Médico Estético.",
                        "inLanguage": "es",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/imagenes-ecofet/ecofet.svg",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Inicio",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                            }, {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Profesionales",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/doctors"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}


