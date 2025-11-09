import NavLink from '@/components/ui/nav-link'
import { cn } from '@/lib/utils'
import { CLINICA } from '@/config/clinic'

const clinic = CLINICA ?? ({} as typeof CLINICA)
const menuItems = Array.isArray(clinic.menu) ? clinic.menu : []

const NavLinks = ({ className }: any) => {
    return (
        <ul
            className={cn(
                'shrink-0 flex-col gap-3 border-y border-white/10 pb-6 pt-4 text-sm uppercase tracking-[0.28em] text-gray-light xl:flex-row xl:items-center xl:justify-center xl:gap-7 xl:border-none xl:py-0 xl:text-xs',
                className,
            )}
        >
            {menuItems.map((item) => (
                <li key={item.href}>
                    <NavLink href={item.href} targetPath={item.href}>
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
export default NavLinks
