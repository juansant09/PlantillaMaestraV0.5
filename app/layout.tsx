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

const appUrl = process.env.NEXT_PUBLIC_APP_URL
const colorVariables = {
    '--color-base': CLINICA.colores.fondo,
    '--color-base-rgb': hexToRgb(CLINICA.colores.fondo),
    '--color-primario': CLINICA.colores.primario,
    '--color-primario-rgb': hexToRgb(CLINICA.colores.primario),
    '--color-secundario': CLINICA.colores.secundario,
    '--color-secundario-rgb': hexToRgb(CLINICA.colores.secundario),
} as CSSProperties

export const metadata: Metadata = {
    title: CLINICA.seo.titulo,
    description: CLINICA.seo.descripcion,
    keywords: CLINICA.seo.palabrasClave,
    openGraph: {
        ...helper.openGraphData,
        title: CLINICA.seo.titulo,
        description: CLINICA.seo.descripcion,
        url: appUrl,
        type: 'website',
    },
    alternates: {
        canonical: appUrl,
    },
    twitter: {
        site: '@clinicavitalis',
        title: CLINICA.seo.titulo,
        description: CLINICA.seo.descripcion,
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
