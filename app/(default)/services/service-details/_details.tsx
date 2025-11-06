'use client'

import { CheckCheck, PhoneCall } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { serviceListings } from '@/types/service'
import HeroSection from '@/components/custom/hero-section'
import { useRouter, useSearchParams } from 'next/navigation'

type ServiceDetail = {
    title: string
    image: string
    intro: string
    benefits: string[]
    focus: string[]
    faqs: { question: string; answer: string }[]
}

const serviceDetails: ServiceDetail[] = [
    {
        title: 'Hilos tensores',
        image: '/imagenes-ecofet/hilos-tensores.jpg',
        intro:
            'Reafirmamos contornos faciales con hilos tensores de última generación. Logra un efecto lifting inmediato y natural, sin cirugía y con mínima recuperación.',
        benefits: [
            'Define óvalo facial, pómulos y línea mandibular en una sola sesión.',
            'Estimula la producción de colágeno para resultados que mejoran con el tiempo.',
            'Procedimiento ambulatorio con anestesia tópica y retorno inmediato a tu rutina.',
        ],
        focus: [
            'Utilizamos hilos PDO y PLLA certificados, seleccionando el diseño ideal según la anatomía de tu rostro. Antes del procedimiento realizamos un mapeo facial dinámico para conseguir simetría y elevación personalizada.',
            'Acompañamos con un plan post tratamiento que incluye radiofrecuencia médica y dermonutrición para prolongar el efecto lifting y cuidar tu piel desde adentro.',
        ],
        faqs: [
            {
                question: '¿Cuánto duran los resultados?',
                answer:
                    'Los efectos son visibles al instante y continúan mejorando durante 4 a 6 semanas. La duración promedio es de 12 a 18 meses, dependiendo del estilo de vida y cuidados posteriores.',
            },
            {
                question: '¿Es compatible con otros procedimientos?',
                answer:
                    'Sí. Podemos combinar hilos con toxina botulínica, rellenos o bioestimuladores. Planificamos cada combinación de forma personalizada para maximizar resultados.',
            },
            {
                question: '¿Requiere reposo?',
                answer:
                    'Solo sugerimos evitar ejercicios intensos y masajes faciales las primeras 48 horas. Te entregamos un kit de cuidados y estamos disponibles para cualquier consulta.',
            },
        ],
    },
    {
        title: 'Botox',
        image: '/imagenes-ecofet/botox.jpg',
        intro:
            'Suavizamos líneas de expresión con neuromoduladores premium aplicados por médicas estéticas expertas. Conservamos tu gestualidad y logramos un aspecto fresco y descansado.',
        benefits: [
            'Sesión de pocos minutos, sin tiempos de recuperación.',
            'Resultados progresivos a partir del tercer día y estabilidad a las dos semanas.',
            'Protocolos de microdosis para tratar sonrisa gingival, bruxismo y sudoración.',
        ],
        focus: [
            'Realizamos un análisis dinámico de tu expresión para definir puntos estratégicos y dosis exactas. Usamos toxinas aprobadas por ANMAT y conservamos siempre un resultado natural.',
            'Incluimos control a los 15 días para perfeccionar detalles y adaptar el plan a tu siguiente visita, garantizando resultados constantes y armoniosos.',
        ],
        faqs: [
            {
                question: '¿Cuánto dura el efecto?',
                answer:
                    'Entre 4 y 6 meses según tu metabolismo y hábitos. Te orientamos para que mantengas los resultados con refuerzos planificados.',
            },
            {
                question: '¿Desde qué edad se recomienda?',
                answer:
                    'Podemos trabajarlo de forma preventiva desde los 25 años o correctiva en etapas más avanzadas. Evaluamos cada caso de manera integral.',
            },
            {
                question: '¿Qué cuidados debo seguir?',
                answer:
                    'Evita recostarte durante 4 horas, realizar actividad física intensa y masajear la zona tratada el primer día. El resto de tu rutina continúa igual.',
            },
        ],
    },
    {
        title: 'Ácido hialurónico',
        image: '/imagenes-ecofet/acido-hialuronico.jpg',
        intro:
            'Restauramos volumen, hidratación y armonía facial con ácido hialurónico de alta pureza. Elegimos densidades específicas para cada área del rostro.',
        benefits: [
            'Realza labios, pómulos y mentón con resultados inmediatos.',
            'Suaviza surcos nasogenianos, líneas de marioneta y ojeras hundidas.',
            'Incluye control post sesión y plan de mantención personalizado.',
        ],
        focus: [
            'Utilizamos cánulas o microagujas según la zona a tratar para minimizar hematomas y asegurar un acabado uniforme. Trabajamos con marcas líderes y viscoelasticidades adaptadas a cada objetivo.',
            'Combinamos el tratamiento con tecnologías de estimulación de colágeno y skincare médico para prolongar el efecto glow y mantener la piel revitalizada.',
        ],
        faqs: [
            {
                question: '¿Cuánto tiempo duran los rellenos?',
                answer:
                    'Dependiendo de la zona y el tipo de gel, entre 9 y 18 meses. Los labios suelen requerir retoques antes que los pómulos o mentón.',
            },
            {
                question: '¿Es doloroso?',
                answer:
                    'Aplicamos anestesia tópica y lidocaína incorporada en el producto. El procedimiento es bien tolerado y dura entre 30 y 45 minutos.',
            },
            {
                question: '¿Puedo realizar otras terapias el mismo día?',
                answer:
                    'Podemos combinarlo con toxina botulínica o bioestimuladores en la misma visita. Tratamientos energéticos se programan en otra fecha para cuidar los tejidos.',
            },
        ],
    },
    {
        title: 'Eliminación de manchas',
        image: '/imagenes-ecofet/eliminacion-manchas.jpg',
        intro:
            'Unificamos el tono y devolvemos luminosidad con peelings médicos, luz pulsada intensa (IPL) y protocolos despigmentantes personalizados.',
        benefits: [
            'Tratamos melasma, discromías solares y manchas postinflamatorias.',
            'Incluye diagnóstico con dermoscopia digital para medir avances reales.',
            'Plan de skincare con activos aclaradores y fotoprotección a medida.',
        ],
        focus: [
            'Definimos el protocolo según tu fototipo y estilo de vida. Alternamos peelings, IPL y mesoterapia despigmentante para conseguir resultados graduales y seguros.',
            'Te acompañamos con visitas de control y ajustes estacionales para mantener el tono uniforme durante todo el año.',
        ],
        faqs: [
            {
                question: '¿Cuántas sesiones necesito?',
                answer:
                    'Generalmente trabajamos entre 3 y 5 sesiones espaciadas cada 21 días, dependiendo de la profundidad de la mancha.',
            },
            {
                question: '¿Puedo tomar sol?',
                answer:
                    'Recomendamos evitar la exposición directa y utilizar protector solar médico reaplicado cada 2 horas. Te entregamos guía detallada.',
            },
            {
                question: '¿El tratamiento es apto para pieles sensibles?',
                answer:
                    'Sí, adaptamos las concentraciones y seleccionamos activos antiinflamatorios para cuidar pieles sensibles o con rosácea.',
            },
        ],
    },
    {
        title: 'Tratamientos corporales',
        image: '/imagenes-ecofet/tratamientos-corporales.jpg',
        intro:
            'Modelamos y tonificamos tu silueta con aparatología reductora, drenaje linfático y planes completos de nutrición estética.',
        benefits: [
            'Reduce adiposidad localizada y mejora la firmeza de la piel.',
            'Favorece el drenaje, disminuye celulitis y sensación de pesadez.',
            'Protocolos combinables con rutina de entrenamiento y suplementación.',
        ],
        focus: [
            'Integramos criolipólisis, ondas acústicas y radiofrecuencia según tu objetivo corporal. Complementamos con masajes detox y recomendaciones alimenticias.',
            'Medimos la evolución con bioimpedancia y fotografías clínicas para ajustar el plan en tiempo real.',
        ],
        faqs: [
            {
                question: '¿Necesito preparación previa?',
                answer:
                    'Solo recomendamos buena hidratación y evitar cremas corporales el día del tratamiento. El resto lo planificamos juntas en la consulta inicial.',
            },
            {
                question: '¿Los resultados son permanentes?',
                answer:
                    'Se sostienen en el tiempo si acompañas con hábitos saludables. Nuestro equipo nutricional te guía para mantenerlos.',
            },
            {
                question: '¿Produce dolor?',
                answer:
                    'Las tecnologías son confortables. Puedes sentir calor moderado o masajes intensos pero siempre dentro de un rango tolerable.',
            },
        ],
    },
    {
        title: 'Rejuvenecimiento facial',
        image: '/imagenes-ecofet/hero-about.jpg',
        intro:
            'Combinamos bioestimuladores, vitaminas, luz LED y radiofrecuencia fraccionada para renovar textura, elasticidad y luminosidad.',
        benefits: [
            'Mejora la calidad de la piel, cierra poros y suaviza líneas finas.',
            'Activa la producción de colágeno y elastina de manera progresiva.',
            'Sesiones personalizadas con protocolos signature y masajes relajantes.',
        ],
        focus: [
            'Seleccionamos la sinergia ideal entre Sculptra, Radiesse, PRP o mesoterapia vitamínica según las necesidades de cada rostro.',
            'Finalizamos cada sesión con mascarillas cryo y fototerapia regeneradora para potenciar el glow inmediato.',
        ],
        faqs: [
            {
                question: '¿Cada cuánto debo repetirlo?',
                answer:
                    'Recomendamos un plan inicial de 3 sesiones y luego mantenimientos estacionales para sostener la piel rejuvenecida.',
            },
            {
                question: '¿Hay tiempo de recuperación?',
                answer:
                    'Puedes retomar tu día inmediatamente. Solo sugerimos evitar sol directo y make-up durante 24 horas.',
            },
            {
                question: '¿Se puede combinar con hilos o rellenos?',
                answer:
                    'Sí, es ideal para preparar la piel antes de hilos tensores o consolidar resultados después de rellenos.',
            },
        ],
    },
    {
        title: 'Nutrición estética',
        image: '/imagenes-ecofet/nutricion-estetica.jpg',
        intro:
            'Diseñamos planes nutricionales premium que acompañan tus objetivos estéticos y de bienestar desde el interior.',
        benefits: [
            'Planes flexibles adaptados a tus horarios y preferencias.',
            'Suplementación y nutricosmética personalizada.',
            'Monitoreo quincenal con ajustes según tu evolución.',
        ],
        focus: [
            'Evaluamos hábitos, composición corporal y analíticas para crear un plan realista que potencie cada tratamiento estético.',
            'Incorporamos recetas, listas de compras y herramientas digitales para que la experiencia sea sencilla y motivadora.',
        ],
        faqs: [
            {
                question: '¿Trabajan con diferentes estilos de alimentación?',
                answer:
                    'Sí, adaptamos la pauta a alimentación plant based, keto, low carb o tradicional, siempre priorizando salud y placer.',
            },
            {
                question: '¿Incluye seguimiento online?',
                answer:
                    'Coordinamos check-ins virtuales y soporte vía WhatsApp para acompañarte en cada etapa.',
            },
            {
                question: '¿Puedo combinarlo con actividad física?',
                answer:
                    '¡Claro! Ajustamos macronutrientes y suplementación según tu entrenamiento para optimizar rendimiento y recuperación.',
            },
        ],
    },
    {
        title: 'Depilación láser',
        image: '/imagenes-ecofet/depilacion-laser.jpg',
        intro:
            'Eliminamos el vello de forma progresiva y segura con láser de diodo con enfriamiento dinámico, apto para todo tipo de piel.',
        benefits: [
            'Sesiones rápidas y confortables con resultados visibles desde las primeras aplicaciones.',
            'Protocolos específicos para pieles sensibles y áreas delicadas.',
            'Incluye seguimiento y recordatorios personalizados entre sesiones.',
        ],
        focus: [
            'Trabajamos con parámetros personalizados según fototipo y densidad de vello. Controlamos energía y temperatura para proteger la piel en todo momento.',
            'Ofrecemos packs corporales completos y planes por zonas pequeñas para adaptarnos a tus necesidades y presupuesto.',
        ],
        faqs: [
            {
                question: '¿Cuántas sesiones se necesitan?',
                answer:
                    'El protocolo estándar es de 6 a 8 sesiones con intervalos de 30 a 45 días. Ajustamos la frecuencia según tu evolución.',
            },
            {
                question: '¿Puedo tomar sol?',
                answer:
                    'Sugerimos evitar exposición directa 48 horas antes y después. Te brindamos fotoprotección acorde a tu fototipo.',
            },
            {
                question: '¿Es doloroso?',
                answer:
                    'El manípulo con enfriamiento integrado reduce la sensibilidad. Puedes sentir un leve calor o chispas elásticas, siempre dentro de un rango tolerable.',
            },
        ],
    },
]

export default function ServiceDetails() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const serviceTitle = searchParams.get('id') ?? serviceListings[0]?.title

    const [activeTab, setActiveTab] = useState(serviceTitle)

    useEffect(() => {
        if (serviceTitle) {
            setActiveTab(serviceTitle)
        }
    }, [serviceTitle])

    const handleTabChange = (value: string) => {
        setActiveTab(value)
        router.replace(`/services/service-details?id=${encodeURIComponent(value)}`)
    }

    const currentService =
        serviceDetails.find((service) => service.title === activeTab) ?? serviceDetails[0]

    return (
        <>
            <HeroSection
                title={currentService.title}
                pageName="Tratamientos"
                className="bg-[url(/imagenes-ecofet/hero-services.jpg)] bg-cover bg-center"
                titleClassName="text-white"
                pageNameClassName="text-white"
            />

            <div className="container py-16 lg:py-20">
                <Tabs
                    value={activeTab}
                    onValueChange={handleTabChange}
                    className="grid gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14"
                >
                    <TabsList className="grid h-max gap-4 rounded-3xl border border-white/10 bg-white/80 p-4 shadow-soft backdrop-blur lg:sticky lg:top-28">
                        {serviceDetails.map((service) => (
                            <TabsTrigger
                                key={service.title}
                                value={service.title}
                                className="rounded-xl border border-transparent bg-white/60 px-5 py-3 text-left font-semibold text-primary transition hover:border-secondary/50 data-[state=active]:border-secondary data-[state=active]:bg-secondary/15 data-[state=active]:text-secondary"
                            >
                                {service.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <TabsContent value={currentService.title} className="space-y-10">
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/80 shadow-soft backdrop-blur">
                            <Image
                                src={currentService.image}
                                alt={currentService.title}
                                width={1200}
                                height={720}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                            <div className="space-y-5">
                                <h2 className="text-2xl font-semibold text-primary">{currentService.title}</h2>
                                <p className="text-base text-gray">{currentService.intro}</p>
                                <div className="rounded-3xl border border-secondary/20 bg-secondary/10 p-6">
                                    <h3 className="mb-3 text-lg font-semibold text-primary">Beneficios clave</h3>
                                    <ul className="space-y-3 text-sm text-gray">
                                        {currentService.benefits.map((benefit) => (
                                            <li key={benefit} className="flex items-start gap-3">
                                                <CheckCheck className="mt-0.5 size-4 shrink-0 text-secondary" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {currentService.focus.map((paragraph) => (
                                    <p key={paragraph} className="text-sm text-gray">
                                        {paragraph}
                                    </p>
                                ))}
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b58c4b]"
                                >
                                    <PhoneCall className="size-5" />
                                    Reserva tu evaluación
                                </Link>
                            </div>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {currentService.faqs.map((faq) => (
                                <AccordionItem
                                    key={faq.question}
                                    value={faq.question}
                                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/70 shadow-soft backdrop-blur"
                                >
                                    <AccordionTrigger className="px-5 py-4 text-left text-sm font-semibold text-primary">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-5 pb-5 text-sm text-gray">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}
