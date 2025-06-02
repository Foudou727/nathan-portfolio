import { ReactNode } from "react"
import { Link, useLocation } from "react-router"

interface Props {
    to: string
    children: ReactNode
}

export default function HeaderLink({to, children}: Props) {

    const location = useLocation()
    
    const selectedClass = location.pathname == to ? 'bg-gradient-to-t from-gray-900 to-gray-500' : ''

    return (
        <Link to={to}
            className={`p-2 m-2 h-max border-1 border-white rounded-t ${selectedClass}`}
        >
                {children}
        </Link>
    )
}