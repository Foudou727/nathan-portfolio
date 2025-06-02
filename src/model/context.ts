import { createContext, RefObject } from "react"

export type InViewContextType = {
    isInView: boolean
    elementRef: RefObject<HTMLElement | null> | {current: null}
}

export const InViewContext = createContext<InViewContextType>({
    isInView: false,
    elementRef: {current: null}
})