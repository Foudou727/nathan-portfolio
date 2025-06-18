import { Project } from "../../model/projects"
import ProjectCard from "./ProjectCard"
import ProjectLongDescription from "./ProjectLongDescription"

interface Props {
    origin: 'left' | 'right'
    index: number
    item: Project
}

export default function ProjectListItem({origin, index, item}: Props) {

    const items = [
        (
            <ProjectCard
                    index={index}
                    project={item}
            />
        ),
        (
            <ProjectLongDescription description={item.description}/>
        )
    ]
    return (
        <div className={`flex flex-row gap-8 justify-center items-center`}>
            {
                origin == 'left' ? items : [items[1], items[0]]
            }
        </div>
    )
}