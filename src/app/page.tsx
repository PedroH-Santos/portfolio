import AboutMe from "../components/about-me";
import Apresentation from "../components/apresentation";
import Menu from "../components/menu";
import Projects from "../components/projects";
import Tecnologies from "../components/tecnologies";

export default function Home() {
    return (
        <div >
            <Menu />
            <Apresentation />
            <AboutMe />
            <Projects />
            <Tecnologies />


            <div className=" flex flex-wrap flex-col items-center justify-center p-3 mt-10  ">
                <p className="mb-8 text-xl dark:text-gray-200"> Copyright © 2024 by Pedro Santos. All rights reserved.  </p>



            </div>

        </div>
    );
}