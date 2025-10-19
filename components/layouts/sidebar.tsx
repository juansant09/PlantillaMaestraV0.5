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

export default function Sidebar() {
    return (
        <div className="flex h-full flex-col justify-between gap-14 bg-primary pt-5 duration-500">
            <div className="grow px-6">
                <div className="mb-5 xl:pt-8">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/images/logo-vitalis.svg"
                            alt="Logotipo de Clínica Vitalis"
                            width={140}
                            height={32}
                            className="h-auto w-36"
                        />
                    </Link>
                </div>
                <SheetDescription className="hidden text-gray-light xl:block">
                    Brindamos salud de calidad con compasión y confianza. Su
                    bienestar es nuestra máxima prioridad en cada paso del camino.
                </SheetDescription>

                <NavLinks className="flex xl:hidden" />

                <div className="py-5 lg:py-10">
                    <div className="mb-5 inline-block whitespace-nowrap border-b border-secondary pb-1.5 text-xl font-bold text-white lg:text-2xl">
                        Contacto
                    </div>
                    <div className="space-y-5">
                        <div className="flex gap-2.5 text-gray-light">
                            <span>
                                <MapPin className="mt-0.5 size-5 shrink-0 fill-secondary text-primary" />
                            </span>
                            <p>Avenida del Parque 18</p>
                        </div>
                        <div className="flex gap-2.5 text-gray-light">
                            <span>
                                <Mail className="mt-0.5 size-5 shrink-0 text-secondary" />
                            </span>
                            <Link
                                href="mailto:info@vitalis.com"
                                className="break-all transition hover:opacity-70"
                            >
                                info@vitalis.com
                            </Link>
                        </div>
                        <div className="flex gap-2.5 text-gray-light">
                            <span>
                                <Phone className="mt-0.5 size-5 shrink-0 fill-secondary text-primary" />
                            </span>
                            <Link
                                href="tel:+34686358791"
                                className="transition hover:opacity-70"
                            >
                                +34 686 35 87 91
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5 block xl:hidden">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    type="button"
                                    className="mt-4! w-full xl:mt-0!"
                                >
                                    <CalendarClock className="size-5 shrink-0" />
                                    Pide una cita
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <AppointmentDailogBox />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                <div className="hidden xl:block">
                    <div className="mb-5 inline-block whitespace-nowrap border-b border-secondary pb-1.5 text-2xl font-bold text-white">
                        Boletín
                    </div>
                    <form className="relative flex">
                        <Input
                            type="text"
                            className="rounded-l-lg border border-transparent bg-secondary/30 py-3 placeholder:text-white focus:border-secondary focus:text-white"
                            placeholder="Correo electrónico"
                        />
                        <button
                            type="button"
                            className="grid w-11 shrink-0 place-content-center rounded-r-lg bg-secondary p-2 text-white transition hover:opacity-80"
                        >
                            <Send className="size-6 shrink-0" />
                            <span className="sr-only">Enviar</span>
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-auto flex flex-col items-center gap-3 border-t-2 border-secondary/20 py-6">
                <div className="inline-block whitespace-nowrap text-base font-medium text-white">
                    Síguenos
                </div>
                <div className="flex gap-3">
                    <Link
                        href="https://www.facebook.com/sharer/sharer.php?u=https://healthcare-theme-html.vercel.app/"
                        className="grid size-8 place-content-center rounded-full bg-secondary text-gray-100 transition hover:bg-white hover:text-secondary"
                    >
                        <IconFaceBook className="size-5 shrink-0" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                        href="https://twitter.com/intent/tweet?url=https://healthcare-theme-html.vercel.app/&text="
                        className="grid size-8 place-content-center rounded-full bg-secondary text-gray-100 transition hover:bg-white hover:text-secondary"
                    >
                        <IconTwitter className="size-5 shrink-0" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                        href="https://www.instagram.com/?url=https%3A%2F%2Fhealthcare-theme-html.vercel.app%2F"
                        className="grid size-8 place-content-center rounded-full bg-secondary text-gray-100 transition hover:bg-white hover:text-secondary"
                    >
                        <IconInstagram className="size-5 shrink-0" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/shareArticle?mini=true&url=https://healthcare-theme-html.vercel.app/"
                        className="grid size-8 place-content-center rounded-full bg-secondary text-gray-100 transition hover:bg-white hover:text-secondary"
                    >
                        <IconLinkedin className="size-5 shrink-0" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
