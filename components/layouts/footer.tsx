import Link from 'next/link'
import IconFaceBook from '@/components/icons/icon-facebook'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import IconTwitter from '@/components/icons/icon-twitter'
import IconInstagram from '@/components/icons/icon-instagram'
import IconLinkedin from '@/components/icons/icon-linkedin'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

const socialLinks = [
    { href: 'https://www.instagram.com/', icon: IconInstagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/', icon: IconFaceBook, label: 'Facebook' },
    { href: 'https://www.linkedin.com/', icon: IconLinkedin, label: 'LinkedIn' },
    { href: 'https://twitter.com/', icon: IconTwitter, label: 'Twitter' },
]

export default function Footer() {
    return (
        <footer className="mt-auto text-white bg-gradient-to-b from-[#1f1c1f] via-[#181618] to-[#0f0e0f]">
            <div className="container">
                <div className="flex flex-col items-center gap-12 py-16">
                    <div className="max-w-2xl space-y-5 text-center">
                        <Link href="/" className="inline-block" aria-label="Inicio Ecofet">
                            <Image
                                src="/imagenes-ecofet/ecofetlogo.svg"
                                alt="Logotipo Ecofet"
                                width={280}
                                height={140}
                                className="mx-auto h-auto w-56 md:w-72"
                                priority
                            />
                        </Link>
                        <p className="text-sm text-gray-light">
                            Tratamientos médicos estéticos de autor con calidez boutique. Creamos experiencias
                            personalizadas que honran tu belleza, combinando protocolos de última generación,
                            seguimiento cercano y espacios diseñados para relajarte.
                        </p>
                        <Link
                            href="/contact-us"
                            className={`${buttonVariants()} inline-flex items-center gap-2 bg-secondary px-6 text-white hover:bg-[#b58c4b]`}
                        >
                            Agenda una consulta
                            <ArrowUpRight className="size-5" />
                        </Link>
                        <div className="flex justify-center gap-3 pt-4">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="grid size-9 place-content-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-secondary/50 hover:text-secondary"
                                >
                                    <Icon className="size-5" />
                                    <span className="sr-only">{label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid w-full max-w-4xl gap-8 text-sm text-center sm:text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-secondary">Contáctanos</h2>
                            <div className="flex items-start gap-3 text-gray-light">
                                <MapPin className="mt-0.5 size-4 text-secondary" />
                                <p>
                                    Av. Belleza 1280, Piso 5
                                    <br />
                                    Recoleta, Buenos Aires
                                </p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-light">
                                <Phone className="size-4 text-secondary" />
                                <Link href="tel:+541123456789" className="hover:text-secondary">
                                    +54 11 2345 6789
                                </Link>
                            </div>
                            <div className="flex items-center gap-3 text-gray-light">
                                <Mail className="size-4 text-secondary" />
                                <Link href="mailto:hola@ecofet.com" className="hover:text-secondary">
                                    hola@ecofet.com
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-secondary">Enlaces rápidos</h2>
                            <ul className="flex flex-col gap-2 text-gray-light">
                                <li>
                                    <Link href="/services" className="transition hover:text-secondary">
                                        Tratamientos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className="transition hover:text-secondary">
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/doctors" className="transition hover:text-secondary">
                                        Especialistas
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="transition hover:text-secondary">
                                        Preguntas frecuentes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className="transition hover:text-secondary">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-secondary">Horarios boutique</h2>
                            <ul className="space-y-2 text-gray-light">
                                <li>
                                    <span className="text-white">Lunes a viernes</span>
                                    <br />
                                    10:00 - 19:00 hs
                                </li>
                                <li>
                                    <span className="text-white">Sábados</span>
                                    <br />
                                    10:00 - 14:00 hs
                                </li>
                                <li>
                                    <span className="text-white">Atención personalizada</span>
                                    <br />
                                    Con reserva previa
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-[0.3em] text-gray-light">
                    &copy; {new Date().getFullYear()} Ecofet Centro Médico Estético. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}



