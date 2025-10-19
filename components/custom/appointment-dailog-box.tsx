'use client'

import Image from 'next/image'
import {
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    Phone,
    Cross,
    User2,
    MessageSquareMore,
    CalendarDays,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { format } from 'date-fns'

export default function AppointmentDailogBox() {
    const [date, setDate] = useState<Date>()
    return (
        <>
            <Image
                src="/images/clinica-vitalis-icon-bolso-medico.webp"
                alt="Icono de bolso médico"
                width={208}
                height={208}
                className="absolute left-1/2 top-1/2 h-auto w-52 -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.08]"
            />
            <DialogHeader className="relative p-5 pb-3.5 sm:px-10 sm:pt-7">
                <DialogTitle className="text-2xl text-left font-bold text-primary">
                    Pide tu cita
                </DialogTitle>
                <DialogDescription></DialogDescription>
            </DialogHeader>
            <form className="space-y-5 relative z-1 border-t border-t-gray/10 p-5 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
                            <User2 className="size-5 text-secondary" />
                        </span>
                        <Input
                            type="text"
                            placeholder="Nombre"
                            className="pl-10"
                        />
                    </div>
                    <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
                            <Phone className="size-5 text-secondary" />
                        </span>
                        <Input
                            type="text"
                            placeholder="Teléfono"
                            className="pl-10"
                        />
                    </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                    <Select>
                        <SelectTrigger className="flex w-full items-center gap-3 border-b border-gray-light bg-transparent px-2.5 py-3.5 text-left text-base/5 font-medium text-gray focus:border-secondary focus:text-secondary">
                            <Cross className="size-5 text-secondary" />
                            <SelectValue placeholder="Seleccionar servicio" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="dental">Dental</SelectItem>
                            <SelectItem value="pediatric">Pediátrico</SelectItem>
                            <SelectItem value="gynecology">
                                Ginecología
                            </SelectItem>
                            <SelectItem value="cardiology">
                                Cardiología
                            </SelectItem>
                            <SelectItem value="neurology">Neurología</SelectItem>
                            <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                    </Select>
                    <Popover>
                        <PopoverTrigger asChild>
                            <button
                                type="button"
                                className={cn(
                                    'relative w-full border-b border-gray-light bg-transparent py-3.5 pl-10 pr-4 text-left text-base/5 font-medium text-primary focus:border-secondary',
                                    !date && 'text-gray',
                                )}
                            >
                                <CalendarDays className="absolute left-2.5 top-1/2 z-1 size-5 -translate-y-1/2 text-secondary" />
                                {date ? (
                                    format(date, 'PPP')
                                ) : (
                                    <span className="-mb-1">DD/MM/YYYY</span>
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
                    <span className="absolute left-2.5 top-4">
                        <MessageSquareMore className="size-5 text-secondary" />
                    </span>
                    <Textarea
                        placeholder="Mensaje"
                        rows={5}
                        className="pl-10"
                    ></Textarea>
                </div>
                <Button type="button" className="mt-2">
                    Pide tu cita
                </Button>
            </form>
        </>
    )
}
