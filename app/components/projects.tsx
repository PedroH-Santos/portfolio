import ProjectCard from "./cards/project-card";



export default function Projects() {

    return (

        <div id="container-projects" className="container-about-me container flex flex-col items-center justify-center w-screen h-full md:h-screen mx-auto gap-8 mt-8 overflow-hidden">
            <h3 className="mb-8 text-3xl dark:text-gray-200"> Projetos  </h3>
            <div className="flex flex-wrap flex-column gap-8 mx-auto items-center justify-center ">
                <ProjectCard> </ProjectCard>
                <ProjectCard> </ProjectCard>
                <ProjectCard> </ProjectCard>
            </div>


        </div>
    )
}
