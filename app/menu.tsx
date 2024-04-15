"use client";
import { useState } from "react";


const Menu = (props: any) => {
    const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

    return (
        <nav className="z-20 fixed w-full top-0 left-0 bg-white border-gray-200 dark:bg-gray-900 p-5">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img src="/logo.png" alt="profile" className=" w-40 object-cover" />
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#container-about-me" className="block py-2 px-3  rounded  md:border-0 text-gray-200 md:hover:text-custom-blue md:p-0">About me</a>
                        </li>
                        <li>
                            <a href="#container-projects" className="block py-2 px-3  rounded  md:border-0 text-gray-200 md:hover:text-custom-blue md:p-0">Projects</a>
                        </li>
                        <li>
                            <a href="#container-technologies" className="block py-2 px-3  rounded  md:border-0 text-gray-200 md:hover:text-custom-blue md:p-0">Technologies</a>
                        </li>
                    </ul>
                </div>
                <div className="block md:hidden relative">
                    <div
                        className="space-y-2"
                        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </div>
                    <ul className={isNavOpen ? "font-medium flex flex-col p-4 mt-4 border absolute right-0" : "hidden"} >
                        <li>
                            <a href="#container-about-me" className="block py-2 px-3  rounded  md:border-0 text-gray-200 md:hover:text-custom-blue md:p-0">About me</a>
                        </li>
                        <li>
                            <a href="#container-projects" className="block py-2 px-3  rounded  md:border-0 text-gray-200 md:hover:text-custom-blue md:p-0">Projects</a>
                        </li>
                        <li>
                            <a href="#container-technologies" className="block py-2 px-3  rounded  md:border-0 text-gray-200 md:hover:text-custom-blue md:p-0">Technologies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        


    )
}

export default Menu;