import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '@/app/globals.css'
import AOSProvider from '@/components/custom/aos-provider'
import ScrollToTopBtn from '@/components/custom/scroll-to-top-btn'
import WhatsAppWidget from '@/components/custom/whatsapp-widget'
import helper from '@/lib/helper'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-dm-sans',
})

const appUrl = process.env.NEXT_PUBLIC_APP_URL

export const metadata: Metadata = {
    title: 'Cl\u00ednica Vitalis | Medicina moderna y cuidado humano',
    description:
        'Cl\u00ednica Vitalis combina tecnolog\u00eda m\u00e9dica avanzada, especialistas certificados y cercan\u00eda humana para ofrecer cardiolog\u00eda, pediatr\u00eda, ortopedia y m\u00e1s servicios premium.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Cl\u00ednica Vitalis | Medicina moderna y cuidado humano',
        description:
            'Salud integral con tecnolog\u00eda de vanguardia, seguimiento personalizado y un equipo experto comprometido con tu bienestar.',
        url: appUrl,
        type: 'website',
    },
    alternates: {
        canonical: appUrl,
    },
    twitter: {
        site: '@clinicavitalis',
        title: 'Cl\u00ednica Vitalis',
        description:
            'Medicina moderna con tecnolog\u00eda avanzada y cuidado humano. Agenda tu cita en Cl\u00ednica Vitalis.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <body
                className={`${dmSans.variable} min-h-screen bg-transparent text-sm font-medium antialiased lg:text-base lg:leading-[1.65]`}
            >
                <AOSProvider>
                    {children}
                    <WhatsAppWidget />
                    <ScrollToTopBtn />
                </AOSProvider>
            </body>
        </html>
    )
}
