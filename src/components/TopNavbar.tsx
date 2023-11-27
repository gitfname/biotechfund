import Image from "next/image"
import TextInput from "./TextInput"
import NavigationDropdown from "./NavigationDropdown"

function TopNavbar() {
    return (
        <nav className="w-full">
            <div className="w-full flex items-center justify-between bg-nav_bg px-12 py-2">

                <div className="flex items-center w-full max-w-sm">
                    <button className="btn btn-primary">
                        جستجو
                    </button>
                    <TextInput placeholder="مدل , نام ویا کلمه کلیدی" className="text-right bg-white/75" />
                </div>

                <div className="flex items-center gap-x-3">
                    <button className="appearance-none text-sm font-medium">
                        ورود به سایت
                    </button>

                    <div className="self-stretch w-px bg-transparent/10"></div>

                    <button className="appearance-none text-sm font-medium">
                        عضویت
                    </button>
                </div>

            </div>

            <div className="bg-white w-full flex items-center justify-between px-10">
                <div className="flex items-center gap-x-3 self-stretch">
                    <NavigationDropdown
                        isActive={false}
                        title="اخبار و مقالات"
                        href="/about-us"
                        items={[
                            { id: "1", href: "", title: "اخبار" },
                            { id: "2", href: "", title: "مقالات" }
                        ]}
                    />

                    <NavigationDropdown
                        isActive={false}
                        title="پیوند ها"
                        href="/about-us"
                        items={[
                            {
                                id: "1", href: "", title: "مراکز دولتی",
                                items: [
                                    { id: "1-1", href: "", title: "شورای عالی انقلاب فرهنگی" },
                                    { id: "1-2", href: "", title: "معاونت علمی و فناوری" },
                                    { id: "1-3", href: "", title: "ستاد تئسعه زیست فناوری" },
                                ]
                            },
                            {
                                id: "2", href: "", title: "شرکت ها و موسسات همکار",
                                items: [
                                    { id: "1-1", href: "", title: "انجمن سرمایه گذاری خطر پذیر" },
                                    { id: "2-2", href: "", title: "شرکت مشاور سرمایه گذاری فاینتک" },
                                    { id: "2-3", href: "", title: "صندوق سرمایه گذاری جسورانه اینوتک آشنا" },
                                    { id: "2-4", href: "", title: "صندوق توسعه صادرات و تبادل فناوری" },
                                    { id: "2-5", href: "", title: "شرکت اعتبار سنجی ارزش آفرین اعتماد" },
                                    { id: "2-6", href: "", title: "گروه پیشگامان کارآفرینی کارن" }
                                ]
                            },
                            { id: "3", href: "", title: "سامانه شرکت دانش بنیان" }
                        ]}
                    />

                    <NavigationDropdown
                        isActive={false}
                        title="عملکرد صندوق"
                        href="/about-us"
                        items={[
                            { id: "1", href: "", title: "شرکت های وابسه" },
                            { id: "2", href: "", title: "طرح های مورد حمایت" }
                        ]}
                    />

                    <NavigationDropdown
                        isActive={false}
                        title="خدمات صندوق"
                        href="/about-us"
                        items={[
                            { id: "1", href: "", title: "سرمایه گذاری جسورانه" },
                            { id: "2", href: "", title: "انواع وام تسهیلات" },
                            { id: "3", href: "", title: "ضمانت نامه" },
                            { id: "4", href: "", title: "کارگذاری منابع مالی" },
                            { id: "5", href: "", title: "ارزیابی و امکان سنجی" },
                            { id: "6", href: "", title: "خرید دین" },
                            { id: "7", href: "", title: "دریافت خدمات" }
                        ]}
                    />

                    <NavigationDropdown
                        isActive={false}
                        title="درباره ما"
                        href="/about-us"
                        items={[
                            { id: "1", href: "", title: "معرفی و سهامداران" },
                            { id: "2", href: "", title: "مستندات قانونی" },
                            { id: "3", href: "", title: "دانلود محتوی", items: [{ id: "3-1", href: "", title: "کاتالوگ صندوق" }] },
                            { id: "4", href: "", title: "ارتباط با صندوف" }
                        ]}
                    />
                </div>
                <Image
                    alt="website logo"
                    width={156}
                    height={160}
                    quality={100}
                    src="/logo.jpg"
                    className="w-20 h-auto"
                />
            </div>
        </nav>
    )
}

export default TopNavbar