
"use client";

import ArticleCard1 from "./ArticleCard1"
import { Pagination } from "@ark-ui/react"
import { ChevronsRight, ChevronsLeft } from "lucide-react"

function ArticlesSection1() {
    return (
        <div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ArticleCard1
                    date="1402/08/30 در ساعت 11:00:00"
                    description="نمایشگاه MEDICA آلمان در شهر دوسلدورف با بیش از 4500 غرفه‌دار از 66 کشور و بیش از 81000 بازدیدکننده"
                    title="مدیکا 2023 دوسلدورف، از بزرگترین نمایشگاه های صنعت دارو، درمان و پزشکی"
                    slug="مدیکا-2023-دوسلدورف،-از-بزرگترین-نمایشگاه-های-صنعت-دارو،-درمان-و-پزشکی"
                    img="/slide-3.jpg"
                />

                <ArticleCard1
                    date="1402/08/30 در ساعت 11:00:00"
                    description="نمایشگاه MEDICA آلمان در شهر دوسلدورف با بیش از 4500 غرفه‌دار از 66 کشور و بیش از 81000 بازدیدکننده"
                    title="مدیکا 2023 دوسلدورف، از بزرگترین نمایشگاه های صنعت دارو، درمان و پزشکی"
                    slug="مدیکا-2023-دوسلدورف،-از-بزرگترین-نمایشگاه-های-صنعت-دارو،-درمان-و-پزشکی"
                    img="/slide-1.jpg"
                />

                <ArticleCard1
                    date="1402/08/30 در ساعت 11:00:00"
                    description="نمایشگاه MEDICA آلمان در شهر دوسلدورف با بیش از 4500 غرفه‌دار از 66 کشور و بیش از 81000 بازدیدکننده"
                    title="مدیکا 2023 دوسلدورف، از بزرگترین نمایشگاه های صنعت دارو، درمان و پزشکی"
                    slug="مدیکا-2023-دوسلدورف،-از-بزرگترین-نمایشگاه-های-صنعت-دارو،-درمان-و-پزشکی"
                    img="/slide-4.jpg"
                />

                <ArticleCard1
                    date="1402/08/30 در ساعت 11:00:00"
                    description="نمایشگاه MEDICA آلمان در شهر دوسلدورف با بیش از 4500 غرفه‌دار از 66 کشور و بیش از 81000 بازدیدکننده"
                    title="مدیکا 2023 دوسلدورف، از بزرگترین نمایشگاه های صنعت دارو، درمان و پزشکی"
                    slug="مدیکا-2023-دوسلدورف،-از-بزرگترین-نمایشگاه-های-صنعت-دارو،-درمان-و-پزشکی"
                    img="/slide-5.jpg"
                />
            </div>

            <Pagination.Root count={100} pageSize={10} siblingCount={1} className="flex items-center gap-x-4 mx-auto w-max mt-8">
                {({ pages }) => (
                    <>
                        <Pagination.PrevTrigger
                            className="w-8 aspect-square bg-gray-200 text-sm text-slate-900 font-medium rounded grid place-items-center"
                        >
                            <ChevronsRight width={20} height={20} strokeWidth={1.5} />
                        </Pagination.PrevTrigger>

                        <div className="flex items-center gap-x-1">
                            {pages.map((page, index) =>
                                page.type === 'page' ? (
                                    <Pagination.Item
                                        key={index} {...page}
                                        className="w-8 aspect-square bg-gray-200 text-sm text-slate-900 font-medium rounded
                                        hover:bg-[#357082] data-selected:bg-[#357082] data-selected:text-white hover:text-white"
                                    >
                                        {page.value}
                                    </Pagination.Item>
                                ) : (
                                    <Pagination.Ellipsis key={index} index={index}>
                                        &#8230;
                                    </Pagination.Ellipsis>
                                ),
                            )}
                        </div>

                        <Pagination.NextTrigger
                            className="w-8 aspect-square bg-gray-200 text-sm text-slate-900 font-medium rounded grid place-items-center"
                        >
                            <ChevronsLeft width={20} height={20} strokeWidth={1.5} />
                        </Pagination.NextTrigger>
                    </>
                )}
            </Pagination.Root>
        </div>
    )
}

export default ArticlesSection1