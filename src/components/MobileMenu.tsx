
'use client';

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "@ark-ui/react"



interface ItemOptions {
    id: string;
    title?: string;
    href?: string;
    items?: Array<ItemOptions>;
}

interface Props {
    items: Array<ItemOptions>;
}

const NavLink = ({ items, title, href }: { title?: string; href?: string; items?: Array<ItemOptions> }) => {
    return (
        (typeof href === "string" && href.trim() !== "")
            ?
            <Link
                href={href}
                className="flex items-center gap-x-3 text-sm text-slate-900 font-medium py-2"
            >
                {title}
            </Link>
            :
            <Accordion.Root multiple>
                {
                    items?.map(item => (
                        <Accordion.Item key={item.id} value={item.id}>
                            {
                                Array.isArray(item?.items)
                                    ?
                                    ({ isOpen }) => (
                                        <>
                                            <Accordion.ItemTrigger className="flex items-center justify-between w-full py-2">
                                                <span className="text-sm text-slate-900 font-medium">
                                                    {item.title}
                                                </span>
                                                <Accordion.ItemIndicator className="text-slate-800">
                                                    <ChevronDown
                                                        width={20}
                                                        height={20}
                                                        strokeWidth={1.3}
                                                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                                    />
                                                </Accordion.ItemIndicator>
                                            </Accordion.ItemTrigger>

                                            <Accordion.ItemContent className="mt-1 mb-3 pt-1 border-t border-t-transparent/20 pr-3.5">
                                                <NavLink
                                                    title={item.title}
                                                    href={item.href}
                                                    items={item.items}
                                                />
                                            </Accordion.ItemContent>
                                        </>
                                    )
                                    :
                                    <Link
                                        href={item.href as string}
                                        className="flex items-center gap-x-3 text-sm text-slate-900 font-medium py-2"
                                    >
                                        {item.title}
                                    </Link>
                            }
                        </Accordion.Item>
                    ))
                }
            </Accordion.Root>
    )
}

function MobileMenu({ items }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <Menu width={20} height={20} />
            </button>

            <div
                onClick={() => setIsOpen(false)}
                className={`fixed top-0 left-0 w-full h-full z-[999] bg-black/50 pointer-events-none
            opacity-0 transition-opacity duration-200 ${isOpen ? "!opacity-100 !pointer-events-auto" : ""}`}
            >
            </div>

            <div
                className={`fixed top-0 left-0 w-full h-full max-w-[19rem] z-[1000] bg-gray-100 -translate-x-full
            transition-transform duration-300 p-2 overflow-y-auto ${isOpen ? "!translate-x-0" : ""}`}
            >
                {
                    items.map(item => (
                        <NavLink
                            items={item.items}
                            title={item?.title}
                            href={item.href}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default MobileMenu