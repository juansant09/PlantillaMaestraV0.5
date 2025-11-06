const helper = {
    openGraphData: {
        title: 'Ecofet Centro Médico Estético',
        description:
            'Medicina estética boutique con tratamientos personalizados, tecnología de precisión y acompañamiento médico cercano.',
        siteName: 'Ecofet Centro Médico Estético',
        type: 'website',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_APP_URL}/imagenes-ecofet/ecofet.svg`,
            },
        ],
    },
    getOrganizationJsonString: () => {
        return `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ecofet Centro Médico Estético",
            "url": "${process.env.NEXT_PUBLIC_APP_URL}",
            "logo": "${process.env.NEXT_PUBLIC_APP_URL}/imagenes-ecofet/ecofet.svg"
        }`
    },
}

export default helper
