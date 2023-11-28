
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import Image from "next/image"

function Footer() {
    return (
        <footer className="w-full px-3 md:px-8 py-16 bg-[#353535]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-y-12">

                <div className="grid grid-cols-2">
                    <div className="space-y-3.5">
                        <p className="text-sm text-white font-normal">
                            <ChevronRight width={16} height={16} strokeWidth={1.3} className="inline stroke-primary" />&nbsp;
                            خدمات صندوق
                        </p>
                        <p className="text-sm text-white font-normal">
                            <ChevronRight width={16} height={16} strokeWidth={1.3} className="inline stroke-primary" />&nbsp;
                            پیوند ها
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        <p className="text-sm text-white font-normal">
                            <ChevronRight width={16} height={16} strokeWidth={1.3} className="inline stroke-primary" />&nbsp;
                            درباره ما
                        </p>
                        <p className="text-sm text-white font-normal">
                            <ChevronRight width={16} height={16} strokeWidth={1.3} className="inline stroke-primary" />&nbsp;
                            عملکرد صندوق
                        </p>
                        <p className="text-sm text-white font-normal">
                            <ChevronRight width={16} height={16} strokeWidth={1.3} className="inline stroke-primary" />&nbsp;
                            اخبار و مقالات
                        </p>
                    </div>
                </div>

                <div>
                    <Image
                        alt="website logo"
                        src="/logo.jpg"
                        width={156}
                        height={160}
                        className="w-24 h-auto block mx-auto"
                    />

                    <div className="p-3 border border-primary mt-6 max-lg:max-w-xs mx-auto w-full">
                        <p className="text-white text-lg font-normal text-center -translate-y-7 bg-[#353535]">
                            صندوق حمایت از سرمایه<br />گذاری زیست فناوری
                        </p>

                        <p className="text-sm text-white font-normal mt-3">
                            صندوق سرمایه‌گذاری زیست فناوری با حمایت ستاد توسعه زیست فناوری معاونت علمی و فناوری رئیس جمهور و مشارکت بخش غیردولتی، راه‌اندازی و شروع به فعالیت نموده است.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-x-3 max-lg:flex-row-reverse max-lg:justify-end">
                    <div className="text-right md:text-left">
                        <div className="h-16 flex items-center">
                            <p className="text-sm text-white font-medium w-full">
                                تهران خیابان ملاصدرا، خیابان شیرازی شمالی، خیابان صائب تبریزی شرقی، پلاک 6
                            </p>
                        </div>

                        <div className="h-16 flex items-center">
                            <p className="text-sm text-white font-medium w-full">
                                تلفن: 02188033910
                            </p>
                        </div>

                        <div className="h-16 flex items-center">
                            <p className="text-sm text-white font-medium w-full">
                                شماره فکس: 02188033910 داخلی 444
                            </p>
                        </div>

                        <div className="h-16 flex items-center">
                            <p className="text-sm text-white font-medium w-full">
                                ایمیل: info@iranbiotechfund.ir
                            </p>
                        </div>

                        <div className="h-16 flex items-center">
                            <p className="text-sm text-white font-medium w-full">
                                کد پستی: 1991734385
                            </p>
                        </div>
                    </div>

                    <div className="self-stretch w-px bg-white"></div>

                    <div>
                        <div className="h-16 grid place-items-center">
                            <MapPin width={20} height={20} strokeWidth={1.3} className="stroke-white" />
                        </div>
                        <div className="h-16 grid place-items-center">
                            <Phone width={20} height={20} strokeWidth={1.3} className="stroke-white" />
                        </div>
                        <div className="h-16 grid place-items-center">
                            <Phone width={20} height={20} strokeWidth={1.3} className="stroke-white" />
                        </div>
                        <div className="h-16 grid place-items-center">
                            <Mail width={20} height={20} strokeWidth={1.3} className="stroke-white" />
                        </div>
                        <div className="h-16 grid place-items-center">
                            <Mail width={20} height={20} strokeWidth={1.3} className="stroke-white" />
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer