import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProjectCard from "./project-card";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 p-5">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex flex-wrap flex-col items-center justify-center p-10 bg-gray-400 w-full  ">
          <h1 className="text-4xl p-3"> Olá , meu nome é Pedro Henrique dos Santos </h1>
          <h3 className="text-xl p-3"> Desenvolvedor Full Stack </h3>
          <div className="flex flex-row gap-3">
            <a className="p-1 border-2 border-teal-100"> GitHub </a>
            <a className="p-1 border-2 border-teal-100"> Linkedin </a>
          </div>

        </div>

        <div className="container flex flex-wrap flex-row items-center justify-center p-10 w-full w-screen mx-auto ">
          <h3 className="mb-8 text-lg"> Sobre mim  </h3>
          <div className="flex flex-wrap flex-col gap-4 mx-auto">
           <Image src="/profile.jpg" alt="profile" width={200} height={200} class />
           <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula nunc, vulputate et ultricies a, egestas ac ligula. Phasellus at nisi augue. Nunc in tortor vel nisi porta accumsan. Pellentesque in lorem at est tincidunt placerat. Curabitur posuere, mauris vitae aliquet congue, nibh orci rhoncus tortor, eget tristique quam dui quis risus. Praesent efficitur vestibulum diam, nec rutrum enim sodales id. Sed ac imperdiet quam, eu commodo mi. Fusce at orci eleifend, varius felis non, suscipit turpis. Integer id leo dictum, porttitor lectus vitae, fermentum justo. Nullam a ante ac nisi molestie convallis vitae a ipsum. Nam sed vestibulum magna, in consectetur augue. Praesent tincidunt ipsum dolor, et congue tortor fringilla et.
           </p>
          </div>


        </div>


        <div className="container flex flex-wrap flex-col items-center justify-center p-10 w-full w-screen mx-auto ">
          <h3 className="mb-8 text-lg"> Projetos  </h3>
          <div className="flex flex-wrap flex-row gap-8 mx-auto items-center justify-center">
            <ProjectCard> </ProjectCard>
            <ProjectCard> </ProjectCard>
            <ProjectCard> </ProjectCard>
          </div>


        </div>


      </body>
    </html >
  );
}
