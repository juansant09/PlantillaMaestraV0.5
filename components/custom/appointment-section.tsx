'use client'

import Image from 'next/image'
import SectionHeading from '@/components/custom/section-heading'
import { Textarea } from '@/components/ui/textarea'
import {
    CalendarDays,
    Cross,
    Eye,
    Headset,
    MessageSquareMore,
    PhoneCall,
    ShieldCheck,
    User2,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { format } from 'date-fns'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export default function AppointmentSection() {
    const [date, setDate] = useState<Date>()
    return (
        <div className="container items-center grid gap-12 py-16 lg:py-20 xl:grid-cols-2 xl:gap-[100px]">
            <div>
                <SectionHeading
                    tag="Cita"
                    title={
                        <>
                            Aceptamos nuevos pacientes
                            <span className="font-normal italic">
                                &nbsp;con cuidado excepcional
                            </span>
                        </>
                    }
                    className="mb-0"
                />
                <div className="mt-10 divide-y-2 divide-dashed divide-secondary/20 xl:max-w-lg">
                    <div className="flex gap-5 px-4 pb-4">
                        <span className="mt-0.5 text-secondary">
                            <ShieldCheck className="size-8 shrink-0" />
                        </span>
                        <div>
                            <h3 className="mb-1.5 text-lg font-semibold text-primary">
                                Servicios seguros y confiables
                            </h3>
                            <p className="text-sm text-gray lg:text-base">
                                Priorizamos su seguridad con tratamientos confiables y tecnología médica de vanguardia.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5 px-4 py-4">
                        <span className="mt-0.5 text-secondary">
                            <Eye className="size-8 shrink-0" />
                        </span>
                        <div>
                            <h3 className="mb-1.5 text-lg font-semibold text-primary">
                                Soluciones expertas en salud visual
                            </h3>
                            <p className="text-sm text-gray lg:text-base">
                                Nuestro equipo especializado ofrece diagnósticos precisos y cirugías diseñadas para mejorar su visión y comodidad.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5 px-4 py-4">
                        <span className="mt-0.5 text-secondary">
                            <Headset className="size-8 shrink-0" />
                        </span>
                        <div>
                            <h3 className="mb-1.5 text-lg font-semibold text-primary">
                                Soporte 24/7
                            </h3>
                            <p className="text-sm text-gray lg:text-base">
                                Nuestro personal está disponible a toda hora para atender cualquier necesidad médica que surja.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <div className="relative overflow-hidden rounded-xl border border-secondary/15 bg-white shadow-[0px_5px_60px_rgba(0,0,0,0.05)]">
                    <div className="flex h-full flex-col bg-linear-to-br from-secondary/10 to-white p-5 sm:px-14 sm:py-10">
                        <Image
                            src="/images/clinica-vitalis-icon-bolso-medico.webp"
                            alt="Icono de bolso médico"
                            width={208}
                            height={208}
                            className="absolute left-1/2 top-1/2 h-auto w-52 -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.08]"
                        />
                        <h3 className="relative mb-5 text-2xl font-bold text-primary">
                            Pide tu cita
                        </h3>
                        <form className="relative grow space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="relative">
                                    <span className="absolute left-2.5 top-1/2 z-1 -translate-y-1/2">
                                        <User2 className="size-5 text-secondary" />
                                    </span>
                                    <Input
                                        type="text"
                                        placeholder="Nombre completo"
                                        className="pl-10"
                                    />
                                </div>
                                <div className="relative">
                                    <span className="absolute left-2.5 top-1/2 z-1 -translate-y-1/2">
                                        <PhoneCall className="size-5 text-secondary" />
                                    </span>
                                    <Input
                                        type="tel"
                                        placeholder="Número de contacto"
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <Select>
                                    <SelectTrigger className="flex w-full items-center gap-3 border-y border-t-transparent border-b-gray-light bg-transparent px-2.5 py-3.5 text-left text-base/5 font-medium text-gray focus:borde-b-secondary focus:text-secondary">
                                        <Cross className="size-5 text-secondary" />
                                        <SelectValue placeholder="Seleccionar servicio" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="dental">
                                            Dental
                                        </SelectItem>
                                        <SelectItem value="pediatric">
                                            Pediátrico
                                        </SelectItem>
                                        <SelectItem value="gynecology">
                                            Ginecológico
                                        </SelectItem>
                                        <SelectItem value="cardiology">
                                            Cardiología
                                        </SelectItem>
                                        <SelectItem value="neurology">
                                            Neurología
                                        </SelectItem>
                                        <SelectItem value="other">
                                            Otros
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <button
                                            type="button"
                                            className={cn(
                                                'relative w-full border-y border-t-transparent border-b-gray-light bg-transparent py-3.5 pl-10 pr-4 text-left text-base/5 font-medium text-primary focus:border-b-secondary',
                                                !date && 'text-gray',
                                            )}
                                        >
                                            <CalendarDays className="absolute left-2.5 top-1/2 z-1 size-5 -translate-y-1/2 text-secondary" />
                                            {date ? (
                                                format(date, 'PPP')
                                            ) : (
                                                <span className="-mb-1">
                                                    DD/MM/YYYY
                                                </span>
                                            )}
                                        </button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="start"
                                        className="w-[260px] overflow-hidden rounded-lg border-secondary/20 bg-white p-0"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="relative">
                                <span className="absolute left-2.5 top-4 z-1">
                                    <MessageSquareMore className="size-5 text-secondary" />
                                </span>
                                <Textarea
                                    placeholder="Mensaje"
                                    rows={5}
                                    className="form-textarea pl-10"
                                ></Textarea>
                            </div>
                            <Button type="button" className="mt-2!">
                                Pide tu cita
                            </Button>
                        </form>
                    </div>
                </div>
            </>
        </div>
    )
}
