import HeroSection from '@/components/custom/hero-section'
import SectionHeading from '@/components/custom/section-heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CLINICA } from '@/config/clinic'
import helper from '@/lib/helper'
import {
    ArrowUpRight,
    Captions,
    Mail,
    MapPin,
    MessageSquareMore,
    PhoneCall,
    Send,
    User2,
} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const clinic = CLINICA ?? ({} as typeof CLINICA)
const clinicName = clinic.nombre ?? 'Clinica Vitalis'
const clinicCity = clinic.ciudad ?? 'Lucena'
const clinicSlogan = clinic.slogan ?? ''
const images = clinic.imagenes ?? {}
const contactDescription = `Comunícate con ${clinicName} en ${clinicCity} para reservar turnos, resolver dudas y recibir asistencia personalizada. ${clinicSlogan}`

export const metadata: Metadata = {
    title: `Contacto | ${clinicName}`,
    description: contactDescription,
    openGraph: {
        ...helper.openGraphData,
        title: `Contacto | ${clinicName}`,
        description: contactDescription,
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function ContactUs() {
    const telefono = clinic.telefono ?? ''
    const telefonoHref = telefono.replace(/\s+/g, '')
    const phoneLink = telefonoHref ? `tel:${telefonoHref}` : '#'
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(clinicCity)}&output=embed`
    const whatsappUrl = clinic.whatsapp ?? '#'
    const direccion = clinic.direccion ?? ''
    const email = clinic.email ?? 'hola@example.com'

    return (
        <>
            <HeroSection
                className="bg-[url(/images/contact-bg.jpg)]"
                title="Contacto"
                pageName="Contacto"
            />

            <div className="container pt-20 lg:max-w-6xl">
                <div className="flex flex-col items-start lg:flex-row">
                    <div className="lg:pr-36">
                        <SectionHeading
                            className="mb-0"
                            titleClassName="mb-0 max-w-sm"
                            tag={`${clinicName} responde`}
                            title={
                                <>
                                    ¿Tienes dudas
                                    <span className="font-normal italic">
                                        &nbsp;Escríbenos o llámanos
                                    </span>
                                </>
                            }
                            description={`Nuestro equipo en ${clinicCity} gestiona turnos, presupuestos y urgencias con la rapidez y calidez que mereces.`}
                            descriptionClassName="max-w-md"
                        />
                        <div className="mt-8 flex flex-col divide-y divide-dashed divide-secondary/20">
                            <div className="flex items-start gap-5 pb-3.5">
                                <span className="grid size-10 shrink-0 place-content-center rounded-full bg-secondary text-white">
                                    <PhoneCall className="size-5 text-white" />
                                </span>
                                <div className="space-y-1">
                                    <p className="text-gray">
                                        Reserva telefónica:
                                    </p>
                                    <Link
                                        href={phoneLink}
                                        className="block font-semibold text-primary transition hover:underline"
                                    >
                                        {telefono || 'N/D'}
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 py-3.5">
                                <span className="grid size-10 shrink-0 place-content-center rounded-full bg-secondary text-white">
                                    <Send className="size-5 text-white" />
                                </span>
                                <div className="space-y-1">
                                    <p className="text-gray">WhatsApp directo:</p>
                                    <Link
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block font-semibold text-primary transition hover:underline"
                                    >
                                        Escríbenos ahora
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 py-3.5">
                                <span className="grid size-10 shrink-0 place-content-center rounded-full bg-secondary text-white">
                                    <MapPin className="size-5 text-white" />
                                </span>
                                <div className="space-y-1">
                                    <p className="text-gray">Visítanos:</p>
                                    <p className="font-semibold text-primary">
                                        {clinicName} · {clinicCity}, España
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-10 w-full grow overflow-hidden rounded-xl border border-secondary/10 bg-white shadow-[0px_5px_60px_rgba(0,0,0,0.05)] lg:-ml-14 lg:w-auto">
                        <div className="space-y-5 px-5 py-6 sm:px-10 sm:py-8">
                            <div className="rounded-2xl border border-secondary/10 bg-white p-4">
                                <p className="text-sm text-secondary">
                                    Completa el formulario y nos pondremos en contacto en menos de 24 horas hábiles.
                                </p>
                            </div>
                            <form className="space-y-5">
                                <div className="relative">
                                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
                                        <User2 className="size-5 text-primary" />
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="Nombre completo"
                                        className="pl-10"
                                    />
                                </div>
                                <div className="relative">
                                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
                                        <PhoneCall className="size-5 text-primary" />
                                    </span>
                                    <Input
                                        type="tel"
                                        placeholder="Teléfono"
                                        className="pl-10"
                                    />
                                </div>
                                <div className="relative">
                                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
                                        <Mail className="size-5 text-primary" />
                                    </span>
                                    <Input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        className="pl-10"
                                    />
                                </div>
                                <div className="relative">
                                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
                                        <Captions className="size-5 text-primary" />
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="Motivo de la consulta"
                                        className="pl-10"
                                    />
                                </div>
                                <div className="relative flex">
                                    <span className="absolute left-2.5 top-4">
                                        <MessageSquareMore className="size-5 text-primary" />
                                    </span>
                                    <Textarea
                                        placeholder="Cuéntanos brevemente cómo podemos ayudarte"
                                        rows={5}
                                        className="pl-10"
                                    />
                                </div>
                                <div className="text-right">
                                    <Button type="button">
                                        Enviar mensaje
                                        <ArrowUpRight />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 lg:-mt-32">
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="500"
                    loading="lazy"
                    title={`Ubicación de ${clinicName}`}
                    allowFullScreen
                ></iframe>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Contacto ${clinicName}",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Comunícate con ${clinicName} para reservas y asistencia.",
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
                                "name": "Contacto",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/contact-us"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
