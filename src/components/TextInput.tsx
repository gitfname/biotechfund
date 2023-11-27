
import { cva, type VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const variants = cva(
    `text-sm text-slate-800 placeholder-slate-500 font-medium p-2 px-3 rounded-sm bg-white focus:outline-none w-full`
)

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof variants> { }

function TextInput({ className, ...props }: Props) {
    return (
        <input
            {...props}
            className={twMerge(variants({ className }))}
        />
    )
}

export default TextInput