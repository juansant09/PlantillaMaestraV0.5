const helper = {
    openGraphData: {
        title: 'Cl\u00ednica Vitalis',
        description:
            'Cuidado experto y tratamientos avanzados: tu salud es nuestra m\u00e1xima prioridad.',
        siteName: 'Cl\u00ednica Vitalis',
        type: 'website',
        images: [{ url: `${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png` }],
    },
    getOrganizationJsonString: () => {
        return `{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cl\u00ednica Vitalis",
            "url": "${process.env.NEXT_PUBLIC_APP_URL}",
            "logo": "${process.env.NEXT_PUBLIC_APP_URL}/images/logo.png"
        }`
    },
}

export default helper
