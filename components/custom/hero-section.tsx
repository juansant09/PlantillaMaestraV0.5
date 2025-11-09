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
    backgroundImage,
}: {
    title: React.ReactNode
    pageName?: string
    className?: string
    titleClassName?: string
    pageNameClassName?: string
    backgroundImage?: string
}) => {
    return (
        <div
            className={cn(
                'hero-gradient relative overflow-hidden bg-cover bg-no-repeat pt-[120px]',
                className,
            )}
            style={
                backgroundImage
                    ? {
                          backgroundImage: `url(${backgroundImage})`,
                      }
                    : undefined
            }
        >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,106,0.25),rgba(28,26,29,0.85))] mix-blend-multiply"></span>
            <span className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/70 to-primary/85"></span>
            <div className="container relative flex h-72 flex-col items-center justify-center overflow-hidden lg:h-96">
                <h1
                    className={cn(
                        'hero-title hero-animate mb-5 text-center font-roboto text-3xl/8 font-semibold uppercase tracking-[0.28em] text-white sm:text-4xl lg:text-[52px]/[62px]',
                        titleClassName,
                    )}
                >
                    {title}
                </h1>
                <div className="hero-animate-delay inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-gray-light backdrop-blur-lg">
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
