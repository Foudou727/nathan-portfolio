import Title2 from "../../assets/Titles/Title2"
import { Experience } from "../../model/experiences"
import Separator from "../Separator"

interface Props {
    experience: Experience
}

export default function ExperienceCard({experience}: Props) {
    return (
        <div className="border-4 rounded-4xl m-auto place-content-center p-8 border-gray-600 bg-gradient-to-bl from-gray-300 to-blue-200 w-200 min-h-150 h-fit">
            <div className="border-2 rounded-4xl border-white bg-gradient-to-bl from-gray-400 to-gray-300 w-full h-full m-auto flex flex-col items-center p-6 space-y-2">
                <Title2>{experience.name}</Title2>
                <div className="p-6 pb-0">
                    <img src={experience.image} alt={experience.image} className="rounded-4xl border-4 border-black"/>
                </div>
                <Separator className="w-full p-4"/>
                <p className="text-white italic text-xl">{`${experience.startDate} - ${experience.endDate}`}</p>
            </div>
        </div>
    )
}