import { CLINICA } from '@/config/clinic'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://clinicavitalis.com'
const clinic = CLINICA ?? ({} as typeof CLINICA)
const seo = clinic.seo ?? {}
const images = clinic.imagenes ?? {}
const organizationName = clinic.nombre ?? 'Clínica Vitalis'
const logoUrl = images.logo ?? '/images/logo-header.svg'

const helper = {
    openGraphData: {
        title: seo.titulo ?? organizationName,
        description: seo.descripcion ?? 'Clínica especializada en medicina estética y bienestar.',
        siteName: seo.sitio ?? organizationName,
        type: 'website',
        images: [
            {
                url: `${siteUrl}${logoUrl}`,
            },
        ],
    },
    getOrganizationJsonString: () => {
        return `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "${organizationName}",
            "url": "${siteUrl}",
            "logo": "${siteUrl}${logoUrl}"
        }`
    },
}

export default helper
