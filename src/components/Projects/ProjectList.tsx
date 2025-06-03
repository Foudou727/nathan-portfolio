import { useContext } from "react";
import { Project } from "../../model/projects";
import AppearIntoView from '../MotionHandlers/AppearIntoView'
import InView from "../MotionHandlers/InView";
import { MemoizedProjectCard } from "./ProjectCard";
import { AppContext } from "../../model/context";
import React from "react";

function PrivateProjectList() {
    const context = useContext(AppContext)
    const items: Project[] = context.projects
    return (
        <div className="max-w-screen">
            {items.map((item, index) => {
                return (
                    <div className="mt-15 mb-3" key={index}>
                        <InView margin="-10% 200% -10% 200%" amount={0.4}>
                            <AppearIntoView index={index} origin={!(index%2) ? 'left' : 'right'}>
                                <MemoizedProjectCard
                                    index={index}
                                    project={item}
                                />
                            </AppearIntoView>
                        </InView>
                    </div>
                )
            }
            )}
        </div>
    )
}

const ProjectList = React.memo(PrivateProjectList)

export default ProjectList