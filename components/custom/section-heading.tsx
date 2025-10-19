import { cn } from '@/lib/utils'
import { HeartPulse } from 'lucide-react'

const SectionHeading = ({
    tag,
    title,
    description,
    className,
    tagClassName,
    titleClassName,
    descriptionClassName,
}: {
    tag?: string
    title: React.ReactNode
    description?: string
    className?: string
    tagClassName?: string
    titleClassName?: string
    descriptionClassName?: string
}) => {
    return (
        <div className={cn('mb-10', className)}>
            <div
                className={cn(
                    'tag mb-3 inline-flex items-center gap-1.5 rounded-lg bg-secondary/10 p-2 text-xs font-bold uppercase text-secondary lg:text-sm [&_svg]:text-primary',
                    tagClassName,
                )}
            >
                <HeartPulse className="flipheart size-5 shrink-0" />
                {tag}
            </div>
            <h2
                className={cn(
                    'mb-5 font-roboto text-[26px]/8 font-semibold text-primary sm:text-3xl lg:text-[40px]/[50px]',
                    titleClassName,
                )}
            >
                {title}
            </h2>
            <p
                className={cn(
                    'max-w-lg text-sm text-gray lg:text-base',
                    descriptionClassName,
                )}
            >
                {description}
            </p>
        </div>
    )
}

export default SectionHeading
