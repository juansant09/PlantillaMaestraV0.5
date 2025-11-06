import { ArrowLeft, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/custom/section-heading'
import ServicesSwiper from '@/components/custom/services-swiper'
import { Metadata } from 'next'
import helper from '@/lib/helper'
import Details from '@/app/(default)/services/service-details/_details'

export const metadata: Metadata = {
    title: 'Detalle de servicios | Ecofet Centro Médico Estético',
    description:
        'Explora el detalle de cada servicio médico en Ecofet Centro Médico Estético y descubre cómo podemos ayudarte.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Detalle de servicios | Ecofet Centro Médico Estético',
        description:
            'Explora el detalle de cada servicio médico en Ecofet Centro Médico Estético y descubre cómo podemos ayudarte.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function ServiceDetails() {
    return (
        <>
            <Details />

            <div className="bg-gray-100 py-16 lg:py-20">
                <div className="container">
                    <div className="mb-5 flex flex-wrap items-end justify-between gap-5 sm:mb-10 sm:flex-nowrap">
                        <SectionHeading
                            className="mb-0"
                            tag="Más servicios"
                            titleClassName="mb-0 capitalize"
                            title={
                                <>
                                    También puedes interesarte por
                                    <span className="font-normal italic">
                                        &nbsp;estas especialidades
                                    </span>
                                </>
                            }
                        />
                        <div className="ml-auto flex justify-center gap-3">
                            <button
                                type="button"
                                className="service-swiper-btn-prev group grid size-9 place-content-center rounded-xl bg-gray-light text-primary transition hover:bg-primary hover:text-white lg:size-12"
                            >
                                <ArrowLeft className="size-5 shrink-0" />
                            </button>
                            <button
                                type="button"
                                className="service-swiper-btn-next group grid size-9 place-content-center rounded-xl bg-gray-light text-primary transition hover:bg-primary hover:text-white lg:size-12"
                            >
                                <ArrowRight className="size-5 shrink-0" />
                            </button>
                        </div>
                    </div>
                    <ServicesSwiper />
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Detalle de servicios",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Descubre los servicios médicos de Ecofet Centro Médico Estético.",
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
                                "name": "Detalle de servicios",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/service-details"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
