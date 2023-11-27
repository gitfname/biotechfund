import Image from "next/image";
import { Play } from "lucide-react"

interface Props {
    thumbnail: string;
    src: string;
}

function Video({ src, thumbnail }: Props) {
    return (
        <div className="w-full aspect-video rounded-lg overflow-hidden relative group">
            <Image
                alt=""
                src={thumbnail}
                fill
            />

            <div
                className="absolute w-full h-full bg-transparent/40 opacity-0 transition-opacity duration-300
                group-hover:opacity-100"
            />

            <button
                className="bg-primary w-14 aspect-square rounded-full absolute top-1/2 left-1/2
                -translate-y-1/2 -translate-x-1/2 grid place-items-center group-hover:bg-white transition-all
                active:scale-95"
            >
                <Play width={24} height={24} className="fill-white stroke-transparent group-hover:fill-primary transition-colors" />
            </button>
        </div>
    )
}

export default Video