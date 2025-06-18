import { useInView, UseInViewOptions } from "motion/react";
import { ReactNode, useMemo, useRef } from "react";
import { InViewContext } from "../../model/context";

type Props =  UseInViewOptions & {
    children: ReactNode
}

export default function InView({root, margin, amount, once, initial, children}: Props) {

    const elementRef = useRef(null)

    const isInView = useInView(elementRef, {
        root,
        margin,
        amount,
        once,
        initial,
    }) || false

    const contextValue = useMemo(() => {
        return {isInView, elementRef}
    }, [isInView])

    return (
        <InViewContext.Provider value={contextValue}>
            <div className="w-fit h-fit">
                {children}
            </div>
        </InViewContext.Provider>
    )
}