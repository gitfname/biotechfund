import Image from "next/image";
import Link from "next/link";

interface Props {
    img: string;
    title: string;
    description: string;
    date: string;
    slug: string;
}

function ArticleCard1({ date, description, img, title, slug }: Props) {
    return (
        <div className="hover:-translate-y-6 transition-transform duration-500 group">
            <Link
                href={"/news/" + slug}
                className="w-full block rounded-xl overflow-hidden bg-white border border-slate-300
                group-hover:border-slate-400 group-hover:shadow-[0px_8px_10px_rgba(0,0,0,0.2)]
                transition-all duration-300"
            >
                <div className="w-full aspect-video relative">
                    <Image
                        alt=""
                        src={img}
                        fill
                    />
                </div>

                <div className="p-2 py-3 pb-6">
                    <p
                        className="text-sm text-slate-900 font-medium line-clamp-1 mt-3"
                    >
                        {title}
                    </p>

                    <p
                        className="text-sm text-slate-700 font-normal line-clamp-4 mt-3"
                    >
                        {description}
                    </p>

                    <button className="mt-5 btn btn-primary rounded-lg px-8">
                        ادامه مطلب
                    </button>
                </div>
            </Link>

            <p
                className="mt-2 text-xs text-center text-primary font-normal opacity-0 transition-opacity duration-200
                group-hover:opacity-100"
            >
                {date}
            </p>
        </div>
    )
}

export default ArticleCard1