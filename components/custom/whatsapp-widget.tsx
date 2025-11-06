const whatsappNumber =
    (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34613296952').replace(/\D/g, '')

const whatsappMessage =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    'Hola, me gustaria agendar una cita en Ecofet Centro Médico Estético.'

const encodedMessage = encodeURIComponent(whatsappMessage)

const WhatsAppWidget = () => {
    if (!whatsappNumber) {
        return null
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir conversacion de WhatsApp"
            className="group fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:translate-y-[-2px] hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7 transition-transform duration-300 group-hover:scale-[1.08]"
            >
                <path d="M20.52 3.48A11.83 11.83 0 0 0 12 0a11.94 11.94 0 0 0-10.26 18l-1.34 4.89a.75.75 0 0 0 .92.92l4.89-1.34A11.93 11.93 0 0 0 12 24a11.83 11.83 0 0 0 8.48-3.52A11.83 11.83 0 0 0 24 12a11.83 11.83 0 0 0-3.48-8.52Zm-8.52 18a10.47 10.47 0 0 1-5.34-1.48.75.75 0 0 0-.52-.08l-4.09 1.12 1.12-4.09a.75.75 0 0 0-.08-.52A10.47 10.47 0 0 1 1.5 12 10.5 10.5 0 1 1 12 21.5Zm5.04-6.62c-.29-.14-1.63-.8-1.88-.89-.25-.09-.43-.13-.61.15s-.7.88-.86 1.06-.32.2-.59.08c-.27-.14-1.14-.43-2.17-1.35a7.47 7.47 0 0 1-1.51-1.88c-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48s.17-.27.25-.45.04-.34-.02-.48c-.07-.13-.61-1.47-.84-2.02s-.45-.46-.61-.47a10.1 10.1 0 0 0-.52-.01c-.18 0-.48.07-.73.34s-.96.94-.96 2.29.98 2.64 1.12 2.82c.14.18 1.9 2.9 4.64 4.06.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.27s.23-1.16.16-1.27c-.07-.11-.25-.18-.52-.31Z" />
            </svg>
        </a>
    )
}

export default WhatsAppWidget
