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
import { serviceListings } from '@/types/service'
import {
    ArrowUpRight,
    BriefcaseMedical,
    CalendarClock,
    ClipboardPlus,
    FileBadge,
    HandHeart,
    Headset,
    HeartPulse,
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


export default function Home() {
    return (
        <>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#f1f2f6] via-[#e4e6ed] to-[#d2d5dd] pt-[100px]">
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.65),transparent_60%)]" />
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(195,200,210,0.45),transparent_55%)]" />
                <div className="container relative flex flex-col justify-between gap-5 lg:flex-row lg:gap-10">
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
                    <div className="hero-doctors-animate relative mx-auto mt-auto w-full max-w-xl rounded-[44px] bg-white/70 p-10 shadow-[0_30px_90px_rgba(76,82,96,0.25)] backdrop-blur lg:-mr-20 2xl:-mr-36">
                        <div className="pointer-events-none absolute inset-0 rounded-[44px] border border-white/45 bg-[radial-gradient(circle_at_top_left,rgba(233,236,242,0.85),transparent_55%)]" />
                        <div className="relative space-y-8">
                            <div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                                    <CalendarClock className="size-4 text-secondary" />
                                    Agenda flexible
                                </span>
                                <h2 className="mt-4 text-3xl font-semibold text-primary">
                                    Coordinamos tu plan integral de bienestar con seguimiento continuo.
                                </h2>
                                <p className="mt-3 text-sm text-gray-600 lg:text-base">
                                    Cada cita combina evaluación médica, diagnóstico estético y acompañamiento humano para que avances con seguridad y calma.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center -space-x-3">
                                    <div className="size-12 overflow-hidden rounded-full border-2 border-white shadow-lg">
                                        <Image
                                            src="/imagenes-ecofet/5767150526385556754_120.jpg"
                                            width={48}
                                            height={48}
                                            alt="Paciente sonriente en Ecofet"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="size-12 overflow-hidden rounded-full border-2 border-white shadow-lg">
                                        <Image
                                            src="/imagenes-ecofet/5767150526385556756_121.jpg"
                                            width={48}
                                            height={48}
                                            alt="Paciente relajada tras su tratamiento"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="size-12 overflow-hidden rounded-full border-2 border-white shadow-lg">
                                        <Image
                                            src="/imagenes-ecofet/5767150526385556759_121.jpg"
                                            width={48}
                                            height={48}
                                            alt="Cliente satisfecho en Ecofet"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="rounded-full border border-secondary/20 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-secondary shadow-[0_12px_28px_rgba(82,86,97,0.18)]">
                                    120+ Pacientes recuperados
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 rounded-[28px] border border-secondary/15 bg-gradient-to-br from-white/90 via-white to-[#f6f7fb]/85 p-5 text-sm text-gray-600 shadow-[0_20px_48px_rgba(84,88,102,0.18)]">
                                <div className="flex items-center gap-3">
                                    <FileBadge className="size-5 text-secondary" />
                                    Protocolos médicos avalados por sociedades internacionales.
                                </div>
                                <div className="flex items-center gap-3">
                                    <BriefcaseMedical className="size-5 text-secondary" />
                                    Tecnologías de precisión, bioestimuladores y soluciones no invasivas.
                                </div>
                                <div className="flex items-center gap-3">
                                    <HandHeart className="size-5 text-secondary" />
                                    Seguimiento cercano y recomendaciones personalizadas en cada visita.
                                </div>
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
                    <div className="relative grid gap-6 lg:w-[450px] lg:shrink-0 xl:w-full xl:max-w-2xl">
                        <div className="relative h-[432px] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#f1f2f6] via-[#e4e6ed] to-[#d2d5dd] shadow-[0_25px_60px_rgba(28,26,29,0.15)]">
                            <Image
                                src="/images/clinica-vitalis-equipo-clinico.webp"
                                alt="Equipo médico de Clínica Vitalis atendiendo a una paciente"
                                fill
                                sizes="(min-width: 1280px) 32vw, (min-width: 1024px) 40vw, 100vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                    <div className="absolute right-0 top-5 z-10 flex size-24 flex-col items-center justify-center rounded-full border-2 border-white bg-secondary text-center text-sm text-white shadow-[1px_3px_5px_0px_rgba(19,24,47,0.2)] sm:size-36 sm:gap-0.5 sm:border-[6px] sm:text-base lg:bottom-[28%] xl:right-44">
                        <span className="font-roboto text-3xl/8 font-semibold sm:text-5xl">
                            20+
                        </span>
                        años de experiencia
                    </div>

                    <div className="relative flex items-center justify-center">
                        <div className="relative h-[265px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f7f7fa] via-[#eceef3] to-[#dfe3eb] shadow-[0_20px_50px_rgba(28,26,29,0.15)]">
                            <Image
                                src="/images/clinica-vitalis-instalaciones-diagnostico.webp"
                                alt="Especialista de Clínica Vitalis realizando diagnóstico con tecnología moderna"
                                fill
                                sizes="(min-width: 1280px) 28vw, (min-width: 1024px) 36vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute right-8 top-8 hidden h-[120px] w-[180px] overflow-hidden rounded-2xl border-4 border-white bg-gradient-to-br from-[#f2f3f7] via-[#e7e9ef] to-[#dfe2ea] shadow-lg xl:block">
                            <Image
                                src="/images/clinica-vitalis-atencion-personalizada.webp"
                                alt="Atención personalizada en recepción de Clínica Vitalis"
                                fill
                                sizes="180px"
                                className="object-cover"
                            />
                        </div>
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










