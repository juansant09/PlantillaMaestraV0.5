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
            className={`header sticky top-0 z-50 bg-primary duration-300 lg:top-1 lg:bg-transparent ${isScrolled ? 'lg:mt-1' : 'lg:mt-4'}`}
        >
            <div className="container">
                <div className="header-surface flex items-center justify-between bg-primary py-4 lg:rounded-xl lg:px-5 xl:px-10 xl:py-0">
                    <div className="shrink-0 lg:w-1/4">
                        <div className="relative -mb-8 -mt-[30px] inline-block rounded-b-xl bg-secondary px-4 py-8 before:absolute before:-right-1 before:top-0.5 before:-z-1 before:size-2 before:rotate-45 before:bg-secondary after:absolute after:-left-1 after:top-0.5 after:-z-1 after:hidden after:size-2 after:rotate-45 after:bg-secondary lg:-mb-10 lg:px-6 lg:pb-9 lg:pt-8 lg:after:block">
                            <Link href="/" className="relative">
                                <Image
                                    src="/images/logo-vitalis.svg"
                                    alt="Logotipo de Clínica Vitalis"
                                    width={500}
                                    height={140}
                                    className="h-auto w-40 object-contain md:w-48"
                                />
                            </Link>
                        </div>
                    </div>

                    <NavLinks className="hidden xl:flex" />
                    <div className="flex shrink-0 items-center justify-end gap-5 lg:w-1/4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    type="button"
                                    className="btn hidden whitespace-nowrap lg:flex"
                                >
                                    <CalendarClock className="size-5 shrink-0" />
                                    Pide tu cita
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <AppointmentDailogBox />
                            </DialogContent>
                        </Dialog>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button
                                    type="button"
                                    className="grid place-content-center text-white transition hover:opacity-70"
                                >
                                    <IconMenu className="size-7 shrink-0" />
                                    <span className="sr-only">Menú</span>
                                </button>
                            </SheetTrigger>
                            <SheetContent className="bg-primary">
                                <SheetTitle />
                                <SheetDescription />
                                <SheetClose asChild>
                                    <button
                                        type="button"
                                        className="absolute right-4 top-4 text-right text-white transition hover:opacity-70 xl:right-9 xl:top-9"
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
