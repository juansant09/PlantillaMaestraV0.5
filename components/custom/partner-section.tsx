import Image from 'next/image'

const partnerLogos = [
    { src: '/images/logo-1.svg', alt: 'Logo colaborador 1' },
    { src: '/images/logo-3.svg', alt: 'Logo colaborador 2' },
    { src: '/images/logo-4.svg', alt: 'Logo colaborador 3' },
    { src: '/images/logo-5.svg', alt: 'Logo colaborador 4' },
    { src: '/images/logo-6.svg', alt: 'Logo colaborador 5' },
    { src: '/images/logo-7.svg', alt: 'Logo colaborador 6' },
]

export default function PartnerSection() {
    const marqueeItems = [...partnerLogos, ...partnerLogos]

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
