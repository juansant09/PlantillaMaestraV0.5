import { IServiceData } from '@/types/service'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ServiceCard({ data }: { data: IServiceData }) {
    const Icon = data?.icon
    return (
        <div className="service-card group relative rounded-[20px] bg-white/95 px-6 pb-12 pt-6 shadow-soft backdrop-blur-lg transition lg:pb-16 lg:pt-10">
            <div className="absolute bottom-4 right-4 grid size-12 place-content-center rounded-full bg-gradient-to-br from-[#5eb9ff] to-[#2f7fe9] text-white shadow-soft transition group-hover:scale-110 lg:size-14">
                {Icon && <Icon aria-hidden="true" className="size-6 shrink-0 lg:size-7" />}
            </div>
            <div className="grow pr-8">
                <h3 className="mb-3 text-xl font-semibold text-primary lg:text-2xl">
                    {data?.title}
                </h3>
                <p className="mb-6 text-sm text-gray-strong lg:text-base">
                    {data?.description}
                </p>
            </div>
            <Link
                href={{ pathname: "/services/service-details", query: { id: data?.title ?? "" } }}
                className="group/read inline-flex items-center gap-2.5 text-secondary transition hover:opacity-80"
            >
                Leer más
                <ArrowRight className="size-5 transition-transform duration-300 group-hover/read:translate-x-1" />
            </Link>
        </div>
    )
}








