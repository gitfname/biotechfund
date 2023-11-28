
'use client';

import Image from "next/image";
import { useRef } from "react"
import styles from "@/styles/Card3.module.css"


interface Props {
    title: string;
    subTitle: string;
    seeMoreBtnText: string;
    img: string;
    animate: boolean;
}

function Card3({ img, seeMoreBtnText, subTitle, title, animate }: Props) {
    const imageRef = useRef<HTMLImageElement>(null)
    const titleRef = useRef<HTMLParagraphElement>(null)
    const subTitleRef = useRef<HTMLParagraphElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    if (animate) {
        imageRef.current?.classList.add(styles["animate_image"])
        titleRef.current?.classList.add(styles["animate_title"])
        subTitleRef.current?.classList.add(styles["animate_subtitle"])
        buttonRef.current?.classList.add(styles["animate_button"])
    }
    else {
        imageRef.current?.classList.remove(styles["animate_image"])
        titleRef.current?.classList.remove(styles["animate_title"])
        subTitleRef.current?.classList.remove(styles["animate_subtitle"])
        buttonRef.current?.classList.remove(styles["animate_button"])
    }

    return (
        <div className="relative w-full aspect-video grid grid-cols-2">
            <Image
                ref={imageRef}
                alt=""
                fill
                src={img}
            />

            <div className="z-10 p-6 py-10 overflow-hidden">
                <p ref={titleRef} className="text-3xl text-white font-medium">
                    {title}
                </p>

                <p ref={subTitleRef} className="text-lg text-white font-medium mt-6 leading-8">
                    {subTitle}
                </p>

                <button
                    ref={buttonRef}
                    className="text-base text-white bg-transparent border-2 border-white py-3 px-8 rounded-md mt-10
                    hover:bg-white hover:text-slate-900 transition-colors duration-200"
                >
                    {seeMoreBtnText}
                </button>
            </div>
        </div>
    )
}

export default Card3