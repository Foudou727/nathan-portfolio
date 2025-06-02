import { Project } from "../../model/projects";
import AppearIntoView from '../MotionHandlers/AppearIntoView'
import InView from "../MotionHandlers/InView";
import { MemoizedProjectCard } from "./ProjectCard";

export default function ProjectList() {

    const items: Project[] = [
        {
            name: '1',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '2',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '3',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '4',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '5',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '6',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '7',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '8',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '9',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        },
        {
            name: '10',
            slug: 'ada',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
            image: 'blabla',
        }
    ]
    return (
        <div className="max-w-screen">
            {items.map((item, index) =>
                <div className="mt-15 mb-3" key={index}>
                    <InView margin="-10% 200% -10% 200%" amount={0.4}>
                        <AppearIntoView origin={!(index%2) ? 'left' : 'right'}>
                            <MemoizedProjectCard
                                project={item}
                            />
                        </AppearIntoView>
                    </InView>
                </div>
            )}
        </div>
    )
}