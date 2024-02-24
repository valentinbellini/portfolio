import './Projects.css'; // Asegúrate de importar el archivo de estilos CSS correspondiente
import { projectsData } from '../services/projects.js'

export const Projects = () => {
    return (
        <div className='projects'>
            <h2>Projects</h2>
            <ul className="projects-container">
                {projectsData.map(project => (
                    <li key={project.id} > 
                        <div className='project-img'> 
                            <img src={(`${project.image}`)} alt={project.title}/>ss
                            </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className='project-technologies'>
                            <p>{project.technologies.join(' ')}</p>    
                        </div>
                        <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />          
                                </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
