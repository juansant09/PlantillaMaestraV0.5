import {
    Baby,
    Bone,
    HeartPulse,
    ShieldPlus,
    Smile,
    Sparkles,
    Stethoscope,
} from 'lucide-react'

export interface IServiceData {
    id: number
    icon: any
    title: string
    description?: string
}

export const serviceListings: IServiceData[] = [
    {
        id: 1,
        icon: Stethoscope,
        title: 'Medicina general',
        description:
            'Evaluaciones preventivas, seguimiento clínico continuo y planes personalizados con apoyo multidisciplinario.',
    },
    {
        id: 2,
        icon: Baby,
        title: 'Pediatría',
        description:
            'Crecimiento supervisado por especialistas, vacunación segura y acompañamiento familiar basado en evidencia.',
    },
    {
        id: 3,
        icon: HeartPulse,
        title: 'Cardiología',
        description:
            'Diagnóstico cardiovascular avanzado, monitoreo de riesgo y terapias de precisión para un corazón fuerte.',
    },
    {
        id: 4,
        icon: Bone,
        title: 'Ortopedia',
        description:
            'Cuidado integral del sistema musculoesquelético con soluciones quirúrgicas y regenerativas de alta tecnología.',
    },
    {
        id: 5,
        icon: Sparkles,
        title: 'Dermatología',
        description:
            'Tratamientos dermatológicos dermocosméticos y clínicos que restauran la salud y la luminosidad de tu piel.',
    },
    {
        id: 6,
        icon: Smile,
        title: 'Odontología',
        description:
            'Odontología digital, estética y funcional para una sonrisa saludable en cada etapa de la vida.',
    },
]
