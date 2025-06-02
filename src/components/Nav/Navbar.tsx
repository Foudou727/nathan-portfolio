import Separator from "../Separator";
import HeaderLink from "./HeaderLink";

export default function Navbar() {
    const links = [
        {to: '/', text: 'Home'},
        {to: '/about', text: 'About'}
    ]

    return (
        <nav className={`h-max m-b-2 w-full`}>
            <div className="flex m-3 text-xl font-semibold">
                {links.map((link) =>
                    <HeaderLink key={link.to} to={link.to}>{link.text}</HeaderLink>
                )}
            </div>
            <Separator />
        </nav>
    )
}