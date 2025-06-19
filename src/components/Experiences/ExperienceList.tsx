import { useContext } from "react"
import { AppContext } from "../../model/context"
import dashedPath from '../../assets/ExperienceAssets/dashed-path.png'
import dashedPathStart from '../../assets/ExperienceAssets/dashed-path-start.png'
import dashedPathReverse from '../../assets/ExperienceAssets/dashed-path-reverse.png'
import { motion, Variants } from "motion/react"
import ExperienceListItem from "./ExperienceListItem"


export default function ExperienceList() {

    const appContext = useContext(AppContext)
    const variants: Variants = {
        offScreen: {
            y: '-20%',
            opacity: 0
        },

        onScreen: {
            y: '0%',
            opacity: 1,
            transition: {
                duration: 0.8,
            }
        }
    }
    return (
        <div className="flex flex-col">
            {
                appContext.experiences.map((experience, index) => {

                    const image = index == 0 ? dashedPathStart : (index%2 == 0 ? dashedPathReverse : dashedPath)
                    return (
                        <motion.div className="flex flex-col"
                            variants={variants}
                            initial={'offScreen'}
                            whileInView={'onScreen'}
                            viewport={{once: true, amount: 0, margin: "1000% 0% -40% 0%"}}
                        > 
                            <img src={image} alt={image} className="m-auto -z-10" />
                            <ExperienceListItem experience={experience} index={index}/>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}