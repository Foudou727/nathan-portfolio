import { ReactNode, useContext, useEffect, useMemo } from "react";
import { bgStrip1, bgStrip2, bgStrip3, portfolioLogo } from "../../assets/images";
import { AppContext } from "../../model/context";
import { Link } from "react-router";
import { motion } from "motion/react";

interface Props {
}
export default function SplashScreen({}: Props) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => {
            document.body.classList.remove('overflow-hidden') 
        }
    }, [])

    const appContext = useContext(AppContext)

    const image = useMemo(() => {
        const images = [bgStrip1, bgStrip2, bgStrip3]
        return images[appContext.cardSeed[0] % images.length]
    }, [appContext])

    return (
        <motion.div>
            <div className={`absolute bg-blue-100 z-1000 scale-40`}
                style={{
                    backgroundImage: `url(${image})`,
                    transform: 'rotate(30deg)',
                    translate: '-50% -50%',
                    width: '600vw',
                    height: '600vh',
                    animation: 'animatedBackground 200s linear infinite'
                }}
            >
            </div>
            <img className="absolute z-1001 top-0 left-0 right-0 bottom-1/2 m-auto scale-50 rounded-full border-8 border-black bg-pink-50 p-10" 
            style={{ borderRadius: '10vw'}}src={portfolioLogo}/>
            <div className="absolute w-screen h-screen">
                <Link to={'/home'} className="relative z-1001 bg-pink-50 top-1/2 left-1/2">
                    <p className="w-50 h-20 bg-gradient-to-tr from-pink-200 via-orange-100 to-blue-200 border-4 border-black rounded-4xl text-center text-2xl text-black text-bold content-center"
                        style={{translate: '-50% 0%'}}
                    >Commencer</p>
                </Link>
            </div>
        </motion.div>
    )
}

