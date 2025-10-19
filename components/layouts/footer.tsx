import Link from 'next/link'
import IconFaceBook from '@/components/icons/icon-facebook'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import IconTwitter from '@/components/icons/icon-twitter'
import IconInstagram from '@/components/icons/icon-instagram'
import IconLinkedin from '@/components/icons/icon-linkedin'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-primary mt-auto">
            <div className="container">
                <div className="text-gray-light flex flex-col justify-between gap-6 pt-14 lg:flex-row lg:gap-14 lg:pt-20">
                    <div className="w-full space-y-5 lg:max-w-sm lg:pb-12">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/logo-vitalis.svg"
                                alt="Clínica Vitalis"
                                width={120}
                                height={28}
                                className="h-8 w-auto md:h-10 lg:h-12 object-contain"
                                style={{ filter: 'drop-shadow(0px 0px 6px rgba(134, 40, 40, 0.15))' }}
                            />
                        </Link>
                        <p>
                            Ofrecemos servicios de salud de calidad con compasión y confianza. Su bienestar es nuestra máxima prioridad en cada paso del proceso.
                        </p>
                        <Link href="/contact-us" className={buttonVariants()}>
                            Consúltanos
                            <ArrowUpRight className="size-5" />
                        </Link>
                        <div className="mt-5 flex gap-5">
                            <Link
                                href="https://www.facebook.com/sharer/sharer.php?u=https://healthcare-theme-html.vercel.app/"
                                target="_blank"
                                className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-70 transition hover:opacity-100"
                            >
                                <IconFaceBook className="size-5 shrink-0" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="https://twitter.com/intent/tweet?url=https://healthcare-theme-html.vercel.app/&text="
                                target="_blank"
                                className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-70 transition hover:opacity-100"
                            >
                                <IconTwitter className="size-5 shrink-0" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="https://www.instagram.com/?url=https%3A%2F%2Fhealthcare-theme-html.vercel.app%2F"
                                target="_blank"
                                className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-70 transition hover:opacity-100"
                            >
                                <IconInstagram className="size-5 shrink-0" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/shareArticle?mini=true&url=https://healthcare-theme-html.vercel.app/"
                                target="_blank"
                                className="grid size-8 place-content-center rounded-full border border-gray-200 text-gray-100 opacity-70 transition hover:opacity-100"
                            >
                                <IconLinkedin className="size-5 shrink-0" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                    <div className="border-white/10 lg:border-x-2 lg:px-10 lg:pb-12 xl:px-20">
                        <h2 className="border-secondary mb-5 inline-block border-b pb-1.5 text-xl font-bold whitespace-nowrap text-white lg:mb-8 lg:text-2xl">
                            Nuestro horario
                        </h2>
                        <div className="flex flex-row flex-wrap gap-5 sm:flex-nowrap sm:gap-10 lg:flex-col lg:gap-5">
                            <div className="space-y-1">
                                <h3>Lunes a viernes</h3>
                                <p>9:00 a. m. - 5:00 p. m.</p>
                            </div>
                            <div className="space-y-1">
                                <h3>Sábados</h3>
                                <p>9:00 a. m. - 12:00 p. m.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-8 pb-7 sm:grid-cols-2 lg:flex lg:gap-5 lg:pb-12 2xl:gap-8">
                        <div className="min-w-44 xl:min-w-48">
                            <h2 className="border-secondary mb-5 inline-block border-b pb-1.5 text-xl font-bold text-white lg:mb-8 lg:text-2xl">
                                Servicios
                            </h2>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link
                                        href="/about-us"
                                        className="group inline-flex items-center"
                                    >
                                        <span className="bg-secondary h-1 w-0 rounded-full duration-300 ease-in-out group-hover:mr-2 group-hover:w-2.5"></span>
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className="group inline-flex items-center"
                                    >
                                        <span className="bg-secondary h-1 w-0 rounded-full duration-300 ease-in-out group-hover:mr-2 group-hover:w-2.5"></span>
                                        Servicios
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/doctors"
                                        className="group inline-flex items-center"
                                    >
                                        <span className="bg-secondary h-1 w-0 rounded-full duration-300 ease-in-out group-hover:mr-2 group-hover:w-2.5"></span>
                                        Doctores
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact-us"
                                        className="group inline-flex items-center"
                                    >
                                        <span className="bg-secondary h-1 w-0 rounded-full duration-300 ease-in-out group-hover:mr-2 group-hover:w-2.5"></span>
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="min-w-44 xl:min-w-48">
                            <h2 className="border-secondary mb-5 inline-block border-b pb-1.5 text-xl font-bold text-white lg:mb-8 lg:text-2xl">
                                Recursos
                            </h2>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <Link
                                        href="/faq"
                                        className="group inline-flex items-center"
                                    >
                                        <span className="bg-secondary h-1 w-0 rounded-full duration-300 ease-in-out group-hover:mr-2 group-hover:w-2.5"></span>
                                        Preguntas frecuentes
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/privacy-policy"
                                        className="group inline-flex items-center"
                                    >
                                        <span className="bg-secondary h-1 w-0 rounded-full duration-300 ease-in-out group-hover:mr-2 group-hover:w-2.5"></span>
                                        Política de privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/terms-conditions"
                                        className="group inline-flex items-center"
                                    >
                                        <span className="bg-secondary h-1 w-0 rounded-full duration-300 ease-in-out group-hover:mr-2 group-hover:w-2.5"></span>
                                        Términos y condiciones
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid divide-white/10 border-y-2 border-white/10 lg:grid-cols-3 lg:divide-x-2">
                    <div className="text-gray-light flex items-start gap-2.5 py-4 sm:items-center lg:justify-center lg:px-4 lg:py-10">
                        <MapPin className="text-primary size-6 shrink-0 fill-white lg:size-8" />
                        <p className="text-base font-semibold lg:text-lg/6">
                            14900, Avenida del Parque No. 18
                        </p>
                    </div>
                    <div className="text-gray-light flex items-center gap-2.5 py-4 lg:justify-center lg:px-4 lg:py-10">
                        <Mail className="size-6 shrink-0 lg:size-8" />
                        <Link
                            href="mailto:info@automata.com"
                            className="text-base font-semibold break-all transition hover:opacity-70 lg:text-lg/6"
                        >
                            info@automata.com
                        </Link>
                    </div>
                    <div className="text-gray-light flex items-center gap-2.5 py-4 lg:justify-center lg:px-4 lg:py-10">
                        <Phone className="text-primary size-6 shrink-0 fill-white lg:size-8" />
                        <Link
                            href="tel:+34613296952"
                            className="text-base font-semibold transition hover:opacity-70 lg:text-lg/6"
                        >
                            +34 613 29 69 52
                        </Link>
                    </div>
                </div>
                <div className="text-gray-light flex flex-col items-center justify-between gap-5 py-5 md:flex-row md:py-[30px]">
                    <p className="order-2 text-center text-sm/[18px] font-semibold md:order-1 md:text-left">
                        &copy; {new Date().getFullYear()} Automata Enterprises. Todos los derechos reservados.
                    </p>
                    <div className="order-1 flex items-center gap-4 md:order-2">
                        <Link
                            className="text-sm/[18px] font-semibold underline underline-offset-2 transition hover:no-underline"
                            href="/privacy-policy"
                        >
                            Política de privacidad
                        </Link>
                        <span className="bg-secondary h-4 w-0.5 shrink-0 rounded-full"></span>
                        <Link
                            className="text-sm/[18px] font-semibold underline underline-offset-2 transition hover:no-underline"
                            href="/terms-conditions"
                        >
                            Términos y condiciones
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
