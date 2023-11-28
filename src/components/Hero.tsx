
'use client';

import { useKeenSlider } from "keen-slider/react"
import Image from "next/image";
import Card3 from "./Card3";
import { useState } from "react"

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 1
        },
        slideChanged: (slider) => setCurrentSlide(slider.track.details.abs)
    })

    return (
        <div className="w-full">
            <div ref={sliderRef} className="keen-slider">

                <div data-slide-index='0' className="keen-slider__slide">
                    <Card3
                        title="همکاری‌های فناورانه بین کشور‌های ایران و برزیل"
                        subTitle="تجارت با کشورهای حوزه آمریکای لاتین یکی از فرصت های مغفول در تجارت بین الملل برای ایران است. کشور برزیل به عنوان یکی از بازارهای مستعد برای حضور شرکت های دانش بنیان بوده و با هدف گسترش و توسعه بازار بین الملل شرکت های مذکور انجام می شود."
                        img="/slide-1.jpg"
                        animate={currentSlide === 0}
                        seeMoreBtnText="مشاهده بیشتر"
                    />
                </div>

                <div data-slide-index='1' className="keen-slider__slide">
                    <Card3
                        title="حضور ایران در نمایشگاه عرب هلث با حمایت صندوق تجهیزات پزشکی"
                        subTitle="پاویون ملی ایران در نمایشگاه عرب هلث دبی با حمایت صندوق نوآوری و شکوفایی و مرکز تعاملات بین‌المللی علم و فناوری ریاست جمهوری مستقر خواهد شد."
                        img="/slide-2.jpg"
                        animate={currentSlide === 1}
                        seeMoreBtnText="مشاهده بیشتر"
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero