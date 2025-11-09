import Link from 'next/link'
import IconFaceBook from '@/components/icons/icon-facebook'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import IconTwitter from '@/components/icons/icon-twitter'
import IconInstagram from '@/components/icons/icon-instagram'
import IconLinkedin from '@/components/icons/icon-linkedin'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { CLINICA } from '@/config/clinic'

const socialLinks = [
    { href: CLINICA.redes.instagram, icon: IconInstagram, label: 'Instagram' },
    { href: CLINICA.redes.facebook, icon: IconFaceBook, label: 'Facebook' },
    { href: CLINICA.redes.linkedin, icon: IconLinkedin, label: 'LinkedIn' },
    { href: CLINICA.redes.twitter, icon: IconTwitter, label: 'Twitter' },
]

export default function Footer() {
    return (
        <footer className="mt-auto bg-gradient-to-b from-secondary via-secondary/90 to-secondary/95 text-white">
            <div className="container">
                <div className="flex flex-col items-center gap-12 py-16">
                    <div className="max-w-2xl space-y-5 text-center">
                        <Link href="/" className="inline-block" aria-label={`Inicio ${CLINICA.nombre}`}>
                            <Image
                                src={CLINICA.imagenes.logoFooter ?? CLINICA.imagenes.logo}
                                alt={`Logotipo ${CLINICA.nombre}`}
                                width={280}
                                height={140}
                                className="mx-auto h-auto w-56 md:w-72"
                                priority
                            />
                        </Link>
                        <p className="text-sm text-gray-light">
                            {CLINICA.descripcionLarga}
                        </p>
                        <Link
                            href="/contact-us"
                            className={`${buttonVariants()} inline-flex items-center gap-2 bg-primary px-6 text-white hover:bg-primary/80`}
                        >
                            {CLINICA.hero.ctas[0]?.label ?? 'Agenda una consulta'}
                            <ArrowUpRight className="size-5" />
                        </Link>
                        <div className="flex justify-center gap-3 pt-4">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="grid size-9 place-content-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-primary hover:text-primary"
                                >
                                    <Icon className="size-5" />
                                    <span className="sr-only">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid w-full max-w-4xl gap-8 text-sm text-center sm:text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-primary">Contáctanos</h2>
                            <div className="flex items-start gap-3 text-gray-light">
                                <MapPin className="mt-0.5 size-4 text-primary" />
                                <p>{CLINICA.direccion}</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-light">
                                <Phone className="size-4 text-primary" />
                                <Link href={`tel:${CLINICA.telefono.replace(/\s+/g, '')}`} className="hover:text-white">
                                    {CLINICA.telefono}
                                </Link>
                            </div>
                            <div className="flex items-center gap-3 text-gray-light">
                                <Mail className="size-4 text-primary" />
                                <Link href={`mailto:${CLINICA.email}`} className="hover:text-white">
                                    {CLINICA.email}
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-primary">Enlaces rápidos</h2>
                            <ul className="flex flex-col gap-2 text-gray-light">
                                {CLINICA.menu.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="transition hover:text-white">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-primary">Horarios boutique</h2>
                            <ul className="space-y-2 text-gray-light">
                                <li>{CLINICA.horarios.semana}</li>
                                <li>{CLINICA.horarios.sabado}</li>
                                <li>{CLINICA.horarios.especial}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 py-6 text-center text-xs uppercase tracking-[0.3em] text-gray-light">
                    &copy; {new Date().getFullYear()} {CLINICA.nombre}. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}
