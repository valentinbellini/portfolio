import './Projects.css'; // Asegúrate de importar el archivo de estilos CSS correspondiente

export const Projects = () => {

    // Datos de ejemplo de proyectos (sustitúyelos con tus propios datos)
    const projectsData = [
        {
            id: 1,
            title: "Proyecto 1",
            description: "Descripción del Proyecto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
            demoLink: "https://example.com/demo1",
            githubLink: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "Proyecto 2",
            description: "Descripción del Proyecto 2. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            technologies: ["Python", "Django", "PostgreSQL"],
            image: "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
            demoLink: "https://example.com/demo2",
            githubLink: "https://github.com/yourusername/project2"
        }
        // Agrega más proyectos según sea necesario
    ];



    return (
        <div className='projects'>
            <ul className="projects-container">
                {projectsData.map(project => (
                    <li key={project.id} >
                        <img src={(`${project.image}`)} alt={project.title} className='projects-container-project-img'/>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p><strong>Tecnologías utilizadas:</strong> {project.technologies.join(', ')}</p>
                            <div className="project-links">
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Ver Demo</a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
