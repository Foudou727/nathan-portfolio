interface Props {
    children: string
    className?: string
}

export default function Title2({children, className = ''}: Props) {

    const titleStyle = 'text-4xl w-fit text-black text-bold text-shadow-xs text-shadow-gray-600 text-white'
    return (
        <h2 className={`${titleStyle} ${className}`}>{children}</h2>
    )
}