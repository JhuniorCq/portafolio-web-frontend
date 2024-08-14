import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

export const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h1 className='projects__title'>Proyectos</h1>
            <div className='projects__list'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div> 
    )
}