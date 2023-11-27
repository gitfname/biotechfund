import Image from "next/image";

interface Props {
    img: string;
    title: string;
    subTitle: string;
}

function Card1({ img, subTitle, title }: Props) {
    return (
        <div className="w-full aspect-square bg-[#a7c0ba] border border-[#357082] rounded-lg p-3
        flex flex-col items-center justify-center">
            <Image
                alt=""
                src={img}
                width={250}
                height={250}
                className="w-20 h-auto rounded-lg"
            />

            <p
                className="mt-3 text-3xl text-slate-900 font-medium"
            >
                {title}
            </p>

            <p
                className="mt-4 text-sm text-slate-900 font-medium"
            >
                {subTitle}
            </p>
        </div>
    )
}

export default Card1