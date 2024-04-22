import ProjectCard from "./cards/project-card";



export default function Projects() {

    return (

        <div id="container-projects" className="container-about-me container flex flex-col items-center justify-center w-screen h-full min-h-screen mx-auto mt-10 gap-[3rem] overflow-hidden">
            <h3 className=" text-3xl dark:text-gray-200"> <span className="dark:text-custom-blue">Proj</span><span className="dark:text-custom-yellow">ects</span></h3>
            <div className="flex flex-wrap flex-column gap-8 mx-auto   ">
                <ProjectCard title="Festival Party" description="The 'Festival Party' project is a robust system for dress rental management. It tackles scheduling conflicts and provides vital information." link="https://github.com/PedroH-Santos/festival_party" technologies="NodeJS, Express, React, NextJS, AWS, Docker and PostgreSQL." image="/festivalParty.png"> </ProjectCard>
                <ProjectCard title="Group finances" description="Introducing a group finance platform for collaborative budgeting. Easily create groups, add members, track expenses, and manage budgets transparently." link="https://github.com/PedroH-Santos/api-gerenciador-financeiro" technologies="NodeJs, NestJs, Prisma, React, NextJs, Docker and PostgreSQL." image="/groupFinances.png"> </ProjectCard>
                <ProjectCard title="Rust + NodeJs" description="Implementation aiming to integrate Node.js functions with Rust." link="https://github.com/PedroH-Santos/IntegrationRustWithNode" technologies="NodeJs and Rust" image="/rustAndNode.png"> </ProjectCard>
                <ProjectCard title="The Native's War" description="'The Native's War' is a Tower Defense game exploring indigenous culture during the colonial period. Players defend their tribe against Portuguese invaders by constructing huts and transforming them into indigenous mythological figures like 'Pai do Mato' and 'Boitatá.'" link="https://github.com/PedroH-Santos/TCC_TheNativesWar" technologies="C# and Unity" image="/nativesWar.png"> </ProjectCard>

            </div>


        </div>
    )
}
