import { cloud } from "../../assets/images"

interface Props {
    className?: string
    layer?: number
}

export default function SplashScreenCloud({className, layer = 1}: Props) {

    const computeLayer = () => {
       switch(layer) {
            case 1: return 'z-510';
            case 2: return 'z-509';
            case 3: return 'z-508';
            case 4: return 'z-507';
            case 5: return 'z-506';
            case 6: return 'z-505';
            case 7: return 'z-504';
            case 8: return 'z-503';
            case 9: return 'z-502';
            case 10: return 'z-501';
            default: return 'z-500';
        }
    }

    return <img src={cloud} alt='' className={`absolute overflow-clip ${computeLayer()} ${className}`} />
}