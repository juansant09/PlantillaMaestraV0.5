import { buttonVariants } from '@/components/ui/button'
import helper from '@/lib/helper'
import { HeartPulse } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '404 | Clínica Vitalis',
    description:
        'La página solicitada no existe. Regresa al inicio para seguir navegando por Clínica Vitalis.',
    openGraph: {
        ...helper.openGraphData,
        title: '404 | Clínica Vitalis',
        description:
            'La página solicitada no existe. Encuentra toda la información en nuestro inicio.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function NotFound() {
    return (
        <div className="grid min-h-screen place-content-center py-10 text-center">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <HeartPulse className="flipheart size-72 shrink-0 text-primary opacity-5 sm:size-[450px]" />
            </span>
            <div className="relative z-2">
                <h1 className="font-forum relative animate-pulse text-center text-9xl/[100px] font-semibold uppercase tracking-widest text-secondary/70 sm:text-[200px]/[150px]">
                    404
                </h1>
                <div className="font-forum relative my-5 text-2xl font-semibold capitalize tracking-wider text-primary md:text-3xl/10 lg:mb-10 xl:text-4xl/[50px]">
                    ¡Página no encontrada!
                </div>
                <div>
                    <Link href="/" className={buttonVariants()}>
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}
