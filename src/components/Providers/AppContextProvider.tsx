import { ReactNode, useMemo } from "react";
import { AppContext } from "../../model/context";
import htc from '../../assets/ProjectAssets/htc.webp';
import placeholder from '../../assets/ProjectAssets/placeholder.jpg';
import portfolioScreen from '../../assets/ProjectAssets/portfolio-screen.png'

interface Props {
    children: ReactNode
}

export default function AppContextProvider({children}: Props) {
    console.log('computed')
    const projects = useMemo(() => [{
            name: 'Have They Cooked',
            slug: 'have-they-cooked',
            description: 'Application Android réalisée en Kotlin permettant de visionner et rechercher des oeuvres du MET (Metropitan Museum of Art)',
            comment: "Page de recherche de l'application",
            image: htc,
        },
        {
            name: "Plane'Air",
            slug: 'plane-air',
            description: "Application codée en Java permettant d'importer des CSV avec des informations de vol, de les afficher, et de les organiser de sorte d'éviter les collisions",
            comment: "Pas d'image disponible puisque mon ordinateur est mort",
            image: placeholder,
        },
        {
            name: 'LA SAE DE C 💀',
            slug: 'sae-c',
            description: "Projet avec une partie algorithmie et une partie implémentation en C, il s'agissait de réaliser une application en C permettant de visualiser des vols dans un aéroport, et d'organiser la piste de sorte à ce que tous les vols décollent avec le moins de retard possible (sans collisions)",
            comment: "Pas d'image disponible puisque mon ordinateur est mort",
            image: placeholder,
        },
        {
            name: 'Ce magnifique Portfolio !',
            slug: 'portfolio',
            description: "Ce portfolio que vous voyez ici présent a été réalisé avec amour en React, avec Tailwind pour le style. Même si je sais qu'il ne plaira pas à tout le monde, il me plaît donc c'est déjà ça !",
            comment: "Splash screen du Portfolio, avez-vous remarqué que si vous retournez dessus, le fond peut être différent ?",
            image: portfolioScreen,
        },
    ], [])

    const cardSeed = useMemo(() => projects.map(() => {
        return Math.floor(Math.random()*8011)
    }), [])

    return (
        <AppContext.Provider value={{projects, cardSeed}}>
            {children}
        </AppContext.Provider>
    )
}