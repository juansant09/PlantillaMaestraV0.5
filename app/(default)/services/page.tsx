import AppointmentSection from '@/components/custom/appointment-section'
import HeroSection from '@/components/custom/hero-section'
import SectionHeading from '@/components/custom/section-heading'
import ServiceCard from '@/components/custom/service-card'
import { CLINICA } from '@/config/clinic'
import helper from '@/lib/helper'
import { serviceListings } from '@/types/service'
import { Metadata } from 'next'
import { CheckCircle, Droplet, Sparkles, Waves, Zap } from 'lucide-react'

const clinic = CLINICA ?? ({} as typeof CLINICA)
const clinicName = clinic.nombre ?? 'Clinica Vitalis'
const clinicCity = clinic.ciudad ?? 'Lucena'
const clinicSlogan = clinic.slogan ?? ''
const images = clinic.imagenes ?? {}
const servicesDescription = `Descubre los tratamientos boutique de ${clinicName} en ${clinicCity}. ${clinicSlogan}`

export const metadata: Metadata = {
    title: `Tratamientos | ${clinicName}`,
    description: servicesDescription,
    openGraph: {
        ...helper.openGraphData,
        title: `Tratamientos | ${clinicName}`,
        description: servicesDescription,
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

const iconMap = {
    Sparkles,
    Droplet,
    Zap,
    Waves,
}

const advantages = Array.isArray(clinic.serviciosVentajas) ? clinic.serviciosVentajas : []
const servicesList = Array.isArray(clinic.servicios) ? clinic.servicios : []

export default function Services() {
    return (
        <>
            <HeroSection
                title={
                    <>
                        Tratamientos signature en
                        <span className="font-normal italic">
                            &nbsp;{clinicName}
                        </span>
                    </>
                }
                pageName="Tratamientos"
                className="bg-cover bg-center"
                backgroundImage={images.heroServices ?? '/images/hero-services.jpg'}
                titleClassName="text-white"
                pageNameClassName="text-white"
            />

            <div className="container my-16 lg:my-20">
                <div className="relative mx-auto w-full rounded-[32px] border border-white/10 bg-white/75 p-6 shadow-soft backdrop-blur-xl sm:p-10">
                    <SectionHeading
                        tag={`Colección ${clinicName}`}
                        title={
                            <>
                                Tratamientos que celebran
                                <span className="font-normal italic"> &nbsp;tu belleza natural</span>
                            </>
                        }
                        titleClassName="max-w-3xl"
                        description={servicesDescription}
                        descriptionClassName="max-w-2xl"
                        className="text-left"
                    />
                    <ul className="mt-6 grid gap-3 text-sm text-gray-strong sm:grid-cols-2 lg:grid-cols-4">
                        {servicesList.map((servicio) => (
                            <li
                                key={servicio}
                                className="flex items-center gap-2 rounded-2xl border border-secondary/10 bg-white/80 px-4 py-2 shadow-soft"
                            >
                                <CheckCircle className="size-4 text-primary" />
                                <span>{servicio}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {serviceListings.map((service) => (
                            <ServiceCard key={service.id} data={service} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-primary/95 py-16 text-white">
                <div className="container grid gap-8 lg:grid-cols-4">
                    {advantages.map(({ icon, titulo, descripcion }) => {
                        const Icon = iconMap[icon as keyof typeof iconMap] ?? Sparkles
                        return (
                            <div
                                key={titulo}
                                className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_22px_55px_rgba(12,10,10,0.35)]"
                            >
                                <span className="grid size-12 place-content-center rounded-xl bg-white/20 text-secondary">
                                    <Icon className="size-6" />
                                </span>
                                <h3 className="text-lg font-semibold">{titulo}</h3>
                                <p className="text-sm text-gray-light">{descripcion}</p>
                            </div>
                        )
                    })}
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
                        "name": "Tratamientos ${clinicName}",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Tratamientos boutique de ${clinicName}.",
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


