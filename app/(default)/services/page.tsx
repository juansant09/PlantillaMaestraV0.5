import AppointmentSection from '@/components/custom/appointment-section'
import HeroSection from '@/components/custom/hero-section'
import SectionHeading from '@/components/custom/section-heading'
import ServiceCard from '@/components/custom/service-card'
import helper from '@/lib/helper'
import { serviceListings } from '@/types/service'
import { BookCheck, Headset, HeartHandshake, Stethoscope } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Servicios | Clínica Vitalis',
    description:
        'Conoce el catálogo de servicios médicos de Clínica Vitalis: tratamientos integrales, especialistas certificados y atención personalizada.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Servicios | Clínica Vitalis',
        description:
            'Conoce el catálogo de servicios médicos de Clínica Vitalis: tratamientos integrales, especialistas certificados y atención personalizada.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function Services() {
    return (
        <>
            <HeroSection
                title="Nuestros servicios"
                pageName="Servicios"
                className="bg-[url(/images/service-bg.jpg)]"
            />

            <div className="container my-16 lg:my-20">
                <div className="relative mx-auto w-full rounded-[28px] border-2 border-gray/10 bg-secondary/10 p-4 backdrop-blur-xl sm:p-7 lg:px-10 lg:py-12">
                    <Stethoscope className="absolute right-10 top-10 size-24 shrink-0 rotate-6 stroke-1 text-secondary opacity-10" />
                    <SectionHeading
                        tag="Especialidades"
                        title={
                            <>
                                Mucho más que servicios
                                <span className="font-normal italic">
                                    &nbsp;soluciones de salud completas
                                </span>
                            </>
                        }
                        titleClassName="max-w-[620px]"
                        description="En Clínica Vitalis reunimos profesionales multidisciplinarios, tecnología moderna y protocolos actualizados para ofrecer diagnósticos precisos, tratamientos integrales y acompañamiento continuo."
                        descriptionClassName="max-w-xl"
                    />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                        {serviceListings.map((service) => (
                            <ServiceCard key={service.id} data={service} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-primary py-14">
                <div className="container grid lg:grid-cols-3">
                    <div className="flex items-start gap-5 py-6 lg:px-8">
                        <span className="grid size-16 shrink-0 place-content-center rounded-full border-4 border-gray-light bg-white text-secondary">
                            <HeartHandshake className="size-8" />
                        </span>
                        <div className="text-white">
                            <h3 className="text-xl">Programas personalizados</h3>
                            <p className="mt-1 font-light text-gray-light">
                                Diseñamos planes a medida: desde chequeos preventivos hasta terapias de rehabilitación guiadas paso a paso.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5 border-y-2 border-secondary/40 py-6 lg:border-y-0 lg:border-x-2 lg:px-8">
                        <span className="grid size-16 shrink-0 place-content-center rounded-full border-4 border-gray-light bg-white text-secondary">
                            <Headset className="size-8" />
                        </span>
                        <div className="text-white">
                            <h3 className="text-xl">Emergencias 24/7</h3>
                            <p className="mt-1 font-light text-gray-light">
                                Nuestro equipo de guardia responde de inmediato, coordinando traslados, evaluaciones y atención prioritaria en cualquier horario.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5 py-6 lg:px-8">
                        <span className="grid size-16 shrink-0 place-content-center rounded-full border-4 border-gray-light bg-white text-secondary">
                            <BookCheck className="size-8" />
                        </span>
                        <div className="text-white">
                            <h3 className="text-xl">Resultados digitales</h3>
                            <p className="mt-1 font-light text-gray-light">
                                Accede a informes y estudios desde nuestro portal seguro, comparte con tu médico y recibe seguimiento en línea.
                            </p>
                        </div>
                    </div>
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
                        "name": "Servicios",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Servicios médicos integrales de Clínica Vitalis.",
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
                                "name": "Servicios",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/services"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
