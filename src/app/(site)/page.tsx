import ArticleCard1 from "@/components/ArticleCard1"
import ArticlesSection1 from "@/components/ArticlesSection1"
import Card1 from "@/components/Card1"
import Card2 from "@/components/Card2"
import Hero from "@/components/Hero"
import OurCustomersSlider from "@/components/OurCustomersSlider"
import Video from "@/components/Video"
import Image from "next/image"

function page() {
    return (
        <div>
            <div className="max-lg:hidden">
                <Hero />
            </div>

            <div className="bg-nav_bg w-full py-10 md:py-16 px-2 md:px-12">

                <div className="w-full grid md:grid-cols-2 gap-6">
                    <div>
                        <div className="w-max bg-white">
                            <h2
                                className="text-lg text-slate-900 font-medium rounded-sm break-words"
                            >
                                صندوق حمایت از سرمایه‌گذاری زیست فناوری
                            </h2>
                        </div>

                        <p className="max-w-prose text-sm text-slate-800 mt-8 font-medium">
                            محتوا ویدیو شامل معرفی کامل صندوق حمایت از سرمایه‌گذاری زیست فناوری، خدمات، اولویت‌های صندوق جهت ارائه خدمات همچنین راهنمایی و شرح کامل فرایندهای درخواست استفاده از خدمات است.
                        </p>
                    </div>

                    <Video
                        src=""
                        thumbnail="/video-thumbnail.jpg"
                    />
                </div>

                <h2
                    className="text-xl text-slate-900 font-medium text-center mt-20"
                >
                    بخشی از عملکرد ما
                </h2>

                <Image
                    alt=""
                    src="/symbol-1.jpg"
                    width={214}
                    height={25}
                    quality={100}
                    className="w-48 h-auto block mx-auto mt-3"
                />

                <div className="mt-8 w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Card1
                        img="/image-1.jpg"
                        title="63824"
                        subTitle="ضمانتنامه و تضمین تعهدات (میلیارد ریال)"
                    />

                    <Card1
                        img="/image-2.jpg"
                        title="6413"
                        subTitle="عقود غیر مشارکتی (میلیارد ریال)"
                    />

                    <Card1
                        img="/image-3.jpg"
                        title="1885"
                        subTitle="سرمایه گذاری ریسک پذیر و مشارکت (میلیارد ریال)"
                    />

                    <Card1
                        img="/image-4.jpg"
                        title="21543"
                        subTitle="طرح های ارزیابی شده (میلیارد ریال)"
                    />


                </div>

            </div>

            <div className="py-16">
                <h2 className="text-xl text-[#106880] font-semibold text-center">
                    برای کسب اطلاعات بیشتر از طریق شماره تلفن 88033910 با ما در ارتباط باشید. |
                </h2>
            </div>

            <div className="bg-nav_bg w-full py-16 px-12">

                <h2
                    className="text-xl text-slate-900 font-medium text-center"
                >
                    سرفصل خدمات ما
                </h2>

                <Image
                    alt=""
                    src="/symbol-1.jpg"
                    width={214}
                    height={25}
                    quality={100}
                    className="w-48 h-auto block mx-auto mt-3"
                />

                <p className="text-base text-slate-900 font-medium text-center mt-3">
                    با کلیک روی هر خدمت، می‌توانید جزئیات آن را مطالعه فرمایید.
                </p>

                <div className="mt-8 w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card2
                        img="/image-7.jpg"
                        title="سرمایه گذاری جسورانه (VC)"
                        subTitle="سرمایه گذاری جسورانه (VC)"
                    />
                    <Card2
                        img="/image-6.jpg"
                        title="خدمات ارزیابی و امکان سنجی"
                        subTitle="خدمات ارزیابی و امکان سنجی"
                    />
                    <Card2
                        img="/image-5.jpg"
                        title="وام و تسهیلات"
                        subTitle="وام و تسهیلات"
                    />
                    <Card2
                        img="/image-6.jpg"
                        title="خرید دین"
                        subTitle="خرید دین"
                    />
                    <Card2
                        img="/image-7.jpg"
                        title="ضمانت نامه"
                        subTitle="ضمانت نامه"
                    />
                    <Card2
                        img="/image-8.jpg"
                        title="کارگذاری منابع مالی"
                        subTitle="کارگذاری منابع مالی"
                    />
                </div>

            </div>

            <div className="w-full py-10 md:py-16 px-2 md:px-12 bg-gray-100">

                <h2
                    className="text-xl text-slate-900 font-medium text-center"
                >
                    اخبار
                </h2>
                <Image
                    alt=""
                    src="/symbol-1.jpg"
                    width={214}
                    height={25}
                    quality={100}
                    className="w-48 h-auto block mx-auto mt-3"
                />

                <div className="mt-10">
                    <ArticlesSection1 />
                </div>
            </div>

            <div className="w-full py-10 md:py-16 px-2 md:px-12">

                <h2
                    className="text-xl text-slate-900 font-medium text-center"
                >
                    شبکه همکاران
                </h2>

                <Image
                    alt=""
                    src="/symbol-1.jpg"
                    width={214}
                    height={25}
                    quality={100}
                    className="w-48 h-auto block mx-auto mt-3"
                />

                <p className="text-base text-slate-900 font-medium text-center mt-3">
                    دستگاه‌های اجرایی، نهادهای دولتی، مراکز علمی و تحقیقاتی و شرکت‌ها و صندوق های سرمایه‌گذاری
                </p>

                <div className="mt-8">
                    <OurCustomersSlider />
                </div>
            </div>

            <div className="w-full py-16 px-12">

                <h2
                    className="text-xl text-slate-900 font-medium text-center"
                >
                    مقدمه
                </h2>

                <Image
                    alt=""
                    src="/symbol-1.jpg"
                    width={214}
                    height={25}
                    quality={100}
                    className="w-48 h-auto block mx-auto mt-3"
                />

                <p className="text-lg text-slate-900 font-medium text-center mt-10">
                    صندوق حمایت از سرمایه‌گذاری زیست فناوری  با حمایت ستاد توسعه زیست فناوری و مشارکت بخش غیردولتی راه‌اندازی و شروع به فعالیت نموده است.<br />
                    هدف ما سرمایه گذاری جسورانه و تامین منابع مالی به منظور حمایت از کسب‌ و کارهای فناورانه، تجاری‌سازی طرح‌های نوآورانه و مشارکت در پروژه‌های حوزه زیست فناوری و رفع موانع و مشکلات پیش روی شرکت‌ها در مسیر تجاری‌سازی و تولید محصولات زیست فناورانه و ارتقای سطح علمی و اقتصادی کشورمان در این حوزه می‌باشد.
                </p>
            </div>
        </div>
    )
}

export default page