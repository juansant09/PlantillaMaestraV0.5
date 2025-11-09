const withOpacityValue = (variable) => {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgb(var(${variable}) / ${opacityValue})`
        }
        return `rgb(var(${variable}) / 1)`
    }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: withOpacityValue('--color-primario-rgb'),
                secondary: withOpacityValue('--color-secundario-rgb'),
                accent: withOpacityValue('--color-base-rgb'),
                muted: '#f5efe4',
                charcoal: '#2a2729',
            },
        },
    },
    plugins: [],
}
