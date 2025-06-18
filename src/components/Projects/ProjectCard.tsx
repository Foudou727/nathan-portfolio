import React from "react";
import { Project } from "../../model/projects";
import Separator from "../Separator";
import ProjectDecorator from "./ProjectDecorator";

type Props = {
    project: Project
    index: number
}

function PrivateProjectCard({project, index}: Props) {

    return (
        <div className="relative">
            <div className="relative">
                <ProjectDecorator index={index} />
                <div className="p-2 border-6 border-gray-600 bg-radial to-white from-gray-500 fill-gray-800 rounded-4xl m-2 w-100 h-100 md:w-150 md:h-150">
                    <div className="m-2 p-2 border-2 border-black flex-col rounded-4xl h-97/100 w-auto bg-blue-200">
                        <h1 className="m-6 text-xl">{project.name}</h1>
                        <Separator />
                        <div className="m-2 flex content-center w-96/100 h-auto max-h-2/3 overflow-y-scroll flex-nowrap"
                            style={{scrollbarWidth: 'none', alignItems: 'center'}}
                        >
                            <img className="items-center w-max m-auto" src={project.image} alt={project.name}/>
                        </div>
                        <Separator />
                        <p className="m-4 text-center italic">{project.comment}</p>
                    </div>
                </div>
            </div>
            <div className="absolute h-100 md:w-150 md:h-150 brightness-0 opacity-25 top-1/25 left-1/20 bg-black rounded-2xl -z-1000"/>
        </div>
    )
}

const ProjectCard = React.memo(PrivateProjectCard)

export default ProjectCard