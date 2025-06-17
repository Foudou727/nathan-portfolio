import { ReactNode, useContext, useEffect, useMemo } from "react";
import { bgStrip1, bgStrip2, bgStrip3 } from "../../assets/images";
import { AppContext } from "../../model/context";

interface Props {
    children: ReactNode
}
export default function SplashScreen({children}: Props) {

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
        <>
            <div className={`absolute bg-blue-100 z-9999 scale-40`}
                style={{
                    backgroundImage: `url(${image})`,
                    transform: 'rotate(30deg)',
                    translate: '-50% -50%',
                    width: '600vw',
                    height: '600vh',
                    animation: 'animatedBackground 200s linear infinite'
                }}
            >
            <div className="absolute w-full h-full">
                <h1 className="relative top-1/2 left-1/2 text-3xl"></h1>
            </div>
            </div>

            {children}
        </>
    )
}

