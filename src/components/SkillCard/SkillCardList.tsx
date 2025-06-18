import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export default function({children}: Props) {
    return (
        <div className='w-full flex flex-col justify-between items-center gap-10 bg-gray-800 rounded-6xl p-10 rounded-2xl border-white border-4'>
            {children}
        </div>
    )
}