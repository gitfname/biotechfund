import Link from "next/link";

interface DropdownItemOptions {
    id: string;
    title: string;
    href: string;
    items?: Array<DropdownItemOptions>;
}

interface Props {
    isActive: boolean;
    href?: string;
    title: string;
    items?: Array<DropdownItemOptions>;
}


const NavLink = ({ href, isActive, title }: { href?: string; title: string; isActive: boolean; }) => {
    return href
        ?
        <Link
            href={href}
            className={`self-stretch text-sm h-full text-slate-800 font-medium group relative grid place-items-center`}
        >
            <div className="w-full h-0.5 bg-[#357082] opacity-0 transition-opacity duration-200
            group-hover:opacity-100 absolute top-0 left-0"></div>

            {title}
        </Link>
        :
        <div
            className={`self-stretch h-full text-sm text-slate-800 font-medium group relative grid place-items-center`}
        >
            <div className="w-full h-0.5 bg-[#3570821] opacity-0 transition-opacity duration-200
            group-hover:opacity-100 absolute top-0 left-0"></div>

            {title}

        </div>

}

function NavigationDropdown({ items, title, href, isActive }: Props) {
    return (
        <div className="self-stretch relative group">
            <NavLink
                isActive={false}
                title={title}
                href={href}
            />

            <div
                className="bg-transparent/80 backdrop-blur-sm absolute bottom-0 left-0 z-10
                translate-y-[95%] -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100
                group-hover:pointer-events-auto transition-all duration-200 py-3 min-w-[10rem] 
                rounded-sm text-right group-hover:translate-y-full flex flex-col gap-y-3.5 w-max"
            >
                {
                    items && Array.isArray(items)
                        ?
                        items.map(item => (
                            item.items && Array.isArray(item.items)
                                ?
                                <Link className="text-sm pr-2 pl-5 group/inner-menu font-medium px-2 text-white hover:text-primary
                                relative transition-colors" key={item.id} href={item.href}>
                                    {item.title}

                                    <div
                                        className="bg-gray-100 backdrop-blur-sm absolute top-0 left-0 z-10
                                        -translate-x-full opacity-0 pointer-events-none
                                        group-hover/inner-menu:opacity-100 group-hover/inner-menu:pointer-events-auto transition-all
                                        duration-200 py-3 min-w-[10rem] rounded-sm text-right
                                        group-hover/inner-menu:translate-y-2 flex flex-col gap-y-3 w-max"
                                    >
                                        {
                                            item.items.map(item => (
                                                <Link className="text-sm font-normal pr-2 pl-5 text-[#3b7485]" key={item.id} href={item.href}>
                                                    {item.title}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </Link>
                                :
                                <Link className="text-sm px-2 font-medium text-white hover:text-primary transition-colors" key={item.id} href={item.href}>
                                    {item.title}
                                </Link>
                        ))
                        :
                        null
                }
            </div>
        </div>
    )
}

export default NavigationDropdown