import cLogo from '../assets/Languages/C_Logo.jfif';
import reactLogo from '../assets/Languages/React.webp'
import LanguageCard from '../components/LanguageCard/LanguageCard';
import Separator from '../components/Separator';
import kotlin from '../assets/Languages/kotlin.png';
import python from '../assets/Languages/python.png';
import java from '../assets/Languages/java.png'

export default function HomePage() {

    const languages = [cLogo, reactLogo, java, python, kotlin]
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
            <div className='w-full flex flex-col justify-between items-center gap-10 bg-gray-800 rounded-6xl p-10 rounded-2xl border-white border-4'>
                <h2 className={`${titleStyle} text-white`}>Mes langages</h2>
                <div className="flex flex-row gap-16 pb-5 border-b-4 border-gray-600">
                    {
                        languages.map((lang) => <LanguageCard image={lang}/>)
                    }
                </div>
            </div>
        </div>
    )
}