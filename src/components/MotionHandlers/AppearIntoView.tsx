import { motion, useInView } from 'motion/react';
import { ReactNode, useRef } from "react";
import { useContainerDimensions, useWindowSize } from "../../my-hooks";

interface Props {
    origin: 'left' | 'right'
    children: ReactNode
    
}

export default function AppearIntoView({origin, children}: Props) {

    const [width] = useWindowSize()
    const ref = useRef<HTMLDivElement | null>(null)
    const dimensions = useContainerDimensions(ref)

    const isInView = useInView(ref, {
        margin: '-10% 300% -10% 300%'
    }) || false

    const variants = {
        offScreen: {
            x: origin == 'left' ? -800 : width + 800,
            opacity: 0,
        },
        onScreen: {
            x: origin == 'left' ? 200 : width - dimensions.width - 200,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },

        },
    };
    return (
        <motion.div
            initial='offScreen'
            animate={isInView ? 'onScreen' : 'offScreen'}
            variants={variants}
            className='w-screen will-change-transform'
        >
            <div className='w-fit' ref={ref}>
                {children}
            </div>
        </motion.div>
    );
}


