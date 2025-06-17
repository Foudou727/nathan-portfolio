import { Link, useLocation } from "react-router"
import { cloud } from "../../assets/images"
interface Props {
    to: string
    linkText: string
    className?: string
}

export default function HeaderLink({to, linkText, className}: Props) {

    const location = useLocation()
    
    const selectedLink = location.pathname != to ? 'opacity-100 font-bold' : ''

    const selectedText = location.pathname != to ? "text-white" : 'text-gray-500'

    const selectedImage = location.pathname != to ? 'brightness-50 opacity-75' : 'hover:opacity-80 hover:brightness-85'

    return (
        <Link to={to} className={`w-50 p-0 relative ${className} ${selectedLink}`}>
            <p className={`absolute text-xl brightness-100 z-100 font-semibold ${selectedText} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3`}>{linkText}</p>
            <img src={cloud} alt='' className={`${selectedImage}`}/>
            <img src={cloud} alt='' className={`absolute top-1/12 brightness-0 opacity-25 ${location.pathname != to ? 'opacity-50' : ''}`}></img>
        </Link>
    )
}