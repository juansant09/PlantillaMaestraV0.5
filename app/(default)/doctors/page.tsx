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
        name: 'Dra. Lucia Martinez',
        speciality: 'Medicina general',
        description:
            'Brinda atención primaria integral, con enfoque en medicina preventiva y acompañamiento cercano para cada familia.',
        image: '/images/clinica-vitalis-equipo-especialista-1.webp',
    },
    {
        name: 'Dr. Javier Gomez',
        speciality: 'Neurología',
        description:
            'Especialista en trastornos del sistema nervioso, diagnósticos tempranos y planes terapéuticos personalizados.',
        image: '/images/clinica-vitalis-equipo-especialista-2.webp',
    },
    {
        name: 'Dra. Sofia Delgado',
        speciality: 'Fisioterapia',
        description:
            'Diseña programas de rehabilitación y entrenamiento funcional para recuperar movilidad y prevenir lesiones.',
        image: '/images/clinica-vitalis-equipo-especialista-3.webp',
    },
    {
        name: 'Dr. Alvaro Sanchez',
        speciality: 'Dermatología',
        description:
            'Experto en el tratamiento de afecciones cutáneas y procedimientos dermoestéticos de última generación.',
        image: '/images/clinica-vitalis-equipo-especialista-4.webp',
    },
    {
        name: 'Dr. Carlos Herrera',
        speciality: 'Cardiología',
        description:
            'Coordina programas de prevención cardiovascular, estudios diagnósticos y rehabilitación cardíaca.',
        image: '/images/clinica-vitalis-equipo-especialista-5.webp',
    },
    {
        name: 'Dra. Elena Ruiz',
        speciality: 'Odontología',
        description:
            'Cuida tu salud bucal con tratamientos preventivos, restauradores y propuestas estéticas de alta precisión.',
        image: '/images/clinica-vitalis-equipo-especialista-6.webp',
    },
]

export const metadata: Metadata = {
    title: 'Equipo médico | Clínica Vitalis',
    description:
        'Conoce a los especialistas de Clínica Vitalis: profesionales certificados que combinan experiencia, calidez y tecnología para cuidar tu salud.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Equipo médico | Clínica Vitalis',
        description:
            'Conoce a los especialistas de Clínica Vitalis: profesionales certificados que combinan experiencia, calidez y tecnología para cuidar tu salud.',
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
                className="bg-[url(/images/doctors-bg.jpg)]"
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
                        tag="Especialistas Vitalis"
                        title={
                            <>
                                Vocación, ciencia y calidez
                                <span className="font-normal italic">
                                    &nbsp;al servicio de tu salud
                                </span>
                            </>
                        }
                        description="Cada profesional de Clínica Vitalis combina formación continua, experiencia clínica y trato humano para guiarte en cada paso del tratamiento."
                    />
                    <div className="mx-auto grid gap-6 lg:gap-8 xl:max-w-(--breakpoint-xl) xl:grid-cols-2">
                        {doctors.map((doctor) => (
                            <div
                                key={doctor.name}
                                className="relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl p-4 sm:flex-row sm:gap-10 sm:p-5"
                            >
                                <div className="relative h-52 w-52 shrink-0 overflow-hidden rounded-xl">
                                    <Image
                                        src={doctor.image}
                                        alt={doctor.name}
                                        width={640}
                                        height={800}
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                                <span className="absolute inset-0 bg-linear-to-l from-secondary/20 to-secondary/0 opacity-50"></span>
                                <div className="relative text-center sm:text-left">
                                    <Link
                                        href="/doctors"
                                        className="text-xl font-semibold text-gray-100 transition hover:opacity-80 sm:text-2xl"
                                    >
                                        {doctor.name}
                                    </Link>
                                    <p className="mt-1 text-sm tracking-wider text-secondary uppercase">
                                        {doctor.speciality}
                                    </p>
                                    <p className="mt-2.5 font-light text-gray-light">
                                        {doctor.description}
                                    </p>
                                    <div className="mt-5 inline-flex gap-2.5 rounded-2xl border border-secondary/50 p-1.5 duration-300">
                                        <Link
                                            href="https://www.facebook.com/sharer/sharer.phpu=https://healthcare-theme-html.vercel.app/"
                                            target="_blank"
                                            className="grid size-8 shrink-0 place-content-center rounded-full text-white opacity-100 transition hover:opacity-70"
                                        >
                                            <IconFaceBook className="size-5 shrink-0" />
                                            <span className="sr-only">
                                                Facebook
                                            </span>
                                        </Link>
                                        <Link
                                            href="https://twitter.com/intent/tweeturl=https://healthcare-theme-html.vercel.app/&text="
                                            target="_blank"
                                            className="grid size-8 shrink-0 place-content-center rounded-full text-white opacity-100 transition hover:opacity-70"
                                        >
                                            <IconTwitter className="size-5 shrink-0" />
                                            <span className="sr-only">Twitter</span>
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com/url=https%3A%2F%2Fhealthcare-theme-html.vercel.app%2F"
                                            target="_blank"
                                            className="grid size-8 shrink-0 place-content-center rounded-full text-white opacity-100 transition hover:opacity-70"
                                        >
                                            <IconInstagram className="size-5 shrink-0" />
                                            <span className="sr-only">
                                                Instagram
                                            </span>
                                        </Link>
                                        <Link
                                            href="https://www.linkedin.com/shareArticlemini=true&url=https://healthcare-theme-html.vercel.app/"
                                            target="_blank"
                                            className="grid size-8 shrink-0 place-content-center rounded-full text-white opacity-100 transition hover:opacity-70"
                                        >
                                            <IconLinkedin className="size-5 shrink-0" />
                                            <span className="sr-only">
                                                LinkedIn
                                            </span>
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
                        "description": "Conoce a los especialistas de Clínica Vitalis.",
                        "inLanguage": "es",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Inicio",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                            },{
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
