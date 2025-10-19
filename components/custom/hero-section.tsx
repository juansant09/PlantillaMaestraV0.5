import { cn } from '@/lib/utils'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import IconHome from '@/components/icons/icon-home'

const HeroSection = ({
    title,
    pageName,
    className,
    titleClassName,
    pageNameClassName,
}: {
    title: React.ReactNode
    pageName?: string
    className?: string
    titleClassName?: string
    pageNameClassName?: string
}) => {
    return (
        <div
            className={cn(
                'hero-gradient relative bg-cover bg-no-repeat pt-[100px]',
                className,
            )}
        >
            <span className="absolute inset-0 bg-primary/60 mix-blend-multiply"></span>
            <div className="container relative flex h-72 flex-col items-center justify-center overflow-hidden lg:h-96">
                <h1
                    className={cn(
                        'hero-title hero-animate mb-5 text-center font-roboto text-3xl/8 font-semibold capitalize sm:text-3xl md:text-4xl/10 xl:text-6xl/[60px]',
                        titleClassName,
                    )}
                >
                    {title}
                </h1>
                <div className="hero-animate-delay inline-flex items-center gap-2.5 rounded-lg border border-gray bg-gray/40 px-3 py-1 font-semibold text-gray-light backdrop-blur-lg">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-1.5 transition hover:opacity-80"
                    >
                        <IconHome className="size-5 shrink-0 fill-secondary" />
                        Inicio
                    </Link>
                    <ChevronsRight className="size-5 shrink-0 text-white" />
                    <span
                        className={cn(
                            'text-white',
                            pageNameClassName,
                        )}
                    >
                        {pageName}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
