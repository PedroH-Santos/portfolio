import CustomButton from "./customs/custom-button";
import Image from 'next/image';



export default function AboutMe() {

    return (
        <div id="container-about-me" className="container-about-me container flex flex-col items-center justify-center w-full h-full min-h-screen mx-auto mt-10 gap-[3rem] overflow-hidden">
            <h3 className="text-3xl dark:text-gray-200 "> <span className="dark:text-custom-blue">About</span> <span className="dark:text-custom-yellow">me</span></h3>
            <div className="flex  flex-wrap flex-col gap-3 lg:gap-0 lg:flex-row lg:max-w-6xl lg:w-full lg:justify-between">
                <div className="h-96  lg:w-96  relative">
                    <Image fill={true} src="/profile.jpg" alt="profile" className="object-cover rounded-t-lg lg:rounded-full" />
                </div>
                <div className="flex flex-row flex-wrap justify-around items-center ">

                    <ul className="flex flex-col flex-wrap  space-y-4 text-left lg:max-w-96 text-gray-200 ">
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 dark:text-custom-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Studying Information Systems at PUC Minas.</span>
                        </li>
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 dark:text-custom-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Technical in IT at CEFET-MG.</span>
                        </li>
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 dark:text-custom-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>Experience: <span className="font-semibold dark:text-custom-yellow">3 years</span></span>
                        </li>
                        <li className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 dark:text-custom-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>B2 advanced english level </span>
                        </li>
                        <li className="flex items-center space-x-3 rtl:space-x-reverse lg:justify-normal justify-center" >
                            <CustomButton />
                        </li>
                    </ul>
                    <div className="hidden xl:flex w-72 h-full relative">
                        <Image fill={true} src="/imageAboutMe.png" alt="profile" className="  object-contain " />
                    </div>

                </div>

            </div>


        </div>
    )
}
