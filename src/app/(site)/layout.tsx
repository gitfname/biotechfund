
import { ReactNode } from "react"
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
const TopNavbar = dynamic(() => import("@/components/TopNavbar"), { ssr: false })


interface Props {
    children: ReactNode;
}

function layout({ children }: Props) {
    return (
        <div className="w-full relative">
            <TopNavbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout