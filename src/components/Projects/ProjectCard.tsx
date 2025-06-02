import React from "react";
import { Project } from "../../model/projects";
import Separator from "../Separator";
import placeholder from '../../assets/placeholder.jpg'
import cloud from '../../assets/cloud.png'

type Props = {
    project: Project
}

export default function ProjectCard({project}: Props) {



    return (
        <div className="relative">
            <img src={cloud} alt={'cloud'} 
                className='absolute left-2/5 -top-1/5 rotate-20 w-fit h-fit scale-50'
            />
            <div className="p-2 border-6 border-gray-600 bg-radial to-white from-gray-500 fill-gray-800 rounded-4xl m-2 w-150 h-150">
                <div className="m-2 border-2 border-black flex-col rounded-4xl h-97/100 w-auto bg-blue-200">
                    <h1 className="m-6 text-xl">{project.name}</h1>
                    <Separator />
                    <img className="flex-4 justify-self-center m-2 w-7/8 h-auto" src={placeholder} alt={project.name} />
                    <Separator />
                    <p className="m-4">{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export const MemoizedProjectCard = React.memo(ProjectCard)