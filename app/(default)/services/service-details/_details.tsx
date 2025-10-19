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
        title: 'Medicina general',
        image:
            'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        intro:
            'Nuestro equipo de medicina general acompaña tu salud día a día con diagnósticos integrales, seguimiento de enfermedades crónicas y planes preventivos personalizados.',
        benefits: [
            'Chequeos periódicos y evaluación completa de indicadores de salud.',
            'Coordinación con especialistas cuando el caso lo requiere.',
            'Educación sanitaria para adoptar hábitos saludables sostenibles.',
        ],
        focus: [
            'Trabajamos con historias clínicas digitales y análisis completos para ofrecer una visión global de tu bienestar. Cada consulta incluye tiempo para escuchar tus inquietudes y diseñar un plan claro.',
            'También brindamos orientación sobre vacunación, control de peso, nutrición y manejo del estrés para ayudarte a mantener un estilo de vida equilibrado.',
        ],
        faqs: [
            {
                question: '¿Con qué frecuencia debo agendar un chequeo general?',
                answer:
                    'Recomendamos al menos una consulta anual. Si tienes alguna condición crónica, coordinamos controles trimestrales o semestrales para monitorear tu progreso.',
            },
            {
                question: '¿Pueden recetar estudios o derivaciones?',
                answer:
                    'Sí. Nuestros médicos generales evalúan cada caso y solicitan análisis, imágenes o derivaciones a especialistas cuando es necesario.',
            },
            {
                question: '¿Atienden urgencias leves?',
                answer:
                    'Contamos con cupos diarios para urgencias menores como infecciones, golpes o descompensaciones. Para emergencias severas, disponemos de un protocolo de derivación inmediata.',
            },
        ],
    },
    {
        title: 'Pediatría',
        image:
            'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        intro:
            'Acompañamos el crecimiento de tus hijos desde el nacimiento hasta la adolescencia con controles, vacunación y orientación sobre desarrollo.',
        benefits: [
            'Consultas cálidas que generan confianza en los niños.',
            'Seguimiento nutricional, pautas de sueño y control del crecimiento.',
            'Detección temprana de trastornos del desarrollo y apoyo familiar.',
        ],
        focus: [
            'Creamos un ambiente amigable para que cada visita sea una experiencia positiva. Explicamos cada procedimiento y respondemos las dudas de las familias con claridad.',
            'Nos coordinamos con colegios y especialistas en caso de requerir apoyo adicional, garantizando una red de contención integral.',
        ],
        faqs: [
            {
                question: '¿Cuándo debería llevar a mi bebé a su primer control?',
                answer:
                    'Recomendamos una evaluación dentro del primer mes de vida y controles periódicos según el calendario de crecimiento y vacunación.',
            },
            {
                question: '¿Administran todas las vacunas oficiales?',
                answer:
                    'Sí. Aplicamos el calendario nacional e informamos sobre vacunas opcionales. También emitimos recordatorios para que no pierdas ninguna dosis.',
            },
            {
                question: '¿Atienden urgencias pediátricas?',
                answer:
                    'Contamos con atención prioritaria para cuadros febriles, golpes o alergias. En casos graves coordinamos derivaciones inmediatas.',
            },
        ],
    },
    {
        title: 'Cardiología',
        image:
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        intro:
            'Realizamos diagnósticos precisos y planes de tratamiento personalizados para prevenir, detectar y tratar enfermedades cardiovasculares.',
        benefits: [
            'Electrocardiogramas y ecocardiogramas con tecnología digital.',
            'Programas de control para hipertensión y colesterol.',
            'Rehabilitación cardíaca supervisada por especialistas.',
        ],
        focus: [
            'Nos enfocamos en identificar factores de riesgo y acompañarte con cambios de estilo de vida, medicación adecuada y controles periódicos.',
            'Trabajamos en conjunto con nutricionistas y especialistas en actividad física para diseñar rutinas seguras que favorezcan tu recuperación.',
        ],
        faqs: [
            {
                question: '¿Qué síntomas deberían motivar una consulta cardiológica?',
                answer:
                    'Dolor u opresión en el pecho, palpitaciones, falta de aire, mareos o antecedentes familiares requieren una evaluación temprana para descartar riesgos.',
            },
            {
                question: '¿Realizan pruebas de esfuerzo y estudios funcionales?',
                answer:
                    'Sí, contamos con ergometrías, holter y otros estudios que permiten valorar el rendimiento cardíaco y ajustar el tratamiento adecuado.',
            },
            {
                question: '¿Ofrecen programas de rehabilitación cardíaca?',
                answer:
                    'Disponemos de planes supervisados por cardiólogos y fisioterapeutas que facilitan la recuperación progresiva después de un evento cardíaco o una cirugía.',
            },
        ],
    },
    {
        title: 'Ortopedia',
        image:
            'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        intro:
            'Cuidamos el sistema musculoesquelético con diagnósticos precisos, tratamientos mínimamente invasivos y rehabilitación personalizada.',
        benefits: [
            'Atención integral para lesiones deportivas y traumatológicas.',
            'Tecnología de imagen de alta definición para diagnósticos oportunos.',
            'Planes de rehabilitación coordinados con fisioterapeutas especializados.',
        ],
        focus: [
            'Evaluamos tu movilidad, historial clínico y objetivos funcionales para definir un tratamiento a medida que acelere la recuperación.',
            'Integramos medicina regenerativa, fisioterapia avanzada y seguimiento constante para asegurar resultados duraderos.',
        ],
        faqs: [
            {
                question: '¿Atienden lesiones deportivas?',
                answer:
                    'Sí, contamos con especialistas en medicina deportiva que evalúan y rehabilitan desgarros, esguinces y fracturas.',
            },
            {
                question: '¿Ofrecen férulas o prótesis personalizadas?',
                answer:
                    'Trabajamos con proveedores certificados para confeccionar órtesis, prótesis y plantillas adaptadas a cada paciente.',
            },
            {
                question: '¿Cómo es el proceso de rehabilitación?',
                answer:
                    'Luego del diagnóstico, creamos un plan con ejercicios supervisados, control del dolor y seguimiento semanal para medir avances.',
            },
        ],
    },
    {
        title: 'Dermatología',
        image:
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        intro:
            'Cuidamos tu piel con diagnósticos precisos y procedimientos mínimamente invasivos para tratar afecciones dermatológicas y estéticas.',
        benefits: [
            'Dermatoscopía digital para detección temprana.',
            'Tratamientos para acné, rosácea, psoriasis y alergias.',
            'Procedimientos estéticos seguros como peelings y luz pulsada.',
        ],
        focus: [
            'Analizamos cada caso considerando antecedentes, estilo de vida y objetivos estéticos. Ofrecemos tratamientos efectivos con recuperación rápida.',
            'Educamos sobre protección solar, rutinas de cuidado y hábitos para mantener una piel saludable durante todo el año.',
        ],
        faqs: [
            {
                question: '¿Atienden lunares y lesiones sospechosas?',
                answer:
                    'Sí, realizamos controles de lunares y biopsias en caso de detectar lesiones que requieran estudio histopatológico.',
            },
            {
                question: '¿Los tratamientos estéticos tienen tiempo de inactividad?',
                answer:
                    'Indicamos procedimientos con mínimas molestias y tiempos de recuperación cortos, junto con instrucciones claras para el cuidado posterior.',
            },
            {
                question: '¿Tratan afecciones capilares?',
                answer:
                    'Disponemos de opciones para caída del cabello, dermatitis seborreica y otros trastornos del cuero cabelludo.',
            },
        ],
    },
    {
        title: 'Odontología',
        image: '/images/dental-img.jpg',
        intro:
            'Brindamos odontología integral para todas las edades, enfocada en prevención, estética y rehabilitación funcional.',
        benefits: [
            'Limpiezas y controles periódicos para mantener una sonrisa sana.',
            'Odontopediatría y ortodoncia para niños y adolescentes.',
            'Implantes, prótesis y rehabilitación estética avanzada.',
        ],
        focus: [
            'Utilizamos tecnología digital para planificar tratamientos con precisión y reducir los tiempos en consultorio.',
            'Cuidamos tu experiencia con anestesia indolora, ambientes relajados y explicaciones claras antes de cada procedimiento.',
        ],
        faqs: [
            {
                question: '¿Atienden urgencias odontológicas?',
                answer:
                    'Sí, contamos con guardias para dolor intenso, fracturas dentales y otras urgencias que requieran resolución inmediata.',
            },
            {
                question: '¿Ofrecen planes de ortodoncia invisibles?',
                answer:
                    'Disponemos de alineadores transparentes y alternativas estéticas que se adaptan a tus necesidades y estilo de vida.',
            },
            {
                question: '¿Realizan tratamientos de estética dental?',
                answer:
                    'Sí, trabajamos con carillas, blanqueamientos y restauraciones de alta precisión para lograr una sonrisa natural y armónica.',
            },
        ],
    },
]

const Details = () => {
    const defaultTitle = serviceDetails[0].title
    const [currentTab, setCurrentTab] = useState(defaultTitle)
    const searchParams = useSearchParams()
    const router = useRouter()
    const id = searchParams.get('id')

    useEffect(() => {
        if (!id) {
            setCurrentTab(defaultTitle)
            return
        }
        const matchingService = serviceDetails.find(
            (service) => service.title === id,
        )
        if (matchingService) {
            setCurrentTab(matchingService.title)
        } else {
            setCurrentTab(defaultTitle)
        }
    }, [id, defaultTitle])

    const handleTabChange = (newTab: string) => {
        setCurrentTab(newTab)
        router.replace(
            `/services/service-details?id=${encodeURIComponent(newTab)}`,
            { scroll: false },
        )
    }

    return (
        <>
            <HeroSection
                title={currentTab}
                pageName="Detalle del servicio"
                className="bg-[url(/images/service-bg.jpg)]"
            />
            <div className="container py-16 lg:py-20">
                <Tabs
                    value={currentTab}
                    onValueChange={handleTabChange}
                    className="flex flex-col items-start gap-10 lg:flex-row"
                >
                    <TabsList className="top-28 flex shrink-0 flex-row flex-wrap gap-2.5 rounded-2xl bg-gray-light p-3 sm:gap-4 sm:p-5 lg:sticky lg:w-80 lg:flex-col lg:flex-nowrap xl:w-96">
                        {serviceListings.map((service) => (
                            <TabsTrigger
                                value={service.title}
                                key={service.title}
                                className="rounded-xl border border-transparent bg-white px-4 py-3 text-left font-semibold text-primary transition hover:border-secondary/40 hover:text-secondary data-[state=active]:border-secondary/60 data-[state=active]:bg-secondary/10 data-[state=active]:text-secondary"
                            >
                                {service.title}
                            </TabsTrigger>
                        ))}

                        <div className="group relative mt-4 hidden w-full overflow-hidden rounded-2xl lg:block">
                            <Image
                                src="/images/clinica-vitalis-equipo-especialista-4.webp"
                                width={344}
                                height={430}
                                alt="Equipo de guardia"
                                className="absolute inset-0 object-cover"
                            />
                            <div className="relative z-10 pt-48 text-center">
                                <div className="relative mx-auto -mb-6 grid size-14 place-content-center rounded-full border-2 border-white bg-primary text-white transition group-hover:bg-white group-hover:text-secondary">
                                    <PhoneCall className="size-6" />
                                </div>
                                <div className="bg-secondary/90 p-8 text-white">
                                    <p className="text-xl">
                                        LUN-SAB 8:00 - 21:00 h
                                    </p>
                                    <Link
                                        href="tel:+34613296952"
                                        className="mt-3 block text-2xl font-semibold underline-offset-2 transition hover:underline"
                                    >
                                        +34 613 29 69 52
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </TabsList>
                    <div className="grow">
                        {serviceDetails.map((detail) => (
                            <TabsContent key={detail.title} value={detail.title}>
                                <div className="h-96 overflow-hidden rounded-xl">
                                    <Image
                                        src={detail.image}
                                        alt={detail.title}
                                        width={1016}
                                        height={384}
                                        className="h-full w-full object-cover"
                                        priority={detail.title === currentTab}
                                    />
                                </div>
                                <div className="prose mt-10 w-full max-w-none lg:prose-lg">
                                    <div>
                                        <h3>{detail.title}</h3>
                                        <p>{detail.intro}</p>
                                    </div>
                                    <div>
                                        <h3>¿Por qué elegir este servicio?</h3>
                                        <ul>
                                            {detail.benefits.map((benefit) => (
                                                <li key={benefit}>
                                                    <CheckCheck className="mr-2 inline size-4 text-secondary" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {detail.focus.map((text) => (
                                        <p key={text}>{text}</p>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-2xl font-semibold lg:text-3xl">
                                        Preguntas frecuentes
                                    </h3>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="mt-5 space-y-4"
                                    >
                                        {detail.faqs.map((faq) => (
                                            <AccordionItem
                                                key={faq.question}
                                                value={faq.question}
                                            >
                                                <AccordionTrigger>
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </>
    )
}

export default Details
