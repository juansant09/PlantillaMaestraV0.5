import Image from 'next/image'

export const ScreenLoading = () => {
    return (
        <div className="screen-loader fixed inset-0 z-60 grid place-content-center bg-white">
            <Image
                src="/images/loader.gif"
                alt="animación de carga"
                width="800"
                height="600"
                unoptimized
                priority
                className="h-auto w-[500px]"
            />
        </div>
    )
}
