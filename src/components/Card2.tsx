import Image from "next/image";


interface Props {
    img: string;
    title: string;
    subTitle: string;
}

function Card2({ img, subTitle, title }: Props) {
    return (
        <div className="w-full aspect-video bg-white flex flex-col items-center justify-center relative group overflow-hidden rounded-lg">
            <Image
                alt=""
                src={img}
                width={250}
                height={250}
                className="w-72 h-auto group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500 -translate-y-4"
            />

            <div className="absolute bottom-0 left-0 w-full bg-gray-100 p-2 group-hover:opacity-0 transition-opacity duration-500">
                <p
                    className="text-base text-slate-900 font-medium text-center"
                >
                    {title}
                </p>
            </div>

            <p
                className="text-xl text-white font-medium w-full
                [text-shadow:0px_0px_7px_black] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                text-center opacity-0 group-hover:opacity-100 duration-500"
            >
                {subTitle}
            </p>
        </div>
    )
}

export default Card2