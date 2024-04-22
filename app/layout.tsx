import type { Metadata } from "next";
import "./css/globals.css";
import Menu from "./components/menu";
import Apresentation from "./components/apresentation";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import Tecnologies from "./components/tecnologies";
import Favicon from '/public/favicon.ico';

export const metadata: Metadata = {
  title: "Portfolio Pedro Santos",
  description: "Pedro Santos's portfolio of a full stack programmer.",
  icons: [{ rel: 'icon', url: Favicon.src }],

  
};

 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="font-body">
          <Menu />
          <Apresentation />
          <AboutMe />
          <Projects />
          <Tecnologies/>


        <div className=" flex flex-wrap flex-col items-center justify-center p-3 mt-10  ">
          <p className="mb-8 text-xl dark:text-gray-200"> Copyright © 2024 by Pedro Santos. All rights reserved.  </p>



        </div>

      </body>
    </html >
  );
}
