import HeroSection from '@/components/custom/hero-section'
import SectionHeading from '@/components/custom/section-heading'
import {
    Accordion,
    AccordionTrigger,
    AccordionContent,
    AccordionItem,
} from '@/components/ui/accordion'
import helper from '@/lib/helper'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Preguntas frecuentes | Ecofet Centro Médico Estético',
    description:
        'Resuelve tus dudas sobre turnos, coberturas, servicios y emergencias en Ecofet Centro Médico Estético.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Preguntas frecuentes | Ecofet Centro Médico Estético',
        description:
            'Resuelve tus dudas sobre turnos, coberturas, servicios y emergencias en Ecofet Centro Médico Estético.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function Faq() {
    return (
        <>
            <HeroSection
                className="bg-[url(/images/faq-bg.jpg)] bg-center"
                title="Preguntas frecuentes"
                pageName="FAQ"
            />

            <div className="container py-16 lg:max-w-4xl lg:py-20">
                <SectionHeading
                    className="text-center"
                    tag="FAQ"
                    title={
                        <>
                            Todo lo que necesitas saber
                            <span className="font-normal italic">
                                &nbsp;antes de tu consulta
                            </span>
                        </>
                    }
                    description="Reunimos las consultas más habituales para que prepares tu visita con tranquilidad. Si tienes otra pregunta, contáctanos y con gusto te ayudaremos."
                />

                <Accordion collapsible type="single" className="space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger large={true}>
                            ¿Qué servicios ofrece Ecofet Centro Médico Estético
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Contamos con medicina general, pediatría, cardiología, odontología, estudios diagnósticos, rehabilitación y programas preventivos integrales.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger large={true}>
                            ¿Cómo puedo reservar una cita
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Agenda en línea desde nuestra web, escríbenos por WhatsApp o llámanos al <b>+34 613 29 69 52</b>. También atendemos turnos espontáneos según disponibilidad.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger large={true}>
                            ¿Trabajan con seguros médicos
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Sí, aceptamos las principales coberturas. Nuestro equipo puede ayudarte a verificar los beneficios incluidos en tu plan.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger large={true}>
                            ¿Los profesionales están certificados
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Todos nuestros médicos y licenciados poseen matrículas vigentes, certificaciones nacionales y formación continua en sus especialidades.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger large={true}>
                            ¿Cuál es el horario de atención
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Atendemos de lunes a viernes de 9:00 a 17:00 h y los sábados de 9:00 a 12:00 h. Brindamos asistencia telefónica para urgencias las 24 horas.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger large={true}>
                            ¿Puedo acceder a mis estudios en línea
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Sí. Dispones de un portal seguro donde consultar y descargar resultados, recetas y resúmenes de atención cuando lo necesites.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger large={true}>
                            ¿Qué medidas de seguridad sanitaria aplican
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Implementamos protocolos de higiene reforzados, ventilación, desinfección constante, uso de elementos de protección y triage previo a cada consulta.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger large={true}>
                            ¿Ofrecen telemedicina
                        </AccordionTrigger>
                        <AccordionContent className="py-3.5">
                            Sí, disponemos de consultas virtuales para seguimiento de tratamientos, renovación de recetas y asesoramiento preventivo sin salir de casa.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Preguntas frecuentes",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Resuelve tus dudas sobre Ecofet Centro Médico Estético.",
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
                                "name": "Preguntas frecuentes",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/faq"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
