import type { Metadata } from 'next'
import type { CSSProperties, ReactNode } from 'react'
import '@/app/globals.css'
import AOSProvider from '@/components/custom/aos-provider'
import ScrollToTopBtn from '@/components/custom/scroll-to-top-btn'
import WhatsAppWidget from '@/components/custom/whatsapp-widget'
import { CLINICA } from '@/config/clinic'
import helper from '@/lib/helper'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-dm-sans',
})

const hexToRgb = (hex: string) => {
    if (!hex) return '0 0 0'
    const normalized = hex.replace('#', '')
    const bigint = parseInt(normalized.length === 3 ? normalized.repeat(2) : normalized, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r} ${g} ${b}`
}

const clinic = CLINICA ?? ({} as typeof CLINICA)
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://clinicavitalis.com'
const clinicColors = clinic.colores ?? {}
const colors = {
    fondo: clinicColors.fondo ?? '#f9f9f9',
    primario: clinicColors.primario ?? '#111111',
    secundario: clinicColors.secundario ?? '#333333',
}
const seo = clinic.seo ?? {}
const colorVariables = {
    '--color-base': colors.fondo,
    '--color-base-rgb': hexToRgb(colors.fondo),
    '--color-primario': colors.primario,
    '--color-primario-rgb': hexToRgb(colors.primario),
    '--color-secundario': colors.secundario,
    '--color-secundario-rgb': hexToRgb(colors.secundario),
} as CSSProperties

export const metadata: Metadata = {
    title: seo.titulo ?? 'Clínica Vitalis',
    description: seo.descripcion ?? 'Clínica especializada en medicina estética y bienestar.',
    keywords: seo.palabrasClave ?? 'medicina estética, clínica vitalis',
    openGraph: {
        ...helper.openGraphData,
        title: seo.titulo ?? 'Clínica Vitalis',
        description: seo.descripcion ?? 'Clínica especializada en medicina estética y bienestar.',
        url: appUrl,
        type: 'website',
    },
    alternates: {
        canonical: appUrl,
    },
    twitter: {
        site: '@clinicavitalis',
        title: seo.titulo ?? 'Clínica Vitalis',
        description: seo.descripcion ?? 'Clínica especializada en medicina estética y bienestar.',
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
        <html lang="es" className="scroll-smooth" style={colorVariables}>
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
