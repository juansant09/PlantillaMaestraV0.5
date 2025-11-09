import AppointmentSection from '@/components/custom/appointment-section'
import OurTeamSection from '@/components/custom/our-team-section'
import PartnerSection from '@/components/custom/partner-section'
import SectionHeading from '@/components/custom/section-heading'
import ServiceCard from '@/components/custom/service-card'
import TestimonialSection from '@/components/custom/testimonial-section'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { buttonVariants } from '@/components/ui/button'
import { CLINICA } from '@/config/clinic'
import helper from '@/lib/helper'
import { serviceListings } from '@/types/service'
import {
    ArrowUpRight,
    CalendarClock,
    ClipboardPlus,
    FileBadge,
    HandHeart,
    Headset,
    HeartPulse,
    Wallet,
    BriefcaseMedical,
    ShieldPlus,
} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const clinic = CLINICA ?? ({} as typeof CLINICA)
const clinicName = clinic.nombre ?? 'Clinica Vitalis'
const clinicCity = clinic.ciudad ?? 'Lucena'
const clinicSlogan = clinic.slogan ?? ''
const images = clinic.imagenes ?? {}
const homeDescription = `En ${clinicName} combinamos tecnología avanzada y cuidado humano para pacientes de ${clinicCity}. ${clinicSlogan}`

const iconMap: Record<string, any> = {
    CalendarClock,
    FileBadge,
    Wallet,
    ClipboardPlus,
    HandHeart,
    Headset,
    HeartPulse,
    BriefcaseMedical,
    ShieldPlus,
}

export const metadata: Metadata = {
    title: `Inicio | ${clinicName}`,
    description: homeDescription,
    openGraph: {
        ...helper.openGraphData,
        title: `Inicio | ${clinicName}`,
        description: homeDescription,
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function Home() {
    const heroData = clinic.hero ?? {}
    const heroResumen = Array.isArray(heroData.resumen) ? heroData.resumen : []
    const heroCtas = Array.isArray(heroData.ctas) ? heroData.ctas : []
    const hero = {
        ...heroData,
        badge: heroData.badge ?? '',
        titulo: heroData.titulo ?? '',
        descripcion: heroData.descripcion ?? '',
        resumen: heroResumen,
        ctas: heroCtas,
    }
    const home = clinic.home ?? {}
    const homeAbout = home.about ?? {}
    const homeHighlights = Array.isArray(home.destacados) ? home.destacados : []
    const ctaPacientes = home.ctaPacientes ?? {}
    const ctaBullets = Array.isArray(ctaPacientes.bullets) ? ctaPacientes.bullets : []
    const homeValoraciones = Array.isArray(home.valoraciones) ? home.valoraciones : []
    const faq = Array.isArray(clinic.preguntasFrecuentes) ? clinic.preguntasFrecuentes : []
    const firmas = Array.isArray(clinic.firmas) ? clinic.firmas : []

    return (
        <>
            <div
                className="relative overflow-hidden pt-[100px]"
                style={{
                    background:
                        'radial-gradient(circle at top right, color-mix(in srgb, var(--color-base) 85%, white), transparent 60%), radial-gradient(circle at bottom left, color-mix(in srgb, var(--color-base) 65%, white), transparent 55%)',
                }}
            >
                <div className="container relative flex flex-col justify-between gap-5 lg:flex-row lg:gap-10">
                    <div className="max-w-3xl pt-14 lg:pb-40 lg:pt-28 xl:pb-60 xl:pt-40">
                        <div className="mb-7 lg:mb-10">
                            <span className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
                                <HeartPulse className="flipheart size-5 shrink-0 text-primary" />
                                {hero.badge}
                            </span>
                            <h1 className="hero-main-title mb-5 font-roboto text-3xl font-semibold text-primary md:text-4xl/snug xl:text-7xl/[80px]">
                                {hero.titulo}
                                <span className="font-normal italic"> {clinicSlogan}</span>
                            </h1>
                            <p className="w-full max-w-lg text-sm text-gray-strong lg:text-base">
                                {hero.descripcion}
                            </p>
                        </div>
                        <div className="inline-flex flex-wrap gap-2.5 lg:gap-5">
                            {heroCtas.map((cta) => (
                                <Link
                                    key={cta.href}
                                    href={cta.href}
                                    className={cn(
                                        buttonVariants({
                                            variant: cta.variant === 'outline' ? 'outline' : 'default',
                                        }),
                                        cta.variant === 'outline' ? 'hero-cta hero-cta-outline' : 'hero-cta',
                                    )}
                                >
                                    {cta.label}
                                    <ArrowUpRight />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="hero-doctors-animate relative mx-auto mt-auto w-full max-w-xl rounded-[44px] bg-white/80 p-10 shadow-[0_30px_90px_rgba(76,82,96,0.25)] backdrop-blur">
                        <Image
                            src={images.heroHome ?? '/images/clinica-vitalis-hero-equipo.webp'}
                            alt={`Equipo médico de ${clinicName}`}
                            width={776}
                            height={633}
                            priority
                            sizes="(min-width: 1280px) 780px, (min-width: 1024px) 60vw, 90vw"
                            className="mx-auto h-auto w-full max-w-3xl rounded-[32px] object-cover"
                        />
                        <div className="absolute bottom-24 left-0 hidden items-center gap-2.5 rounded-full border border-gray-light bg-primary/10 p-2.5 pr-5 backdrop-blur-xl lg:flex xl:-left-14 xl:bottom-40 xl:p-4 xl:pr-8">
                            <div className="flex">
                                <div className="size-10 shrink-0 overflow-hidden rounded-full border-2 border-gray-light xl:size-14">
                                    <Image
                                        src={images.heroHighlight ?? '/images/clinica-vitalis-paciente-satisfecho-2.webp'}
                                        width={52}
                                        height={52}
                                        alt={`Paciente contento en ${clinicName}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="relative -ml-3 size-10 shrink-0 overflow-hidden rounded-full border-2 border-gray-light xl:size-14">
                                    <Image
                                        src={images.pacientes ?? '/images/clinica-vitalis-paciente-satisfecho-1.webp'}
                                        width={52}
                                        height={52}
                                        alt={`Paciente de ${clinicName}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray">Pacientes felices</p>
                                <p className="text-sm font-semibold text-primary">+1200 historias</p>
                            </div>
                        </div>
                        <div className="absolute right-8 top-8 hidden h-[120px] w-[180px] overflow-hidden rounded-2xl border-4 border-white bg-white/70 shadow-lg xl:block">
                            <Image
                                src={images.heroSupport ?? '/images/clinica-vitalis-atencion-personalizada.webp'}
                                alt={`Atención personalizada en ${clinicName}`}
                                fill
                                sizes="180px"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative -mt-24 pb-6 sm:-mt-28 lg:-mt-32">
                <div className="rounded-[32px] border border-white/40 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-10">
                    <SectionHeading
                        tag="Colección Clínica Vitalis"
                        title={
                            <>
                                Tratamientos que celebran
                                <span className="font-normal italic"> &nbsp;tu belleza natural</span>
                            </>
                        }
                        description="Descubre la selección boutique de protocolos faciales y corporales diseñados a tu medida. Combina cada tratamiento para crear un plan integral."
                        className="text-left"
                        descriptionClassName="max-w-3xl"
                        titleClassName="max-w-3xl"
                    />
                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {serviceListings.map((service) => (
                            <ServiceCard key={service.id} data={service} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                <div className="relative">
                    <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                        <Image
                            src={images.equipo ?? '/images/clinica-vitalis-equipo-clinico.webp'}
                            alt={`Equipo clínico de ${clinicName}`}
                            width={720}
                            height={540}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="absolute left-6 top-6 rounded-full bg-secondary/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.48em] text-white">
                        20+
                    </div>
                    <div className="absolute -bottom-10 right-6 hidden w-60 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-soft lg:block">
                        <Image
                            src={images.instalaciones ?? '/images/clinica-vitalis-instalaciones-recepcion.webp'}
                            alt="Instalaciones de la clínica"
                            width={320}
                            height={220}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div>
                    <SectionHeading
                        tag={homeAbout.tag}
                        title={
                            <>
                                {homeAbout.titulo}
                                <span className="font-normal italic">&nbsp;{clinicCity}</span>
                            </>
                        }
                        description={homeAbout.descripcion}
                        className="mb-6 text-left"
                        descriptionClassName="max-w-xl"
                    />
                    <div className="grid gap-6">
                        {homeHighlights.map((card) => {
                            const Icon = iconMap[card.icon] ?? ShieldPlus
                            return (
                                <div key={card.titulo} className="flex gap-4 rounded-2xl border border-secondary/15 bg-white/80 px-4 py-3 shadow-soft">
                                    <Icon className="size-6 shrink-0 text-secondary" />
                                    <div>
                                        <h3 className="text-base font-semibold text-primary">{card.titulo}</h3>
                                        <p className="text-sm text-gray-strong">{card.descripcion}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-6">
                        <Link href="/about-us" className={buttonVariants()}>
                            Más información
                            <ArrowUpRight className="size-5 transition group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container lg:max-w-(--breakpoint-xl)">
                <div className="relative mb-20 overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-secondary px-5 py-16 sm:px-10 lg:py-14 xl:px-20">
                    <Image
                        src="/images/clinica-vitalis-ilustracion-adn.webp"
                        alt="Ilustración ADN"
                        width={500}
                        height={500}
                        className="absolute -bottom-10 right-0 h-auto w-[900px] rotate-6 object-contain opacity-20"
                    />
                    <div className="relative space-y-7">
                        <SectionHeading
                            title={
                                <>
                                    {ctaPacientes.titulo}
                                    <span className="font-normal italic">
                                        &nbsp;{clinicCity}
                                    </span>
                                </>
                            }
                            description={ctaPacientes.descripcion}
                            className="[&_.tag]:hidden text-left"
                            titleClassName="text-white max-w-3xl"
                            descriptionClassName="max-w-2xl text-gray-light"
                        />
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {ctaBullets.map((bullet) => {
                                const Icon = iconMap[bullet.icon] ?? CalendarClock
                                return (
                                    <div
                                        key={bullet.titulo}
                                        className="overflow-hidden rounded-[30px] bg-white/10 p-6 text-white"
                                    >
                                        <Icon className="size-10 text-secondary" />
                                        <h3 className="my-4 text-lg/6 font-semibold text-white lg:text-xl">
                                            {bullet.titulo}
                                        </h3>
                                        <p className="text-sm text-gray-light lg:text-base">
                                            {bullet.descripcion}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container grid gap-6 py-16 lg:grid-cols-2">
                {homeValoraciones.map((item, index) => {
                    const Icon = iconMap[item.icon] ?? Wallet
                    const isDark = index % 2 === 1
                    return (
                        <div
                            key={item.titulo}
                            className={cn(
                                'flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-soft transition',
                                isDark
                                    ? 'border-transparent bg-primary text-white'
                                    : 'border-secondary/15 bg-white/90 text-primary',
                            )}
                        >
                            <span
                                className={cn(
                                    'grid size-12 place-content-center rounded-xl',
                                    isDark ? 'bg-white/10 text-white' : 'bg-secondary/10 text-secondary',
                                )}
                            >
                                <Icon className="size-6" />
                            </span>
                            <h3 className="text-lg font-semibold">{item.titulo}</h3>
                            <p className={cn('text-sm', isDark ? 'text-gray-100/90' : 'text-gray')}>
                                {item.descripcion}
                            </p>
                        </div>
                    )
                })}
            </div>

            <OurTeamSection />

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
                    {firmas.map((firma) => (
                        <div
                            key={firma.titulo}
                            className="rounded-3xl border border-white/15 bg-white/80 p-6 shadow-soft backdrop-blur"
                        >
                            <h3 className="text-lg font-semibold text-primary">{firma.titulo}</h3>
                            <p className="mt-2 text-sm text-gray">{firma.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>

            <AppointmentSection />

            <TestimonialSection />

            <div className="container flex flex-col justify-between gap-10 py-16 lg:flex-row lg:gap-14 lg:py-20 xl:gap-20">
                <SectionHeading
                    tag="Preguntas frecuentes"
                    title={
                        <>
                            Resolviendo tus dudas
                            <span className="font-normal italic">
                                <br />
                                en cualquier momento
                            </span>
                        </>
                    }
                    description="Si tienes inquietudes sobre nuestros servicios, horarios o coberturas, aquí encontrarás respuestas rápidas. También puedes escribirnos y nuestro equipo te contactará a la brevedad."
                    className="mb-0 w-full max-w-md xl:max-w-xl"
                    descriptionClassName="max-w-md"
                />
                <Accordion collapsible type="single" className="grow space-y-4">
                    {faq.map((item, index) => (
                        <AccordionItem key={item.pregunta} value={`item-${index}`}>
                            <AccordionTrigger large={true}>{item.pregunta}</AccordionTrigger>
                            <AccordionContent className="py-3.5">{item.respuesta}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <PartnerSection />
        </>
    )
}
