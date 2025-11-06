import HeroSection from '@/components/custom/hero-section'
import OurTeamSection from '@/components/custom/our-team-section'
import PartnerSection from '@/components/custom/partner-section'
import SectionHeading from '@/components/custom/section-heading'
import TestimonialSection from '@/components/custom/testimonial-section'
import helper from '@/lib/helper'
import { buttonVariants } from '@/components/ui/button'
import { ArrowUpRight, Sparkles, Gem, Heart, Leaf, Wand2, HandHeart } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Sobre nosotros | Ecofet Centro Médico Estético',
    description:
        'Descubre la esencia boutique de Ecofet: medicina estética de autor, tecnología de precisión y un equipo multidisciplinario listo para diseñar tu experiencia ideal.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Sobre nosotros | Ecofet Centro Médico Estético',
        description:
            'Descubre la esencia boutique de Ecofet: medicina estética de autor, tecnología de precisión y un equipo multidisciplinario listo para diseñar tu experiencia ideal.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

const values = [
    {
        icon: Sparkles,
        title: 'Experiencias a medida',
        description:
            'Cada diagnóstico se traduce en un ritual personal. Diseñamos protocolos combinados que respetan tu ritmo y realzan tu belleza de forma natural.',
    },
    {
        icon: Gem,
        title: 'Excelencia médica',
        description:
            'Nuestro staff integra especialistas certificados en medicina estética, dermatología y nutrición para acompañarte de principio a fin.',
    },
    {
        icon: Wand2,
        title: 'Tecnología de vanguardia',
        description:
            'Equipamiento de última generación, bioestimuladores premium y aparatología avalada para resultados visibles desde la primera sesión.',
    },
    {
        icon: HandHeart,
        title: 'Calidez boutique',
        description:
            'Ambientes cálidos, aromas y música pensados para relajar tus sentidos y convertir cada visita en un momento de bienestar.',
    },
    {
        icon: Heart,
        title: 'Seguimiento cercano',
        description:
            'Realizamos controles minuciosos, recomendaciones post tratamiento y seguimiento digital para que te sientas acompañada en todo momento.',
    },
    {
        icon: Leaf,
        title: 'Bienestar integral',
        description:
            'Integramos planes de alimentación, suplementación y hábitos saludables para potenciar tus resultados desde adentro hacia afuera.',
    },
]

export default function AboutUs() {
    return (
        <>
            <HeroSection
                title="Nuestra esencia"
                pageName="Sobre Ecofet"
                className="bg-[url(/imagenes-ecofet/hero-about.jpg)] bg-cover bg-center"
                titleClassName="text-white"
                pageNameClassName="text-white"
            />

            <div className="container py-12 lg:py-20">
                <SectionHeading
                    className="text-left"
                    tag="Lujo consciente"
                    descriptionClassName="max-w-2xl"
                    title={
                        <>
                            Medicina estética creada
                            <span className="font-normal italic"> &nbsp;para tu estilo de vida</span>
                        </>
                    }
                    description="En Ecofet combinamos ciencia, arte y sensorialidad. Somos un centro boutique donde cada tratamiento nace de un análisis profundo de tu piel, tus hábitos y tus objetivos. Nuestro equipo diseña experiencias que armonizan resultados visibles con una atención cálida y humana."
                />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {values.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/70 px-6 py-8 shadow-soft backdrop-blur lg:px-8">
                            <span className="grid size-14 shrink-0 place-content-center rounded-2xl bg-secondary/15 text-secondary">
                                <Icon aria-hidden="true" className="size-7" />
                            </span>
                            <div>
                                <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
                                <p className="text-sm text-gray">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-light/50 py-16 lg:py-20">
                <div className="container grid gap-10 lg:grid-cols-2 lg:gap-20">
                    <div className="space-y-8">
                        <SectionHeading
                            tag="Cómo nace Ecofet"
                            title={
                                <>
                                    Belleza, ciencia y bienestar
                                    <span className="font-normal italic"> &nbsp;en equilibrio perfecto</span>
                                </>
                            }
                            description="Nacimos como un espacio boutique fundado por médicas estéticas apasionadas por el detalle. Llevamos más de 15 años acompañando a mujeres y hombres que buscan resultados elegantes, personalizados y sostenibles en el tiempo."
                            className="mb-0"
                            descriptionClassName="max-w-xl"
                        />
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/15 bg-white/80 p-6 shadow-soft">
                                <h3 className="text-lg font-semibold text-primary">650+ pacientes felices</h3>
                                <p className="mt-2 text-sm text-gray">
                                    Historias reales de transformación con resultados naturales y seguimiento cercano.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/15 bg-white/80 p-6 shadow-soft">
                                <h3 className="text-lg font-semibold text-primary">15 años de experiencia</h3>
                                <p className="mt-2 text-sm text-gray">
                                    Formación continua y protocolos propios avalados por sociedades médicas internacionales.
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex flex-wrap gap-3">
                            <Link href="/services" className={buttonVariants()}>
                                Conoce nuestros tratamientos
                                <ArrowUpRight className="size-5" />
                            </Link>
                            <Link
                                href="/contact-us"
                                className={`${buttonVariants({ variant: 'outline' })} hero-cta hero-cta-outline`}
                            >
                                Agenda una evaluación
                                <ArrowUpRight className="size-5" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden h-full rounded-3xl bg-gradient-to-br from-[#f2f2f5] via-[#e4e6ec] to-[#d9dbe2] shadow-[0_25px_60px_rgba(28,26,29,0.12)] lg:block" />
                </div>
            </div>

            <div className="container py-16 lg:py-20">
                <SectionHeading
                    tag="Nuestras firmas"
                    title={
                        <>
                            Tratamientos signature
                            <span className="font-normal italic"> &nbsp;para cada momento</span>
                        </>
                    }
                    description="Creamos colecciones de tratamientos que combinan tecnología, activos premium y rituales sensoriales para potenciar tu resultado en cada estación del año."
                    className="text-center"
                    descriptionClassName="mx-auto max-w-3xl text-gray"
                    titleClassName="mx-auto max-w-3xl text-primary"
                />

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-white/15 bg-white/80 p-6 shadow-soft backdrop-blur">
                        <h3 className="text-lg font-semibold text-primary">Glow Inmediato</h3>
                        <p className="mt-2 text-sm text-gray">
                            Hidratación profunda con ácido hialurónico, luz LED y cocktail vitamínico para revitalizar tu piel antes de un evento importante.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-white/15 bg-white/80 p-6 shadow-soft backdrop-blur">
                        <h3 className="text-lg font-semibold text-primary">Armonía facial 360°</h3>
                        <p className="mt-2 text-sm text-gray">
                            Evaluación integral, toxina botulínica de precisión y rellenos estratégicos para redefinir contornos respetando tu expresión natural.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-white/15 bg-white/80 p-6 shadow-soft backdrop-blur">
                        <h3 className="text-lg font-semibold text-primary">Silhouette Sculpt</h3>
                        <p className="mt-2 text-sm text-gray">
                            Drenaje linfático, aparatología reductora y nutrición estética que modelan y reafirman tu cuerpo con resultados visibles.
                        </p>
                    </div>
                </div>
            </div>

            <PartnerSection />
            <OurTeamSection />
            <TestimonialSection />
        </>
    )
}
