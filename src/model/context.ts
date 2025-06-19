import { createContext, RefObject } from "react"
import { Project } from "./projects"
import { Experience } from "./experiences"


export type InViewContextType = {
    isInView: boolean
    elementRef: RefObject<HTMLElement | null> | {current: null}
}

export type AppContextType = {
    projects: Project[]
    cardSeed: number[]
    experiences: Experience[]
}

export const InViewContext = createContext<InViewContextType>({
    isInView: false,
    elementRef: {current: null}
})

export const AppContext = createContext<AppContextType>({
    projects: [],
    cardSeed: [],
    experiences: [],
})