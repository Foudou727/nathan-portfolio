import Separator from "../Separator";
import HeaderLink from "./HeaderLink";

export default function Navbar() {
    const links = [
        {to: '/home', text: 'Accueil'},
        {to: '/projects', text: 'Projets'},
        {to: '/experiences', text: 'Expériences'}
    ]

    return (
        <nav className={`h-max m-b-2 w-full sticky top-5 z-1000`}>
            <div className="flex space-x-15 m-5 ml-8 text-xl">
                {links.map((link) =>
                    <HeaderLink key={link.to} to={link.to} linkText={link.text}></HeaderLink>
                )}
            </div>
            <Separator />
        </nav>
    )
}