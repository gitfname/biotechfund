
'use client';

import { useKeenSlider } from "keen-slider/react"
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"

function OurCustomersSlider() {

    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(max-width: 639px)": {
                slides: {
                    perView: 2.3
                }
            },
            "(min-width: 640px) and (max-width: 768px)": {
                slides: {
                    perView: 3.3
                }
            },
            "(min-width: 768px) and (max-width: 1024px)": {
                slides: {
                    perView: 5.3
                }
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 6.2
                }
            }
        }
    })

    return (
        <div className="flex items-center gap-x-2 ">

            <button onClick={() => instanceRef.current?.next()} className="active:scale-95 translate-all duration-300 w-10 aspect-square rounded-full
            bg-transparent/10 grid place-items-center">
                <ChevronRight width={20} height={20} strokeWidth={1.5} className="stroke-slate-800" />
            </button>

            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-1.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-2.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-3.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-4.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-5.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-6.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-7.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-8.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-9.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-10.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="keen-slider__slide grid place-items-center p-3">
                    <Image
                        alt=""
                        src="/customer-11.jpg"
                        width={200}
                        height={200}
                        className="w-28 h-auto hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>

            <button onClick={() => instanceRef.current?.prev()} className="active:scale-95 translate-all duration-300 w-10 aspect-square rounded-full
            bg-transparent/10 grid place-items-center">
                <ChevronLeft width={20} height={20} strokeWidth={1.5} className="stroke-slate-800" />
            </button>
        </div>
    )
}

export default OurCustomersSlider