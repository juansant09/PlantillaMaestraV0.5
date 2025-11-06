import {
    Apple,
    Droplet,
    Flower2,
    Sparkles,
    SunMedium,
    Syringe,
    Waves,
    Zap,
} from 'lucide-react'

export interface IServiceData {
    id: number
    icon: any
    title: string
    description?: string
    image?: string
}

export const serviceListings: IServiceData[] = [
    {
        id: 1,
        icon: Sparkles,
        title: 'Hilos tensores',
        description:
            'Elevación inmediata y natural del óvalo facial con protocolos personalizados y resultados de larga duración.',
        image: '/imagenes-ecofet/hilos-tensores.jpg',
    },
    {
        id: 2,
        icon: Syringe,
        title: 'Botox',
        description:
            'Relajación selectiva de líneas de expresión manteniendo la gestualidad y frescura del rostro.',
        image: '/imagenes-ecofet/botox.jpg',
    },
    {
        id: 3,
        icon: Droplet,
        title: 'Ácido hialurónico',
        description:
            'Armonización facial con rellenos estratégicos para aportar volumen, hidratación y luminosidad.',
        image: '/imagenes-ecofet/acido-hialuronico.jpg',
    },
    {
        id: 4,
        icon: SunMedium,
        title: 'Eliminaci\ón de manchas',
        description:
            'Peelings médicos e IPL para unificar el tono, difuminar discromías y revelar una piel radiante.',
        image: '/imagenes-ecofet/eliminacion-manchas.jpg',
    },
    {
        id: 5,
        icon: Waves,
        title: 'Tratamientos corporales',
        description:
            'Tecnología de modelado, reafirmación y drenaje para redefinir la silueta con resultados visibles.',
        image: '/imagenes-ecofet/tratamientos-corporales.jpg',
    },
    {
        id: 6,
        icon: Flower2,
        title: 'Rejuvenecimiento facial',
        description:
            'Bioestimuladores, luz LED y vitaminas que devuelven firmeza, suavidad y glow a tu piel.',
        image: '/imagenes-ecofet/hero-about.jpg',
    },
    {
        id: 7,
        icon: Apple,
        title: 'Nutrición estética',
        description:
            'Planes nutricionales integrales que potencian los tratamientos y sostienen resultados duraderos.',
        image: '/imagenes-ecofet/nutricion-estetica.jpg',
    },
    {
        id: 8,
        icon: Zap,
        title: 'Depilación láser',
        description:
            'Láser de última generación con enfriamiento dinámico para una piel suave, sin vello y sin molestias.',
        image: '/imagenes-ecofet/depilacion-laser.jpg',
    },
]
