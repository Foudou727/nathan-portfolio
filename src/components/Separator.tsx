interface Props {
    className?: string
}

export default function Separator({className = ''}: Props) {
    return (
        <div className={`w-auto ml-5 mr-5 border-b-3 rounded border-white ${className}`}></div>
    )
}