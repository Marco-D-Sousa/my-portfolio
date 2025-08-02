import './ProjectCard.css'

function ProjectCard({ project }) {
    return (

        <div id="card">
            <div className={`top-bar ${project.stack}`}>
                <div className='title'>
                    <h2>{project.title}</h2>
                    <p>{project.stack}</p>
                </div>
                <div className="actions">
                    <button className="btn-code" data-tooltip="Ver Código">
                        <span className="tooltip-text">Ver Código</span>
                        <img src="./assets/icon-code.svg" alt="" />
                    </button>
                    <button className="btn-demo" data-tooltip="Ver Demo">
                        <span className="tooltip-text">Ver Demo</span>
                        <img src="./assets/icon-internet.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className="content">
                <img src={project.image} alt="" />
                <p>
                    {project.description}
                </p>
            </div>

            <div className="tech">
                <h3>Tecnologias</h3>
                <ul className='tech-list'>
                    {project.technologies.map((tech, index) => (
                        <li key={index}>
                            <img src={`https://skillicons.dev/icons?i=${tech.toLowerCase()}`} alt={tech} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard