import HeroSection from '@/components/custom/hero-section'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Términos y condiciones | Clínica Vitalis',
    description:
        'Consulta los términos y condiciones de uso del sitio web de Clínica Vitalis.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Términos y condiciones | Clínica Vitalis',
        description:
            'Consulta los términos y condiciones de uso del sitio web de Clínica Vitalis.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function TermsConditions() {
    return (
        <>
            <HeroSection
                className="bg-[url(/images/doctors-bg.jpg)]"
                title="Términos y condiciones"
                pageName="Términos y condiciones"
            />

            <div className="container prose mx-auto w-full py-12 lg:prose-lg lg:max-w-[1142px] lg:py-20">
                <p>
                    Bienvenido a Clínica Vitalis. Los presentes Términos y Condiciones regulan el acceso y uso del sitio web <strong>{process.env.NEXT_PUBLIC_APP_URL}</strong>. Al navegar o utilizar nuestros servicios digitales, aceptas cumplir estas disposiciones. Te sugerimos leerlas detenidamente.
                </p>
                <ol type="1">
                    <li>
                        <h2>Aceptación de los términos</h2>
                        <p>
                            El uso del sitio implica la aceptación plena de estos Términos. Si no estás de acuerdo con alguna cláusula, te pedimos abstenerte de utilizar la plataforma y comunicarte con nosotros para resolver tus inquietudes.
                        </p>
                    </li>
                    <li>
                        <h2>Uso permitido del sitio</h2>
                        <p>Te comprometes a utilizar el sitio únicamente con fines lícitos y respetando las siguientes pautas:</p>
                        <ul>
                            <li>No realizar acciones que vulneren la legislación vigente o derechos de terceros.</li>
                            <li>No introducir virus, malware ni contenido que afecte el funcionamiento del sitio.</li>
                            <li>No intentar acceder a secciones restringidas o manipular información sin autorización.</li>
                            <li>No utilizar la plataforma con fines comerciales no autorizados por Clínica Vitalis.</li>
                        </ul>
                    </li>
                    <li>
                        <h2>Carácter informativo</h2>
                        <p>
                            La información publicada tiene fines educativos y de apoyo. No reemplaza el diagnóstico ni el tratamiento brindado por profesionales. Ante cualquier duda o urgencia médica, consulta directamente con nuestro equipo.
                        </p>
                    </li>
                    <li>
                        <h2>Turnos y pagos</h2>
                        <ul>
                            <li>Los turnos solicitados a través del sitio quedan sujetos a confirmación de disponibilidad.</li>
                            <li>Los pagos se realizarán conforme a las condiciones informadas durante la reserva.</li>
                            <li>Las políticas de cancelación o reprogramación serán comunicadas al momento de confirmar tu cita.</li>
                        </ul>
                    </li>
                    <li>
                        <h2>Propiedad intelectual</h2>
                        <p>
                            Los contenidos, diseños, marcas, logotipos e imágenes del sitio son propiedad de Clínica Vitalis o cuentan con las licencias correspondientes. Queda prohibida su reproducción, distribución o modificación sin autorización previa y por escrito.
                        </p>
                    </li>
                    <li>
                        <h2>Confidencialidad y datos personales</h2>
                        <p>
                            Protegemos tu información conforme a nuestra Política de Privacidad. Los datos suministrados se utilizan exclusivamente para gestionar turnos, consultas y comunicaciones institucionales.
                        </p>
                    </li>
                    <li>
                        <h2>Enlaces externos</h2>
                        <p>
                            El sitio puede incluir enlaces hacia páginas de terceros. Clínica Vitalis no se responsabiliza por el contenido ni por las prácticas de privacidad de dichos sitios. Accedes a ellos bajo tu propia responsabilidad.
                        </p>
                    </li>
                    <li>
                        <h2>Modificaciones</h2>
                        <p>
                            Podemos actualizar estos Términos cuando lo consideremos necesario. Las modificaciones entrarán en vigor a partir de su publicación en el sitio. Te recomendamos revisarlos periódicamente.
                        </p>
                    </li>
                    <li>
                        <h2>Terminación del acceso</h2>
                        <p>
                            Clínica Vitalis se reserva el derecho de suspender o limitar el acceso al sitio a usuarios que incumplan estos Términos o realicen acciones que comprometan la seguridad de la plataforma.
                        </p>
                    </li>
                    <li>
                        <h2>Legislación aplicable y jurisdicción</h2>
                        <p>
                            Estos Términos se rigen por las leyes del Reino de España. Cualquier conflicto será sometido a los tribunales competentes de la ciudad de Madrid, salvo disposición legal en contrario.
                        </p>
                    </li>
                    <li>
                        <h2>Contacto</h2>
                        <p>Para consultas relacionadas con estos Términos, puedes comunicarte con nosotros:</p>
                        <p className="mb-2.5 leading-5! lg:mb-5">
                            Correo electrónico:&nbsp;
                            <Link href="mailto:info@vitalis.com">
                                info@vitalis.com
                            </Link>
                        </p>
                        <p className="mb-2.5 leading-5! lg:mb-5">
                            Teléfono:&nbsp;
                            <Link href="tel:+34613296952">+34 613 29 69 52</Link>
                        </p>
                        <p className="mb-2.5 leading-5! lg:mb-5">
                            Dirección:&nbsp;
                            <Link
                                href="https://maps.app.goo.gl/pF1ZYAhzP8C6ov3x6"
                                target="_blank"
                            >
                                Avenida del Parque 18, Madrid, España
                            </Link>
                        </p>
                    </li>
                </ol>
                <div className="pt-5">
                    <p>Gracias por confiar en Clínica Vitalis.</p>
                    <p className="mb-0!">Atentamente,</p>
                    <h4>Equipo de Clínica Vitalis</h4>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Términos y condiciones",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Términos de uso del sitio web de Clínica Vitalis.",
                        "inLanguage": "es",
                        "image": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png",
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Inicio",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Términos y condiciones",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/terms-conditions"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
