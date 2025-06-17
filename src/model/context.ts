import { createContext, RefObject } from "react"
import { Project } from "./projects"
import placeholder from '../assets/ProjectAssets/placeholder.jpg'


export type InViewContextType = {
    isInView: boolean
    elementRef: RefObject<HTMLElement | null> | {current: null}
}

export type AppContextType = {
    projects: Project[]
    cardSeed: number[]
}

export const InViewContext = createContext<InViewContextType>({
    isInView: false,
    elementRef: {current: null}
})

const projects = [{
        name: '1',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '2',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '3',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '4',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '5',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '6',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '7',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '8',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '9',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    },
    {
        name: '10',
        slug: 'ada',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate dicta saepe possimus magnam veniam numquam totam debitis impedit repudiandae iure, doloremque molestiae incidunt id. Nobis minus placeat odit incidunt.',
        image: placeholder,
    }
]

export const AppContext = createContext<AppContextType>({
    projects,
    cardSeed: projects.map(() => {
        return Math.floor(Math.random()*8081)
    }),
})