import Image from 'next/image'
import { CLINICA } from '@/config/clinic'

const clinic = CLINICA ?? ({} as typeof CLINICA)
const partners = Array.isArray(clinic.partners) ? clinic.partners : []
const fallbackPartners = Array.isArray(clinic.imagenes?.partners) ? clinic.imagenes.partners : []
const logos = (partners.length ? partners : fallbackPartners) as Array<{ src?: string; alt?: string }>

export default function PartnerSection() {
    const items = logos.length ? [...logos, ...logos] : []

    return (
        <div className="overflow-hidden bg-gray-light/50 py-10">
            <div className="flex animate-[marquee_4s_linear_infinite] gap-10 whitespace-nowrap text-sm font-medium text-black sm:animate-[marquee_30s_linear_infinite] sm:text-xl">
                {items.map((logo, index) => (
                    <Image
                        key={`${logo?.src ?? 'partner'}-${index}`}
                        src={logo?.src ?? '/images/logo-1.svg'}
                        alt={logo?.alt ?? 'Socio estrategico'}
                        width={160}
                        height={38}
                        className="mx-5 w-36 shrink-0 duration-300 hover:scale-110 hover:opacity-80"
                    />
                ))}
            </div>
        </div>
    )
}
