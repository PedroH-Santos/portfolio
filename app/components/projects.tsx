import ProjectCard from "./cards/project-card";



export default function Projects() {

    return (

        <div id="container-projects" className="container-about-me container flex flex-col items-center justify-center w-screen h-full min-h-screen mx-auto mt-10 gap-[3rem] overflow-hidden">
            <h3 className=" text-3xl dark:text-gray-200"> <span className="dark:text-custom-blue">Proj</span><span className="dark:text-custom-yellow">ects</span></h3>
            <div className="flex flex-wrap flex-column gap-8 mx-auto   ">
                <ProjectCard> </ProjectCard>
                <ProjectCard> </ProjectCard>
                <ProjectCard> </ProjectCard>
            </div>


        </div>
    )
}
