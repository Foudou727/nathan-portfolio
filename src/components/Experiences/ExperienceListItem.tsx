import { Experience } from "../../model/experiences"
import Description from "../Projects/Description"
import ExperienceCard from "./ExperienceCard"

interface Props {
    experience: Experience
    index: number
}

export default function ExperienceListItem({experience, index}: Props) {

    const items = [
        (
            <div className={`${index%2 == 0 ? 'self-start' : 'self-end'} z-10`}>
                <ExperienceCard experience={experience}/>
            </div>
        ),
        (
            <Description description={experience.description} />
        )
    ]

    return (
        <div className="flex flex-row">
            {index%2 == 0 ? items : [items[1], items[0]]}
        </div>
    )
}