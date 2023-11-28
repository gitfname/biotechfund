
import { ReactNode, Suspense } from "react"
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
const TopNavbar = dynamic(() => import("@/components/TopNavbar"), { ssr: false })

interface Props {
    children: ReactNode;
}

function layout({ children }: Props) {
    return (
        <div className="w-full relative">
            <Suspense
                fallback={<div className="w-full h-10 bg-slate-300 animate-pulse"></div>}
            >
                <TopNavbar />
            </Suspense>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout