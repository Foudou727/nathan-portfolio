import { createContext, RefObject } from "react"
import { Project } from "./projects"


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

export const AppContext = createContext<AppContextType>({
    projects: [],
    cardSeed: []
})