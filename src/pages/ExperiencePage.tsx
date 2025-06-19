import Title1 from "../assets/Titles/Title1";
import ExperienceList from "../components/Experiences/ExperienceList";

interface Props {

}

export default function ExperiencePage({}: Props) {

    return (
        <div className="flex flex-col gap-16 m-4">
            <Title1>Mon parcours</Title1>
            <ExperienceList />
        </div>
    )
}