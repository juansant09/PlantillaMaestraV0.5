'use client'

import NavLinks from '@/components/layouts/nav-links'
import {
    CalendarClock,
    Mail,
    MapPin,
    Phone,
    Send,
} from 'lucide-react'
import Link from 'next/link'
import IconFaceBook from '@/components/icons/icon-facebook'
import IconTwitter from '@/components/icons/icon-twitter'
import IconInstagram from '@/components/icons/icon-instagram'
import IconLinkedin from '@/components/icons/icon-linkedin'
import { Input } from '@/components/ui/input'
import { SheetDescription } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import AppointmentDailogBox from '@/components/custom/appointment-dailog-box'
import Image from 'next/image'
import { CLINICA } from '@/config/clinic'

const socials = [
    { href: CLINICA.redes.instagram, icon: IconInstagram, label: 'Instagram' },
    { href: CLINICA.redes.facebook, icon: IconFaceBook, label: 'Facebook' },
    { href: CLINICA.redes.linkedin, icon: IconLinkedin, label: 'LinkedIn' },
    { href: CLINICA.redes.twitter, icon: IconTwitter, label: 'Twitter' },
]

export default function Sidebar() {
    return (
        <div className="flex h-full flex-col justify-between gap-12 bg-primary px-6 pt-6 pb-10 text-white">
            <div className="space-y-8">
                <Link href="/" className="block text-center" aria-label={`Inicio ${CLINICA.nombre}`}>
                    <Image
                        src={CLINICA.imagenes.logo}
                        alt={`Logotipo ${CLINICA.nombre}`}
                        width={220}
                        height={120}
                        className="mx-auto h-auto w-40 md:w-52"
                        priority
                    />
                    <p className="mt-4 text-sm uppercase tracking-[0.38em] text-secondary/90">
                        {CLINICA.slogan}
                    </p>
                </Link>

                <SheetDescription className="text-gray-light">
                    {CLINICA.descripcion}
                </SheetDescription>

                <NavLinks className="flex flex-col xl:hidden" />

                <div className="space-y-6 border-t border-white/10 pt-6">
                    <h3 className="text-lg font-semibold text-secondary">Contáctanos</h3>
                    <div className="flex items-start gap-3 text-gray-light">
                        <MapPin className="mt-0.5 size-5 text-secondary" />
                        <p>{CLINICA.direccion}</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-light">
                        <Mail className="size-5 text-secondary" />
                        <Link href={`mailto:${CLINICA.email}`} className="hover:text-secondary">
                            {CLINICA.email}
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 text-gray-light">
                        <Phone className="size-5 text-secondary" />
                        <Link href={`tel:${CLINICA.telefono.replace(/\s+/g, '')}`} className="hover:text-secondary">
                            {CLINICA.telefono}
                        </Link>
                    </div>
                    <div className="block xl:hidden">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    type="button"
                                    className="mt-5 w-full bg-secondary text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition hover:bg-secondary/80"
                                >
                                    <CalendarClock className="size-5" />
                                    {CLINICA.hero.ctas[0]?.label ?? 'Reserva tu cita'}
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="border-none bg-white/95 backdrop-blur-lg">
                                <AppointmentDailogBox />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="hidden space-y-4 xl:block">
                    <h3 className="text-lg font-semibold text-secondary">Newsletter</h3>
                    <p className="text-sm text-gray-light">
                        Inspírate con nuestras novedades, lanzamientos y rituales de autocuidado.
                    </p>
                    <form className="relative flex">
                        <Input
                            type="email"
                            className="rounded-l-xl border border-transparent bg-white/10 py-3 text-white placeholder:text-gray-light focus:border-secondary"
                            placeholder="Tu correo electrónico"
                        />
                        <button
                            type="submit"
                            className="grid w-12 shrink-0 place-content-center rounded-r-xl bg-secondary text-white transition hover:bg-secondary/80"
                        >
                            <Send className="size-5" />
                            <span className="sr-only">Enviar</span>
                        </button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-6">
                <span className="text-sm uppercase tracking-[0.3em] text-gray-light">Síguenos</span>
                <div className="flex gap-3">
                    {socials.map(({ href, icon: Icon, label }) => (
                        <Link
                            key={label}
                            href={href}
                            className="grid size-9 place-content-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-secondary hover:text-secondary"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon className="size-5" />
                            <span className="sr-only">{label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
