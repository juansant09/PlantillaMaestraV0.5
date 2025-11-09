import { CLINICA } from '@/config/clinic'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://clinicavitalis.com'

const helper = {
    openGraphData: {
        title: CLINICA.seo.titulo,
        description: CLINICA.seo.descripcion,
        siteName: CLINICA.seo.sitio,
        type: 'website',
        images: [
            {
                url: `${siteUrl}${CLINICA.imagenes.logo}`,
            },
        ],
    },
    getOrganizationJsonString: () => {
        return `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "${CLINICA.nombre}",
            "url": "${siteUrl}",
            "logo": "${siteUrl}${CLINICA.imagenes.logo}"
        }`
    },
}

export default helper
