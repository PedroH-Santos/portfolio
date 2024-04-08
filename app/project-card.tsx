

const ProjectCard = (props: any) => {
    return ( 




            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
        <div>

        <div className=" ">
                    <img className="fd-cl group-hover:opacity-25 object-cover rounded-t-lg h-96  md:w-96 hover:scale-110 transition-all duration-500 cursor-pointer" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
        </div>
        </div>
        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
       <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Hover de projeto</span> 
       <div className="pt-8 text-center">
           <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">Learn more</button>
           </div>
    </div>
    </div>
    )
}

export default ProjectCard;