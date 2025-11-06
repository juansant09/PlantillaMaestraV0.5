import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { IServiceData } from "@/types/service"

export default function ServiceCard({ data }: { data: IServiceData }) {
    const Icon = data?.icon
    return (
        <div className="service-card group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white/90 shadow-soft backdrop-blur-lg transition lg:rounded-[28px]">
            {data?.image && (
                <div className="relative h-48 w-full overflow-hidden bg-primary/10 sm:h-56">
                    <Image
                        src={data.image}
                        alt={data?.title ?? "Tratamiento Ecofet"}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 90vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
            )}
            <div className="relative flex grow flex-col px-6 pb-12 pt-10 lg:px-8">
                <div className="absolute -top-8 right-6 grid size-14 place-content-center rounded-full bg-gradient-to-br from-[#c8a46a] via-[#d8b980] to-[#6fd0c4] text-white shadow-soft transition group-hover:scale-110">
                    {Icon && <Icon aria-hidden="true" className="size-6 shrink-0 stroke-[1.5] lg:size-7" />}
                </div>
                <div className="mt-4 pr-6">
                    <h3 className="mb-3 text-xl font-semibold text-primary lg:text-2xl">
                        {data?.title}
                    </h3>
                    <p className="mb-6 text-sm text-gray-strong lg:text-base">
                        {data?.description}
                    </p>
                </div>
                <Link
                    href={{ pathname: "/services/service-details", query: { id: data?.title ?? "" } }}
                    className="group/read mt-auto inline-flex items-center gap-2.5 text-secondary transition hover:opacity-80"
                >
                    Leer más
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover/read:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}
