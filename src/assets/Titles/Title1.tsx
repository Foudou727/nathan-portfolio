interface Props {
    children: string
    className?: string
}

export default function Title1({children, className = ''}: Props) {

    const titleStyle = 'text-6xl w-fit m-6 ml-0 text-black text-bold text-shadow-xs text-shadow-gray-600 p-4 pt-0 border-b-4 border-white rounded-2xl'
    return (
        <h1 className={`${titleStyle} ${className}`}>{children}</h1>
    )
}