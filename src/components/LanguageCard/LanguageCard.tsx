interface Props {
    image: string
}

export default function LanguageCard({image}: Props) {
    return (
        <div className="p-2 border-black border-2 rounded-2xl">
            <img src={image} alt={image} className="w-32 h-auto bg-gradient-to-tr from-blue-100 to-pink-100 border-gray-200 border-2 rounded-2xl"/>
        </div>
    )
}