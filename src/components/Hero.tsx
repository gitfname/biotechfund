
'use client';

import { useKeenSlider } from "keen-slider/react"
import Image from "next/image";

function Hero() {
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 1
        }
    })

    return (
        <div className="w-full">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <div className="relative w-full aspect-video">
                        <Image
                            alt=""
                            fill
                            src="/slide-2.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero