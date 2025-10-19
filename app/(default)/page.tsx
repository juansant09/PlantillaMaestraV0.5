import AppointmentDailogBox from '@/components/custom/appointment-dailog-box'
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
import { Button, buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import helper from '@/lib/helper'
import { IServiceData } from '@/types/service'
import {
    ArrowUpRight,
    Baby,
    BriefcaseMedical,
    CalendarClock,
    ClipboardPlus,
    FileBadge,
    HandHeart,
    Headset,
    HeartPulse,
    ShieldPlus,
    SquareActivity,
    Wallet,
} from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
    title: 'Inicio | Clínica Vitalis',
    description:
        'Servicio profesional y tratamientos avanzados: tu salud es nuestra prioridad.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Inicio | Clínica Vitalis',
        description:
            'Servicio profesional y tratamientos avanzados: tu salud es nuestra prioridad.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

const serviceListings: IServiceData[] = [
    {
        id: 1,
        icon: ShieldPlus,
        title: 'Medicina general',
        description:
            'Controles preventivos, planes personalizados y seguimiento integral para cada etapa de tu vida.',
    },
    {
        id: 2,
        icon: Baby,
        title: 'Pediatría',
        description:
            'acompañamos a tus hijos con chequeos, vacunación y cuidados especializados desde el nacimiento.',
    },
    {
        id: 3,
        icon: SquareActivity,
        title: 'Cardiología',
        description:
            'Diagnóstico oportuno y tratamientos avanzados para mantener tu corazón sano y fuerte.',
    },
]

export default function Home() {
    return (
        <>
            <div className="overflow-hidden bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat pt-[100px]">
                <div className="container flex flex-col justify-between gap-5 lg:flex-row lg:gap-10">
                    <div className="max-w-3xl pt-14 lg:pb-40 lg:pt-28 xl:pb-60 xl:pt-40">
                        <div className="mb-7 lg:mb-10">
                            <span className="mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm">
                                <HeartPulse className="flipheart size-5 shrink-0 text-primary" />
                                Bienvenido a Clínica Vitalis
                            </span>
                            <h1 className="hero-main-title mb-5 font-roboto text-3xl font-semibold text-primary md:text-4xl/snug xl:text-7xl/[80px]">
                                Cuidado confiable
                                <span className="font-normal italic">
                                    &nbsp;para tu bienestar
                                </span>
                            </h1>
                            <p className="w-full max-w-lg text-sm text-gray-strong lg:text-base">
                                Disfruta de servicios médicos profesionales adaptados a tus necesidades. Nuestro equipo apasionado te acompaña con cercanía y excelencia para construir un futuro más saludable.
                            </p>
                        </div>
                        <div className="inline-flex flex-wrap gap-2.5 lg:gap-5">
                            <Link
                                href="/contact-us"
                                className={cn(buttonVariants(), 'hero-cta')}
                            >
                                Contáctanos
                                <ArrowUpRight />
                            </Link>
                            <Link
                                href="/about-us"
                                className={cn(
                                    buttonVariants({
                                        variant: 'outline',
                                    }),
                                    'hero-cta hero-cta-outline',
                                )}
                            >
                                Conócenos
                                <ArrowUpRight />
                            </Link>
                        </div>
                    </div>
                    <div className="hero-doctors-animate relative mx-auto mt-auto lg:-mr-20 2xl:-mr-36">
                        <Image
                            src="/images/clinica-vitalis-hero-equipo.webp"
                            alt="Equipo médico de Clínica Vitalis atendiendo pacientes"
                            width={776}
                            height={633}
                            priority
                            sizes="(min-width: 1280px) 780px, (min-width: 1024px) 60vw, 90vw"
                            className="mx-auto h-auto w-full max-w-3xl object-contain"
                        />
                        <div className="absolute bottom-24 left-0 hidden items-center gap-2.5 rounded-full border border-gray-light bg-primary/10 p-2.5 pr-5 backdrop-blur-xl lg:flex xl:-left-14 xl:bottom-40 xl:p-4 xl:pr-8">
                            <div className="flex">
                                <div className="size-10 shrink-0 overflow-hidden rounded-full border-2 border-gray-light xl:size-14">
                                    <Image
                                        src="/images/clinica-vitalis-paciente-satisfecho-1.webp"
                                        width={52}
                                        height={52}
                                        alt="Paciente recuperado de Clínica Vitalis"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="relative -ml-3 size-10 shrink-0 overflow-hidden rounded-full border-2 border-gray-light xl:size-14">
                                    <Image
                                        src="/images/clinica-vitalis-paciente-satisfecho-2.webp"
                                        width={52}
                                        height={52}
                                        alt="Paciente sonriendo después de su tratamiento"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="relative -ml-3 size-10 shrink-0 overflow-hidden rounded-full border-2 border-gray-light xl:size-14">
                                    <Image
                                        src="/images/clinica-vitalis-paciente-satisfecho-3.webp"
                                        width={52}
                                        height={52}
                                        alt="Paciente satisfecho con los resultados médicos"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 text-white">
                                <span className="text-xl font-bold xl:text-2xl">
                                    120+
                                </span>
                                <p className="text-sm">Pacientes recuperados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-16 lg:-mt-20">
                <div className="relative mx-auto grid w-full gap-5 rounded-[28px] border-2 border-gray/10 bg-secondary/10 p-4 backdrop-blur-xl sm:p-7 lg:max-w-7xl lg:grid-cols-3 lg:gap-10 lg:px-10 lg:py-12">
                    {serviceListings.map((service) => (
                        <ServiceCard key={service.id} data={service} />
                    ))}
                </div>
            </div>

            <div className="container flex flex-col gap-10 py-16 lg:flex-row lg:py-20 xl:gap-[100px]">
                <div className="relative lg:w-[450px] lg:shrink-0 xl:w-full xl:max-w-2xl">
                    <Image
                        src="/images/clinica-vitalis-equipo-clinico.webp"
                        alt="Equipo de Clínica Vitalis dialogando con una paciente"
                        width={432}
                        height={501}
                        className="h-auto w-full rounded-3xl object-cover pr-28 sm:pr-80 lg:pr-20 xl:pr-60"
                    />
                    <div className="absolute right-0 top-5 z-10 flex size-24 flex-col items-center justify-center rounded-full border-2 border-white bg-secondary text-center text-sm text-white shadow-[1px_3px_5px_0px_rgba(19,24,47,0.2)] sm:size-36 sm:gap-0.5 sm:border-[6px] sm:text-base lg:bottom-[28%] xl:right-44">
                        <span className="font-roboto text-3xl/8 font-semibold sm:text-5xl">
                            20+
                        </span>
                        años de experiencia
                    </div>

                    <Image
                        src="/images/clinica-vitalis-icon-estetoscopio.webp"
                        width={224}
                        height={168}
                        alt="Ilustración de estetoscopio"
                        className="absolute right-0 top-40 ml-5 hidden w-56 object-contain xl:block"
                    />
                    <div className="-mt-20 pl-12 sm:pl-52 lg:pl-14 xl:pl-52">
                        <Image
                            src="/images/clinica-vitalis-equipo-profesional.webp"
                            width={464}
                            height={265}
                            alt="Equipo médico de Clínica Vitalis trabajando en conjunto"
                            className="h-auto w-full rounded-2xl object-cover"
                        />
                    </div>
                    <div className="absolute bottom-5 left-10 hidden w-24 xl:block">
                        <Image
                            src="/images/clinica-vitalis-detalle-decorativo.webp"
                            width={96}
                            height={95}
                            alt="Detalle decorativo orgánico"
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>
                <div>
                    <SectionHeading
                        tag="Sobre nosotros"
                        title={
                            <>
                                Salud confiable con compasión
                                <span className="font-normal italic">
                                    &nbsp;durante más de una década
                                </span>
                            </>
                        }
                        description="Nos comprometemos a ofrecer Atención médica excepcional con un enfoque humano. Nuestro equipo multidisciplinario y nuestras instalaciones modernas te brindan soluciones precisas, acompañamiento permanente y calidez en cada visita."
                        className="mb-0"
                        descriptionClassName="max-w-2xl"
                    />
                    <div className="group grid gap-3 divide-dashed divide-gray-light py-7 sm:grid-cols-2 sm:gap-0 sm:divide-x-2 lg:py-10">
                        <div className="flex gap-5 pr-5">
                            <BriefcaseMedical className="size-7 shrink-0 stroke-1 text-secondary" />
                            <div className="space-y-1">
                                <h3 className="text-lg/6 font-semibold text-primary lg:text-xl">
                                    acompañamiento médico
                                </h3>
                                <p className="text-sm text-gray-strong lg:text-base">
                                    Nuestros especialistas están disponibles para orientarte, resolver tus dudas y diseñar tratamientos personalizados en cada etapa del proceso.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 sm:pl-5">
                            <Headset className="size-7 shrink-0 stroke-1 text-secondary" />
                            <div className="space-y-1">
                                <h3 className="text-lg/6 font-semibold text-primary lg:text-xl">
                                    Atención al paciente
                                </h3>
                                <p className="text-sm text-gray-strong lg:text-base">
                                    Un equipo dedicado gestiona tus citas, recordatorios y solicitudes para que cada experiencia sea ágil, sencilla y cercana.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-14">
                        <Link href="/about-us" className={buttonVariants()}>
                            más información
                            <ArrowUpRight className="size-5 transition group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container lg:max-w-(--breakpoint-xl)">
                <div className="relative mb-20 overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-secondary px-5 py-16 sm:px-10 lg:py-14 xl:px-20">
                    <Image
                        src="/images/clinica-vitalis-ilustracion-adn.webp"
                        alt="Ilustración de ADN en tonos azul y verde"
                        width={500}
                        height={500}
                        className="absolute -bottom-10 right-0 h-auto w-[900px] rotate-6 object-contain opacity-30"
                    />
                    <div className="relative space-y-7!">
                        <SectionHeading
                            title={
                                <>
                                    Estamos aceptando
                                    <span className="font-normal italic">
                                        &nbsp;nuevos pacientes
                                    </span>
                                </>
                            }
                            description="Programar tu primera consulta es muy sencillo. Agenda en línea, recibe recordatorios automáticos y disfruta de una bienvenida personalizada desde el primer contacto."
                            className="[&_.tag]:hidden"
                            titleClassName="text-white"
                            descriptionClassName="max-w-xl text-gray-soft"
                        />
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button type="button">
                                    <CalendarClock className="size-5 shrink-0" />
                                    Pedir una cita
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <AppointmentDailogBox />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>

            <div className="bg-gray-light/50 py-16 lg:py-20">
                <div className="container flex flex-col justify-between gap-10 lg:flex-row lg:gap-14 xl:gap-20">
                    <SectionHeading
                        tag="¿Por qué elegir Vitalis"
                        title={
                            <>
                                Tu sonrisa y tu bienestar
                                <span className="font-normal italic">
                                    &nbsp;en manos de especialistas
                                </span>
                            </>
                        }
                        description="Combinamos vocación de servicio, tecnología de primer nivel y planes accesibles para cuidar de ti y de tu familia en un solo lugar."
                        className="mb-0 max-w-2xl"
                        descriptionClassName="max-w-lg"
                    />
                    <div className="grid grow sm:grid-cols-2 lg:max-w-xl xl:max-w-[690px]">
                        <div className="overflow-hidden rounded-[30px] rounded-br-none bg-primary p-8 text-white">
                            <FileBadge className="size-10 text-secondary" />
                            <h3 className="my-4 text-lg/6 font-semibold lg:text-xl">
                                Profesionales certificados
                            </h3>
                            <p className="text-sm text-gray-soft lg:text-base">
                                Contamos con especialistas avalados y en constante formación que aplican protocolos actualizados para cada tratamiento.
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-tr-[30px] bg-linear-to-tr from-white via-transparent to-white/50 p-8">
                            <Wallet className="size-10 text-secondary" />
                            <h3 className="my-4 text-lg/6 font-semibold text-primary lg:text-xl">
                                Tarifas accesibles
                            </h3>
                            <p className="text-sm text-gray-strong lg:text-base">
                                Planes pensados para tu presupuesto, con opciones de financiación y coberturas convenientes para toda la familia.
                            </p>
                        </div>

                        <div className="order-4 overflow-hidden rounded-bl-[30px] bg-linear-to-bl from-white via-transparent to-white/50 p-8 sm:order-3">
                            <ClipboardPlus className="size-10 text-secondary" />
                            <h3 className="my-4 text-lg/6 font-semibold text-primary lg:text-xl">
                                Reserva sin complicaciones
                            </h3>
                            <p className="text-sm text-gray-strong lg:text-base">
                                Agenda en minutos mediante nuestro sistema online, recibe confirmaciones inmediatas y administra tus turnos desde cualquier dispositivo.
                            </p>
                        </div>
                        <div className="order-3 overflow-hidden rounded-[30px] rounded-tl-none bg-primary p-8 text-white sm:order-4">
                            <HandHeart className="size-10 text-secondary" />
                            <h3 className="my-4 text-lg/6 font-semibold lg:text-xl">
                                Servicio memorable
                            </h3>
                            <p className="text-sm text-gray-soft lg:text-base">
                                Nos ocupamos de cada detalle para ofrecerte una experiencia cálida, personalizada y enfocada en resultados duraderos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <OurTeamSection />

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
                    <AccordionItem value="item-1">
                        <AccordionTrigger large={true}>
                            ¿qué servicios ofrece Clínica Vitalis
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Disponemos de medicina general, Pediatría, Cardiología, odontología, Diagnósticos por imagen y programas preventivos. Adaptamos cada plan a tus necesidades para brindarte una Atención integral.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger large={true}>
                            ¿cómo reservo una cita
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Puedes reservar en línea desde nuestra web, llamarnos al <b>+34 613 29 69 52</b> o acercarte a recepción. Confirmamos cada turno y enviamos recordatorios automáticos.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger large={true}>
                            ¿Aceptan seguros médicos
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Sí, trabajamos con las principales compañías de salud. Consulta con nuestro equipo o con tu aseguradora para conocer los detalles de cobertura.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger large={true}>
                            ¿Su equipo médico está certificado
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Todo nuestro personal cuenta con certificaciones oficiales y años de experiencia Clínica, garantizando tratamientos seguros y basados en la evidencia.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger large={true}>
                            ¿Cuáles son los horarios de Atención
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Atendemos de lunes a viernes de 9:00 a 17:00 h y los sábados de 9:00 a 12:00 h. Para urgencias médicas, disponemos de asistencia telefónica las 24 horas.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <PartnerSection />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Clínica Vitalis",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Cuidado experto y tratamientos avanzados para tu bienestar.",
                        "inLanguage": "es",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Inicio",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}








