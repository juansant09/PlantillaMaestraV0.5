import NavLink from '@/components/ui/nav-link'
import { cn } from '@/lib/utils'

const NavLinks = ({ className }: any) => {
    return (
        <ul
            className={cn(
                'shrink-0 flex-col gap-3 border-y border-secondary/20 pb-7 pt-5 xl:w-1/2 xl:flex-row xl:items-center xl:justify-center xl:gap-7 xl:border-none xl:py-0',
                className,
            )}
        >
            <li>
                <NavLink href="/">Inicio</NavLink>
            </li>
            <li>
                <NavLink href="/about-us">Sobre nosotros</NavLink>
            </li>
            <li>
                <NavLink href="/services" targetPath="/service">
                    Servicios
                </NavLink>
            </li>
            <li>
                <NavLink href="/doctors">Doctores</NavLink>
            </li>
            <li>
                <NavLink href="/contact-us">Contacto</NavLink>
            </li>
        </ul>
    )
}
export default NavLinks
