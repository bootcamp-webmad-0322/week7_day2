import { projects as projectsFromAPI } from "../../fakeAPI"

function ProjectList() {

    return (
        <div className="list">

            <h2>Proyectos</h2>

            {projectsFromAPI.map(project => {
                return (
                    <div key={project._id}>
                        <h3>{project.name}</h3>
                        <p>Tech Stack: {project.techStack}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectList;