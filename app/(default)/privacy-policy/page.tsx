import HeroSection from '@/components/custom/hero-section'
import helper from '@/lib/helper'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Política de privacidad | Clínica Vitalis',
    description:
        'Descubre cómo Clínica Vitalis protege y utiliza tus datos personales de forma segura y responsable.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Política de privacidad | Clínica Vitalis',
        description:
            'Descubre cómo Clínica Vitalis protege y utiliza tus datos personales de forma segura y responsable.',
        url: process.env.NEXT_PUBLIC_APP_URL,
        type: 'website',
    },
    alternates: {
        canonical: process.env.NEXT_PUBLIC_APP_URL,
    },
}

export default function PrivacyPolicy() {
    return (
        <>
            <HeroSection
                className="bg-[url(/images/doctors-bg.jpg)]"
                title="Política de privacidad"
                pageName="Política de privacidad"
            />

            <div className="container prose mx-auto w-full py-12 lg:prose-lg lg:max-w-[1142px] lg:py-20">
                <p>
                    En Clínica Vitalis priorizamos la confidencialidad y seguridad de la información de nuestros pacientes. Esta Política de Privacidad explica qué datos recopilamos, con qué finalidad los tratamos y cuáles son tus derechos.
                </p>
                <ol type="1">
                    <li>
                        <h2>Datos que recopilamos</h2>
                        <ol type="A">
                            <li>
                                <h3>Datos identificativos</h3>
                                <p>
                                    Cuando completas formularios o te comunicas con nosotros, podemos solicitar tu nombre, correo electrónico, teléfono, fecha de nacimiento u otros datos necesarios para gestionar turnos y consultas.
                                </p>
                            </li>
                            <li>
                                <h3>Información de uso</h3>
                                <p>
                                    Recopilamos de forma automática datos técnicos como dirección IP, tipo de navegador, páginas visitadas y tiempos de navegación. Esta información nos ayuda a mejorar la experiencia del sitio.
                                </p>
                            </li>
                            <li>
                                <h3>Cookies y tecnologías similares</h3>
                                <p>
                                    Utilizamos cookies para recordar preferencias, analizar tráfico y facilitar la navegación. Puedes aceptar, rechazar o configurar su uso desde tu navegador.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h2>Finalidad del tratamiento</h2>
                        <ul>
                            <li>Gestionar turnos, consultas y comunicaciones internas.</li>
                            <li>Mejorar nuestros servicios, contenidos y funcionalidades digitales.</li>
                            <li>Enviar recordatorios, novedades y encuestas sobre la atención recibida.</li>
                            <li>Cumplir obligaciones legales y sanitarias vigentes.</li>
                        </ul>
                    </li>
                    <li>
                        <h2>Base legal</h2>
                        <p>
                            Tratamos tus datos sobre la base del consentimiento otorgado, el cumplimiento de obligaciones contractuales y la normativa sanitaria aplicable.
                        </p>
                    </li>
                    <li>
                        <h2>Con quién compartimos la información</h2>
                        <p>
                            Solo compartimos datos con proveedores que prestan servicios a Vitalis (por ejemplo, sistemas de turnos, laboratorios o plataformas de mailing), siempre bajo acuerdos de confidencialidad y protección de datos.
                        </p>
                    </li>
                    <li>
                        <h2>Tiempo de conservación</h2>
                        <p>
                            Conservamos los datos el tiempo necesario para cumplir la finalidad con la que fueron recolectados y las exigencias legales. Una vez cumplidos estos plazos, aplicamos procesos de anonimización o eliminación segura.
                        </p>
                    </li>
                    <li>
                        <h2>Tus derechos</h2>
                        <p>
                            Puedes ejercer tus derechos de acceso, rectificación, cancelación, oposición, portabilidad y limitación del tratamiento comunicándote con nuestro equipo de datos personales.
                        </p>
                    </li>
                    <li>
                        <h2>Seguridad</h2>
                        <p>
                            Implementamos medidas técnicas y organizativas para proteger tu información frente a accesos no autorizados, pérdida o alteración. Revisamos periódicamente nuestros protocolos para mantener altos estándares de seguridad.
                        </p>
                    </li>
                    <li>
                        <h2>Enlaces externos</h2>
                        <p>
                            Nuestro sitio puede redirigirte a páginas de terceros. Clínica Vitalis no se responsabiliza por las prácticas de privacidad de esos sitios. Te recomendamos revisar sus políticas antes de facilitar datos personales.
                        </p>
                    </li>
                    <li>
                        <h2>Actualizaciones</h2>
                        <p>
                            Podemos modificar esta política para adaptarla a cambios normativos o mejoras internas. Publicaremos la versión vigente en esta página e indicaremos la fecha de última actualización.
                        </p>
                    </li>
                    <li>
                        <h2>Cómo contactarnos</h2>
                        <p>Si deseas ejercer tus derechos o tienes preguntas, puedes escribirnos:</p>
                        <p className="mb-2.5 leading-5! lg:mb-5">
                            Correo electrónico:&nbsp;
                            <Link href="mailto:privacidad@vitalis.com">
                                privacidad@vitalis.com
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
                    <p>
                        Gracias por confiar en Clínica Vitalis. Cuidamos tu salud y tu privacidad con el mismo compromiso.
                    </p>
                    <p className="mb-0!">Equipo de Clínica Vitalis</p>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Política de privacidad",
                        "url": "${process.env.NEXT_PUBLIC_APP_URL}",
                        "description": "Política de privacidad de Clínica Vitalis.",
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
                                "name": "Política de privacidad",
                                "item": "${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy"
                            }]
                        }
                    }`,
                }}
            />
        </>
    )
}
