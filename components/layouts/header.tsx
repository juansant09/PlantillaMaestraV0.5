'use client'

import Link from 'next/link'
import { CalendarClock, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import Sidebar from '@/components/layouts/sidebar'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import NavLinks from '@/components/layouts/nav-links'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import AppointmentDailogBox from '@/components/custom/appointment-dailog-box'
import IconMenu from '@/components/icons/icon-menu'
import Image from 'next/image'
import { CLINICA } from '@/config/clinic'

const clinic = CLINICA ?? ({} as typeof CLINICA)
const images = clinic.imagenes ?? {}
const heroCtas = Array.isArray(clinic.hero?.ctas) ? clinic.hero.ctas : []

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const pathName = usePathname()
    useEffect(() => {
        setIsOpen(false)
    }, [pathName])

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            id="top-header"
            className={`header sticky top-0 z-50 transition-colors duration-300 ${
                isScrolled
                    ? 'bg-primary/90 backdrop-blur-md shadow-[0_18px_32px_rgba(12,10,10,0.35)]'
                    : 'bg-transparent'
            } lg:top-3`}
        >
            <div className="container py-2 lg:py-0">
                <div className="header-surface flex items-center justify-between rounded-2xl border border-white/10 bg-primary/85 px-4 py-3 shadow-[0_18px_48px_rgba(12,10,10,0.38)] backdrop-blur-lg transition lg:px-6 xl:px-8">
                    <div className="shrink-0">
                        <Link
                            href="/"
                            className="relative inline-flex"
                            aria-label={`Inicio ${clinic.nombre ?? 'Clínica Vitalis'}`}
                        >
                            <Image
                                src={images.logo ?? '/images/logo-header.svg'}
                                alt={`Logotipo ${clinic.nombre ?? 'Clínica Vitalis'}`}
                                width={200}
                                height={80}
                                className="h-10 w-auto md:h-14"
                                priority
                            />
                        </Link>
                    </div>

                    <NavLinks className="hidden xl:flex" />

                    <div className="flex shrink-0 items-center justify-end gap-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    type="button"
                                    className="btn hidden whitespace-nowrap bg-secondary px-5 text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition hover:bg-secondary/80 lg:flex"
                                >
                                    <CalendarClock className="size-5 shrink-0" />
                                    {heroCtas[0]?.label ?? 'Agenda tu cita'}
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="border-none bg-white/95 backdrop-blur-lg">
                                <AppointmentDailogBox />
                            </DialogContent>
                        </Dialog>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button
                                    type="button"
                                    className="grid size-11 place-content-center rounded-xl border border-white/15 bg-white/10 text-white transition hover:bg-white/15 hover:text-secondary"
                                >
                                    <IconMenu className="size-6 shrink-0" />
                                    <span className="sr-only">Menú</span>
                                </button>
                            </SheetTrigger>
                            <SheetContent className="bg-primary text-white">
                                <SheetTitle />
                                <SheetDescription />
                                <SheetClose asChild>
                                    <button
                                        type="button"
                                        className="absolute right-4 top-4 text-right transition hover:opacity-70 xl:right-9 xl:top-9"
                                    >
                                        <X className="size-7 shrink-0" />
                                        <span className="sr-only">Cerrar</span>
                                    </button>
                                </SheetClose>
                                <Sidebar />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}





