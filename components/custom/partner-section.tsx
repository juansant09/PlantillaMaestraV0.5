import Image from 'next/image'
import { CLINICA } from '@/config/clinic'

export default function PartnerSection() {
    const logos = CLINICA.partners.length ? CLINICA.partners : CLINICA.imagenes.partners
    const marqueeItems = [...logos, ...logos]

    return (
        <div className="overflow-hidden bg-gray-light/50 py-10">
            <div className="flex animate-[marquee_4s_linear_infinite] gap-10 whitespace-nowrap text-sm font-medium text-black sm:animate-[marquee_30s_linear_infinite] sm:text-xl">
                {marqueeItems.map((logo, index) => (
                    <Image
                        key={`${logo.src}-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                        width={160}
                        height={38}
                        className="mx-5 w-36 shrink-0 duration-300 hover:scale-110 hover:opacity-80"
                    />
                ))}
            </div>
        </div>
    )
}
