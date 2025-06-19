import cLogo from '../assets/Logos/C_Logo.jfif';
import reactLogo from '../assets/Logos/React.webp'
import SkillCard from '../components/SkillCard/SkillCard';
import Separator from '../components/Separator';
import kotlin from '../assets/Logos/kotlin.png';
import python from '../assets/Logos/python.png';
import java from '../assets/Logos/java.png'
import SkillCardList from '../components/SkillCard/SkillCardList';
import mongoDB from '../assets/Logos/mongodb.png'
import vsCode from '../assets/Logos/VsCode.png'
import docker from '../assets/Logos/docker.webp'
import bash from '../assets/Logos/bash.png'
import arch from '../assets/Logos/arch-linux.png'
import notion from '../assets/Logos/Notion_app_logo.png'
import gitlab from '../assets/Logos/gitlab_logo_icon_169112.webp'
import nest from '../assets/Logos/nest.webp'
import Title1 from '../assets/Titles/Title1';
import Title2 from '../assets/Titles/Title2';

export default function HomePage() {
    const languages = [
        {
            image: cLogo,
            title: 'C',
        },
        {
            image: reactLogo,
            title: 'React'
        },
        {
            image: nest,
            title: 'Nest'
        },
        {
            image: java,
            title: 'Java'
        },
        {
            image: python,
            title: 'Python'
        },
        {
            image: kotlin,
            title: 'Kotlin'
        }
    ]

    const tools = [
        {
            image: mongoDB,
            title: 'MongoDB',
        },
        {
            image: vsCode,
            title: 'VSCode'
        }, 
        {
            image: docker,
            title: 'Docker'
        },
        {
            image: bash,
            title: 'Bash'
        },
        {
            image: arch,
            title: 'Arch Linux'
        }
    ]

    const gestions = [{
            image: notion,
            title: 'Notion'
        },
        {
            image: gitlab,
            title: 'Gitlab'
        }
    ]

    return (
        <div className="flex flex-col gap-16 m-4">
            <div className='flex flex-col gap-4 w-fit ml-6'>
                <div className='flex flex-col w-fit gap-2'>
                    <Title1>Qui suis-je ?</Title1>
                </div>
                <p className='ml-6 text-gray-600 italic'>Nathan LIEGEON, étudiant en Informatique à l'IUT Lyon 1 en Réalisation d'Applications</p>
                <Separator />
            </div>
            <SkillCardList>
                <Title2>Mes langages</Title2>
                <div className="flex flex-row gap-16 pb-5 border-b-4 border-gray-600">
                    {
                        languages.map((lang) => <SkillCard image={lang.image} title={lang.title} />)
                    }
                </div>
            </SkillCardList>
            <SkillCardList>
                <Title2>Mes Outils</Title2>
                <div className="flex flex-row gap-16 pb-5 border-b-4 border-gray-600">
                    {
                        tools.map((tool) => <SkillCard image={tool.image} title={tool.title} />)
                    }
                </div>
            </SkillCardList>
            <SkillCardList>
                <Title2>Mon Organisation</Title2>
                <div className="flex flex-row gap-16 pb-5 border-b-4 border-gray-600">
                    {
                        gestions.map((gestion) => <SkillCard image={gestion.image} title={gestion.title}/>)
                    }
                </div>
            </SkillCardList>
        </div>
    )
}