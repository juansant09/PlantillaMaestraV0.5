import AppointmentSection from '@/components/custom/appointment-section'
import HeroSection from '@/components/custom/hero-section'
import SectionHeading from '@/components/custom/section-heading'
import ServiceCard from '@/components/custom/service-card'
import helper from '@/lib/helper'
import { serviceListings } from '@/types/service'
import { Metadata } from 'next'
import { Sparkles, Zap, Waves, Droplet } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Tratamientos | Ecofet Centro Médico Estético',
    description:
        'Descubre los tratamientos boutique de Ecofet: hilos tensores, armonización facial, tecnología corporal y nutrición estética diseñados a tu medida.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Tratamientos | Ecofet Centro Médico Estético',
        description:
            'Descubre los tratamientos boutique de Ecofet: hilos tensores, armonización facial, tecnología corporal y nutrición estética diseñados a tu medida.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

const advantages = [
    {
        icon: Sparkles,
        title: 'Protocolos exclusivos',
        description:
            'Combinamos técnicas avanzadas con rituales sensoriales para lograr resultados visibles y elegantes desde la primera sesión.',
    },
    {
        icon: Droplet,
        title: 'Activos premium',
        description:
            'Trabajamos con bioestimuladores, neuromoduladores y cosmética médica avalada para potenciar cada tratamiento.',
    },
    {
        icon: Zap,
        title: 'Tecnología inteligente',
        description:
            'Aparatología de última generación para modelar, regenerar y revitalizar cuidando cada detalle de tu piel.',
    },
    {
        icon: Waves,
        title: 'Seguimiento personalizado',
        description:
            'Después de cada sesión te acompañamos con guías post tratamiento y controles digitales para prolongar los resultados.',
    },
]

export default function Services() {
    return (
        <>
            <HeroSection
                title="Tratamientos signature"
                pageName="Tratamientos"
                className="bg-[url(/imagenes-ecofet/hero-services.jpg)] bg-cover bg-center"
                titleClassName="text-white"
                pageNameClassName="text-white"
            />

            <div className="container my-16 lg:my-20">
                <div className="relative mx-auto w-full rounded-[32px] border border-white/10 bg-white/75 p-6 shadow-soft backdrop-blur-xl sm:p-10">
                    <SectionHeading
                        tag="Colección Ecofet"
                        title={
                            <>
                                Tratamientos que celebran
                                <span className="font-normal italic"> &nbsp;tu belleza natural</span>
                            </>
                        }
                        titleClassName="max-w-3xl"
                        description="Seleccionamos protocolos de medicina estética que equilibran lifting, luminosidad y bienestar corporal. Cada servicio puede combinarse entre sí para construir tu experiencia ideal."
                        descriptionClassName="max-w-2xl"
                        className="text-left"
                    />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {serviceListings.map((service) => (
                            <ServiceCard key={service.id} data={service} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-primary/95 py-16 text-white">
                <div className="container grid gap-8 lg:grid-cols-4">
                    {advantages.map(({ icon: Icon, title, description }) => (
                        <div key={title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_22px_55px_rgba(12,10,10,0.35)]">
                            <span className="grid size-12 place-content-center rounded-xl bg-white/20 text-secondary">
                                <Icon className="size-6" />
                            </span>
                            <h3 className="text-lg font-semibold">{title}</h3>
                            <p className="text-sm text-gray-light">{description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-light/20">
                <AppointmentSection />
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Tratamientos Ecofet",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Tratamientos boutique de Ecofet Centro Médico Estético.",
                        "inLanguage": "es",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/imagenes-ecofet/ecofet.svg",
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
                                "name": "Tratamientos",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/services"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}


