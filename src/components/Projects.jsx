import './Projects.css'; // Asegúrate de importar el archivo de estilos CSS correspondiente

export const Projects = () => {

    // Datos de ejemplo de proyectos (sustitúyelos con tus propios datos)
    const projectsData = [
        {
            id: 1,
            title: "Virtual Assitant",
            description: "En este repositorio encontraras un asistente virtual comandado por voz realizado con Python.",
            technologies: ["Python"],
            image: "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
            demoLink: "https://example.com/demo1",
            githubLink: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "Credit-Data-Tree",
            description: "Análisis y entrenamiento de modelos de riesgo crediticio.",
            technologies: ["Python", "Jupyter", "Scikit-learn"],
            image: "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
            demoLink: "https://example.com/demo2",
            githubLink: "https://github.com/yourusername/project2"
        },
        {
            id: 3,
            title: "Inventario SQL",
            description: "Diseño de aplicación para control de inventario con Python y base de datos SQL",
            technologies: ["Python", "SQLite"],
            image: "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
            demoLink: "https://example.com/demo2",
            githubLink: "https://github.com/yourusername/project2"
        },
        {
            id: 4,
            title: "Connect-Four",
            description: "Juego de 2 jugadores diseñado a partir del tic tac toe",
            technologies: ["JavaScript", "React", "CSS"],
            image: "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
            demoLink: "https://example.com/demo2",
            githubLink: "https://github.com/yourusername/project2"
        }
        // Agrega más proyectos según sea necesario
    ];



    return (
        <div className='projects'>
            <h2>Projects</h2>
            <ul className="projects-container">
                {projectsData.map(project => (
                    <li key={project.id} > 
                        <div className='project-img'> 
                            <img src={(`${project.image}`)} alt={project.title} className='projects-container-project-img'/>
                            </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
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
