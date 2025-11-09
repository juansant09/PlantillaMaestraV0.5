'use client'

import SectionHeading from '@/components/custom/section-heading'
import {
    CalendarDays,
    Eye,
    Headset,
    MessageSquareMore,
    PhoneCall,
    ShieldCheck,
} from 'lucide-react'
import { CLINICA } from '@/config/clinic'

const iconMap = {
    ShieldCheck,
    Eye,
    Headset,
    PhoneCall,
    MessageSquareMore,
}

export default function AppointmentSection() {
    const motivos = CLINICA.agenda.motivos
    const recordatorios = CLINICA.agenda.recordatorios
    const calendlyUrl = CLINICA.agenda.url

    return (
        <div className="container grid items-center gap-12 py-16 lg:py-20 xl:grid-cols-2 xl:gap-[100px]">
            <div>
                <SectionHeading
                    tag="Agenda"
                    title={
                        <>
                            Agenda una cita
                            <span className="font-normal italic">
                                &nbsp;en menos de dos minutos
                            </span>
                        </>
                    }
                    className="mb-0"
                />
                <div className="mt-10 divide-y-2 divide-dashed divide-secondary/15 xl:max-w-lg">
                    {motivos.map((motivo) => {
                        const Icon = iconMap[motivo.icon as keyof typeof iconMap] ?? ShieldCheck
                        return (
                            <div key={motivo.titulo} className="flex gap-5 px-4 py-4 first:pb-4">
                                <span className="mt-0.5 text-secondary">
                                    <Icon className="size-8 shrink-0" />
                                </span>
                                <div>
                                    <h3 className="mb-1.5 text-lg font-semibold text-primary">
                                        {motivo.titulo}
                                    </h3>
                                    <p className="text-sm text-gray lg:text-base">
                                        {motivo.descripcion}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-secondary/15 bg-white shadow-[0_20px_60px_rgba(76,82,96,0.15)] backdrop-blur">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,236,242,0.6),transparent_55%)]" />
                <div className="relative flex h-full flex-col gap-6 p-6 sm:p-10">
                    <div className="flex items-start gap-3 rounded-2xl border border-secondary/20 bg-white/80 p-4 shadow-[0_12px_30px_rgba(84,88,102,0.12)]">
                        <span className="rounded-full bg-secondary/15 p-2 text-secondary">
                            <CalendarDays className="size-6" />
                        </span>
                        <div>
                            <h3 className="text-xl font-semibold text-primary">
                                Agenda tu cita online
                            </h3>
                            <p className="text-sm text-gray lg:text-base">
                                Selecciona el horario disponible que mejor se adapte a ti e incluye notas para nuestro equipo. Calendly enviará confirmación y recordatorios automáticos.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-secondary/15 bg-white shadow-[0_10px_40px_rgba(82,86,97,0.12)]">
                        <iframe
                            src={`${calendlyUrl}?hide_landing_page_details=1&hide_event_type_details=1`}
                            title="Reservar cita con Ecofet"
                            className="h-[620px] w-full"
                            allowFullScreen
                        />
                    </div>

                    <div className="grid gap-4 rounded-2xl border border-secondary/10 bg-gradient-to-br from-white/90 to-accent/70 p-5 text-sm text-gray">
                        {recordatorios.map((recordatorio) => {
                            const Icon =
                                iconMap[recordatorio.icon as keyof typeof iconMap] ?? MessageSquareMore
                            return (
                                <div key={recordatorio.texto} className="flex items-center gap-3">
                                    <Icon className="size-5 text-secondary" />
                                    <span>{recordatorio.texto}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
