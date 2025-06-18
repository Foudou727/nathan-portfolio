interface Props {
    image: string
    title: string
}

export default function SkillCard({image, title}: Props) {
    return (
        <div className="p-2 border-black border-2 rounded-2xl">
            <p className="text-gray-200 p-2 border-b-2 border-gray-100 mb-1 text-xl">{title}</p>
            <img src={image} alt={image} className="w-32 h-auto bg-gradient-to-tr from-blue-100 to-pink-100 border-gray-200 border-2 rounded-2xl"/>
        </div>
    )
}