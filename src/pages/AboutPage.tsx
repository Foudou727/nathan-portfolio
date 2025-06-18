import cLogo from '../assets/Languages/C_Logo.jfif';
import reactLogo from '../assets/Languages/React.webp'
import SkillCard from '../components/SkillCard/SkillCard';
import Separator from '../components/Separator';
import kotlin from '../assets/Languages/kotlin.png';
import python from '../assets/Languages/python.png';
import java from '../assets/Languages/java.png'
import SkillCardList from '../components/SkillCard/SkillCardList';
import mongoDB from '../assets/Languages/mongodb.png'
import vsCode from '../assets/Languages/VsCode.png'
import docker from '../assets/Languages/docker.webp'
import bash from '../assets/Languages/bash.png'
import arch from '../assets/Languages/arch-linux.png'
import notion from '../assets/Languages/Notion_app_logo.png'
import gitlab from '../assets/Languages/gitlab_logo_icon_169112.webp'

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

    const titleStyle = 'text-4xl text-black text-bold text-shadow-xs text-shadow-gray-600'
    return (
        <div className="flex flex-col gap-16 m-4">
            <div className='flex flex-col gap-4 w-fit ml-6'>
                <div className='flex flex-col w-fit gap-2'>
                    <h1 className={`${titleStyle} p-2 pt-0 border-b-2 border-white rounded-2xl`}>Qui suis-je ?</h1>
                </div>
                <p className='ml-6 text-gray-600 italic'>Nathan LIEGEON, étudiant en Informatique à l'IUT Lyon 1 en Réalisation d'Applications</p>
                <Separator />
            </div>
            <SkillCardList>
                <h2 className={`${titleStyle} text-white`}>Mes langages</h2>
                <div className="flex flex-row gap-16 pb-5 border-b-4 border-gray-600">
                    {
                        languages.map((lang) => <SkillCard image={lang.image} title={lang.title} />)
                    }
                </div>
            </SkillCardList>
            <SkillCardList>
                <h2 className={`${titleStyle} text-white`}>Mes Outils</h2>
                <div className="flex flex-row gap-16 pb-5 border-b-4 border-gray-600">
                    {
                        tools.map((tool) => <SkillCard image={tool.image} title={tool.title} />)
                    }
                </div>
            </SkillCardList>
            <SkillCardList>
                <h2 className={`${titleStyle} text-white`}>Mon Organisation</h2>
                <div className="flex flex-row gap-16 pb-5 border-b-4 border-gray-600">
                    {
                        gestions.map((gestion) => <SkillCard image={gestion.image} title={gestion.title}/>)
                    }
                </div>
            </SkillCardList>
        </div>
    )
}