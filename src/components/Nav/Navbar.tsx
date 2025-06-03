import Separator from "../Separator";
import HeaderLink from "./HeaderLink";

export default function Navbar() {
    const links = [
        {to: '/', text: 'Home'},
        {to: '/about', text: 'About'}
    ]

    return (
        <nav className={`h-max m-b-2 w-full sticky top-3 z-9999`}>
            <div className="flex space-x-15 m-3 ml-8 text-xl">
                {links.map((link) =>
                    <HeaderLink key={link.to} to={link.to} linkText={link.text}></HeaderLink>
                )}
            </div>
            <Separator />
        </nav>
    )
}