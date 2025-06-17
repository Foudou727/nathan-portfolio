import { motion, useInView, Variants } from 'motion/react';
import { ReactNode, RefObject, useContext } from "react";
import { AppContext, InViewContext } from '../../model/context';
import { useContainerDimensions, useMobile, useWindowSize } from "../../my-hooks";

interface Props {
    origin: 'left' | 'right'
    index?: number
    children: ReactNode
}

export default function AppearIntoView({origin, index, children}: Props) {

    const [width] = useWindowSize()

    const isMobile = useMobile()

    const appContext = useContext(AppContext)
    const inViewContext = useContext(InViewContext)
    const ref = inViewContext.elementRef as RefObject<HTMLDivElement | null>
    const dimensions = useContainerDimensions(ref) 
    
    const randomOffset = index ? (appContext.cardSeed[index]*10)%300 - 100 : 0

    const isInView = useInView(ref, {
        margin: '-10% 200% -10% 200%',
        amount: 0.4
    })

    const bigScreenX = origin == 'left' ? 200 + randomOffset : width - 200 - dimensions.width - randomOffset
    const onScreenX = !isMobile ? bigScreenX : width/4 - dimensions.width/2

    const variants: Variants = {
        offScreen: {
            opacity: 0.2,
            x: origin == 'left' ? -800 : width + 800 ,
            transition: {
                duration: 0.4
            }
        },

        onScreen: {
            x: onScreenX,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.5,
            }
        }
    }

    return (
        <motion.div
            initial='offScreen'
            animate={isInView ? 'onScreen' : 'offScreen'}
            variants={variants}
        >
            <div className='w-fit' ref={ref}>
                {children}
            </div>
        </motion.div>
    )
}


