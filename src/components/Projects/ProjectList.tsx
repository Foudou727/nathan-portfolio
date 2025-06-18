import React, { useContext } from "react";
import { AppContext } from "../../model/context";
import { Project } from "../../model/projects";
import AppearIntoView from '../MotionHandlers/AppearIntoView';
import ProjectListItem from "./ProjectListItem";

function PrivateProjectList() {
    const context = useContext(AppContext)
    const items: Project[] = context.projects
    console.log(items)
    return (
        <div className="w-screen">
            {items.map((item, index) => {
                return (
                    <div className="flex mt-15 mb-3" key={item.name}>
                        <AppearIntoView origin={index%2 == 0 ? 'left' : 'right'}>
                            <ProjectListItem 
                                origin={index%2 == 0 ? 'left' : 'right'}
                                item={item}
                                index={index}
                            />
                        </AppearIntoView>
                    </div>
                )
            }
            )}
        </div>
    )
}

const ProjectList = React.memo(PrivateProjectList)

export default ProjectList