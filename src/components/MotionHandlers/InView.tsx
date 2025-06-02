import { useInView, UseInViewOptions } from "motion/react";
import { ReactNode, useContext, useRef } from "react";
import { InViewContext } from "../../model/context";

type Props =  UseInViewOptions & {
    children: ReactNode
}

export default function InView({root, margin, amount, once, initial, children}: Props) {

    const inViewRef = useRef(null)
    const context = useContext(InViewContext)
    context.elementRef = inViewRef 

    const isInView = useInView(context.elementRef, {
        root,
        margin,
        amount,
        once,
        initial,
    })

    return (
        <InViewContext.Provider value={{isInView, elementRef: inViewRef}}>
            <div className="w-fit h-fit">
                {children}
            </div>
        </InViewContext.Provider>
    )
}