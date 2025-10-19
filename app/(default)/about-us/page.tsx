import FancyBox from '@/components/custom/fancybox'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import HeroSection from '@/components/custom/hero-section'
import OurTeamSection from '@/components/custom/our-team-section'
import PartnerSection from '@/components/custom/partner-section'
import SectionHeading from '@/components/custom/section-heading'
import TestimonialSection from '@/components/custom/testimonial-section'
import helper from '@/lib/helper'
import { buttonVariants } from '@/components/ui/button'
import {
    AlarmClock,
    ClipboardList,
    Cpu,
    ImageUpscale,
    LifeBuoy,
    ShieldCheck,
    Stethoscope,
} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Sobre nosotros | Clínica Vitalis',
    description:
        'Conoce la historia, el equipo y la misión de Clínica Vitalis: atención cercana, tecnología de vanguardia y resultados confiables.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Sobre nosotros | Clínica Vitalis',
        description:
            'Conoce la historia, el equipo y la misión de Clínica Vitalis: atención cercana, tecnología de vanguardia y resultados confiables.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function AboutUs() {
    return (
        <>
            <HeroSection
                title="Sobre nosotros"
                pageName="Sobre nosotros"
                className="bg-[url(/images/doctors-bg.jpg)]"
            />

            <div className="container py-12 lg:py-20">
                <SectionHeading
                    className="text-left"
                    tag="Excelencia médica"
                    descriptionClassName="max-w-2xl"
                    title={
                        <>
                            Nuestros valores
                            <span className="font-normal italic">
                                &nbsp;que guían cada decisión
                            </span>
                        </>
                    }
                    description="Trabajamos con integridad, empatía e innovación. Cada consulta, diagnóstico y tratamiento está pensado para cuidar tu salud con estándares internacionales y una atención profundamente humana."
                />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
                    <div className="flex flex-col items-start gap-5">
                        <div className="grid size-14 shrink-0 place-content-center rounded-2xl bg-secondary/10 text-secondary">
                            <Stethoscope aria-hidden="true" className="size-7" />
                        </div>
                        <div>
                            <h3 className="mb-1.5 text-xl font-bold text-primary">
                                Médicos de confianza
                            </h3>
                            <p className="text-gray">
                                Selecciona a tu especialista y recibe planes personalizados que se adaptan a tu estilo de vida.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <div className="grid size-14 shrink-0 place-content-center rounded-2xl bg-secondary/10 text-secondary">
                            <ClipboardList aria-hidden="true" className="size-7" />
                        </div>
                        <div>
                            <h3 className="mb-1.5 text-xl font-bold text-primary">
                                Planes integrales
                            </h3>
                            <p className="text-gray">
                                Diseñamos programas preventivos y tratamientos coordinados para cada miembro de la familia.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <div className="grid size-14 shrink-0 place-content-center rounded-2xl bg-secondary/10 text-secondary">
                            <LifeBuoy aria-hidden="true" className="size-7" />
                        </div>
                        <div>
                            <h3 className="mb-1.5 text-xl font-bold text-primary">
                                Acompañamiento constante
                            </h3>
                            <p className="text-gray">
                                Nuestro equipo está disponible para ayudarte cuando lo necesites, con canales de comunicación siempre abiertos.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <div className="grid size-14 shrink-0 place-content-center rounded-2xl bg-secondary/10 text-secondary">
                            <Cpu aria-hidden="true" className="size-7" />
                        </div>
                        <div>
                            <h3 className="mb-1.5 text-xl font-bold text-primary">
                                Tecnología de precisión
                            </h3>
                            <p className="text-gray">
                                Equipamiento de última generación para diagnósticos certeros y tratamientos mínimamente invasivos.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <div className="grid size-14 shrink-0 place-content-center rounded-2xl bg-secondary/10 text-secondary">
                            <ShieldCheck aria-hidden="true" className="size-7" />
                        </div>
                        <div>
                            <h3 className="mb-1.5 text-xl font-bold text-primary">
                                Prevención activa
                            </h3>
                            <p className="text-gray">
                                Impulsamos hábitos saludables, chequeos frecuentes y educación sanitaria para una vida plena.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                        <div className="grid size-14 shrink-0 place-content-center rounded-2xl bg-secondary/10 text-secondary">
                            <AlarmClock aria-hidden="true" className="size-7" />
                        </div>
                        <div>
                            <h3 className="mb-1.5 text-xl font-bold text-primary">
                                Respuesta rápida
                            </h3>
                            <p className="text-gray">
                                Protocolos claros y personal capacitado para actuar eficiente y oportunamente ante cualquier urgencia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-light/50 py-16 lg:py-20">
                <div className="container grid gap-10 lg:grid-cols-2 lg:gap-20">
                    <div className="space-y-8">
                        <SectionHeading
                            tag="Nuestra historia"
                            title={
                                <>
                                    Compromiso con la comunidad
                                    <span className="font-normal italic">
                                        &nbsp;desde nuestros comienzos
                                    </span>
                                </>
                            }
                            description="Nacimos con la convicción de acercar servicios de salud confiables a cada familia. Hoy combinamos profesionales reconocidos, tecnología de punta y espacios diseñados para brindar comodidad, seguridad y calidez."
                            className="mb-0"
                            descriptionClassName="max-w-xl"
                        />
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-2xl border border-secondary/20 bg-white p-6 shadow-sm">
                                <span className="text-3xl font-bold text-secondary">
                                    35k+
                                </span>
                                <p className="mt-2 text-sm text-gray">
                                    Consultas médicas realizadas con altos índices de satisfacción y seguimiento continuo.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-secondary/20 bg-white p-6 shadow-sm">
                                <span className="text-3xl font-bold text-secondary">
                                    98%
                                </span>
                                <p className="mt-2 text-sm text-gray">
                                    Pacientes que recomiendan nuestra atención por la cercanía y la claridad en cada proceso.
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/contact-us"
                            className={buttonVariants({
                                variant: 'outline',
                            })}
                        >
                            Agenda una visita
                        </Link>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <Image
                            src="/images/contact-bg.jpg"
                            width={520}
                            height={360}
                            alt="Equipo de atención al paciente de Clínica Vitalis"
                            className="h-full w-full rounded-3xl object-cover"
                        />
                        <Image
                            src="/images/clinica-vitalis-instalaciones-equipamiento.webp"
                            width={520}
                            height={360}
                            alt="Instalaciones equipadas de Clínica Vitalis"
                            className="h-full w-full rounded-3xl object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="container py-16 lg:py-20">
                <SectionHeading
                    className="text-left"
                    tag="Instalaciones"
                    title={
                        <>
                            Tecnología y confort
                            <span className="font-normal italic">
                                &nbsp;para cada especialidad
                            </span>
                        </>
                    }
                    description="Recorre nuestras salas de diagnóstico, consultorios y áreas de rehabilitación. Cada espacio fue diseñado para ofrecer privacidad, higiene y una experiencia agradable durante tu visita."
                    descriptionClassName="max-w-2xl"
                />
                <FancyBox>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        <Link
                            href="/images/contact-bg.jpg"
                            className="group relative overflow-hidden rounded-xl md:rounded-3xl xl:col-span-2"
                            data-fancybox="all"
                            data-caption="Equipo de atención al paciente"
                        >
                            <span className="absolute inset-0 bg-primary opacity-0 transition group-hover:opacity-50"></span>
                            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-t-full opacity-0 duration-500 group-hover:opacity-100 lg:bottom-0 lg:left-auto lg:right-5 lg:top-auto lg:h-0 lg:-translate-x-0 lg:-translate-y-0 lg:bg-secondary lg:group-hover:h-28">
                                <button
                                    type="button"
                                    className="m-3 grid size-10 rotate-90 place-content-center rounded-full bg-white text-primary duration-500 group-hover:rotate-0 lg:size-12 lg:rotate-180"
                                >
                                    <ImageUpscale className="size-5 hover:scale-110 lg:size-6" />
                                </button>
                            </div>
                            <Image
                                src="/images/contact-bg.jpg"
                                width={900}
                                height={500}
                                alt="Equipo de atención al paciente de Clínica Vitalis"
                                className="h-full w-full object-cover"
                            />
                        </Link>
                        <Link
                            href="/images/clinica-vitalis-instalaciones-diagnostico.webp"
                            className="group relative overflow-hidden rounded-xl md:rounded-3xl"
                            data-fancybox="all"
                            data-caption="Sala de diagnóstico por imagen"
                        >
                            <span className="absolute inset-0 bg-primary opacity-0 transition group-hover:opacity-50"></span>
                            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-t-full opacity-0 duration-500 group-hover:opacity-100 lg:bottom-0 lg:left-auto lg:right-5 lg:top-auto lg:h-0 lg:-translate-x-0 lg:-translate-y-0 lg:bg-secondary lg:group-hover:h-28">
                                <button
                                    type="button"
                                    className="m-3 grid size-10 rotate-90 place-content-center rounded-full bg-white text-primary duration-500 group-hover:rotate-0 lg:size-12 lg:rotate-180"
                                >
                                    <ImageUpscale className="size-5 hover:scale-110 lg:size-6" />
                                </button>
                            </div>
                            <Image
                                src="/images/clinica-vitalis-instalaciones-diagnostico.webp"
                                width={900}
                                height={500}
                                alt="Sala de diagnóstico por imagen en Clínica Vitalis"
                                className="h-full w-full object-cover"
                            />
                        </Link>
                        <Link
                            href="/images/clinica-vitalis-centro-rayos-x.webp"
                            className="group relative overflow-hidden rounded-xl md:rounded-3xl"
                            data-fancybox="all"
                            data-caption="Sala de radiología digital"
                        >
                            <span className="absolute inset-0 bg-primary opacity-0 transition group-hover:opacity-50"></span>
                            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-t-full opacity-0 duration-500 group-hover:opacity-100 lg:bottom-0 lg:left-auto lg:right-5 lg:top-auto lg:h-0 lg:-translate-x-0 lg:-translate-y-0 lg:bg-secondary lg:group-hover:h-28">
                                <button
                                    type="button"
                                    className="m-3 grid size-10 rotate-90 place-content-center rounded-full bg-white text-primary duration-500 group-hover:rotate-0 lg:size-12 lg:rotate-180"
                                >
                                    <ImageUpscale className="size-5 hover:scale-110 lg:size-6" />
                                </button>
                            </div>
                            <Image
                                src="/images/clinica-vitalis-centro-rayos-x.webp"
                                width={800}
                                height={500}
                                alt="Sala de radiología digital de Clínica Vitalis"
                                className="h-full w-full object-cover"
                            />
                        </Link>
                        <Link
                            href="/images/clinica-vitalis-resonancia-magnetica.webp"
                            className="group relative overflow-hidden rounded-xl md:rounded-3xl"
                            data-fancybox="all"
                            data-caption="Centro de resonancia magnética"
                        >
                            <span className="absolute inset-0 bg-primary opacity-0 transition group-hover:opacity-50"></span>
                            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-t-full opacity-0 duration-500 group-hover:opacity-100 lg:bottom-0 lg:left-auto lg:right-5 lg:top-auto lg:h-0 lg:-translate-x-0 lg:-translate-y-0 lg:bg-secondary lg:group-hover:h-28">
                                <button
                                    type="button"
                                    className="m-3 grid size-10 rotate-90 place-content-center rounded-full bg-white text-primary duration-500 group-hover:rotate-0 lg:size-12 lg:rotate-180"
                                >
                                    <ImageUpscale className="size-5 hover:scale-110 lg:size-6" />
                                </button>
                            </div>
                            <Image
                                src="/images/clinica-vitalis-resonancia-magnetica.webp"
                                width={1000}
                                height={526}
                                alt="Centro de resonancia magnética Clínica Vitalis"
                                className="h-full w-full object-cover"
                            />
                        </Link>
                        <Link
                            href="/images/clinica-vitalis-area-rehabilitacion.webp"
                            className="group relative overflow-hidden rounded-xl md:rounded-3xl xl:col-span-2"
                            data-fancybox="all"
                            data-caption="Área de rehabilitación"
                        >
                            <span className="absolute inset-0 bg-primary opacity-0 transition group-hover:opacity-50"></span>
                            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-t-full opacity-0 duration-500 group-hover:opacity-100 lg:bottom-0 lg:left-auto lg:right-5 lg:top-auto lg:h-0 lg:-translate-x-0 lg:-translate-y-0 lg:bg-secondary lg:group-hover:h-28">
                                <button
                                    type="button"
                                    className="m-3 grid size-10 rotate-90 place-content-center rounded-full bg-white text-primary duration-500 group-hover:rotate-0 lg:size-12 lg:rotate-180"
                                >
                                    <ImageUpscale className="size-5 hover:scale-110 lg:size-6" />
                                </button>
                            </div>
                            <Image
                                src="/images/clinica-vitalis-area-rehabilitacion.webp"
                                width={950}
                                height={500}
                                alt="Área de rehabilitación integral de Clínica Vitalis"
                                className="h-full w-full object-cover"
                            />
                        </Link>
                    </div>
                </FancyBox>
            </div>

            <OurTeamSection />

            <TestimonialSection />

            <PartnerSection />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Sobre nosotros",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Conoce al equipo y la misión de Clínica Vitalis.",
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
                                "name": "Sobre nosotros",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/about-us"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
