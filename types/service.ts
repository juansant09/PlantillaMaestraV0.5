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
import { CLINICA } from '@/config/clinic'

export interface IServiceData {
    id: number
    icon: any
    title: string
    description?: string
    image?: string
}

const iconMap: Record<string, any> = {
    Sparkles,
    Syringe,
    Droplet,
    SunMedium,
    Waves,
    Flower2,
    Apple,
    Zap,
}

const clinic = CLINICA ?? ({} as typeof CLINICA)
const featuredServices = Array.isArray(clinic.serviciosDestacados) ? clinic.serviciosDestacados : []
const defaultServiceImage = clinic.imagenes?.default ?? '/images/centro.jpg'

export const serviceListings: IServiceData[] = featuredServices.map((servicio, index) => ({
    id: index + 1,
    icon: iconMap[servicio?.icon as keyof typeof iconMap] ?? Sparkles,
    title: servicio?.titulo ?? `Tratamiento ${index + 1}`,
    description: servicio?.descripcion ?? '',
    image: servicio?.imagen ?? defaultServiceImage,
}))
