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

export const serviceListings: IServiceData[] = CLINICA.serviciosDestacados.map((servicio, index) => ({
    id: index + 1,
    icon: iconMap[servicio.icon] ?? Sparkles,
    title: servicio.titulo,
    description: servicio.descripcion,
    image: servicio.imagen ?? CLINICA.imagenes.default,
}))
