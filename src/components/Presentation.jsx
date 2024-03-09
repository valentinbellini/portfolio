import './Presentation.css'

export const Presentation = () => {
    return (
        <section className="presentation" id="Home">
            <div className='presentation-box'> 
                <div className='presentation-box-quote'>
                    <h1>
                        Hey, soy
                        <span className='presentation-box-quote-name'>Valentin</span>
                    </h1>
                </div>
                <div className='presentation-box-info'>
                    <p>
                       <strong>Estudiante avanzado de ingenieria electrónica. </strong> 
                       Vivo en Rosario, Argentina. Actualmente me estoy especializando en 
                       <strong> Inteligencia artificial y análisis de datos.</strong>
                    </p>
                </div>
            </div>
            <div className='presentation-tech-logos'>     
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />   
            </div>
        </section>
    )
}