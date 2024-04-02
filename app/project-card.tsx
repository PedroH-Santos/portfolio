

const ProjectCard = (props: any) => {
    return ( 
        <div className="p-5 mb-8  flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover rounded-t-lg h-96  md:w-96 md:rounded-none md:rounded-s-lg" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projeto de teste </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere purus at interdum ullamcorper. Mauris dapibus nunc vitae cursus faucibus. Nulla non dictum eros. Suspendisse lobortis tempor nisl id tincidunt. Phasellus sagittis ante a nunc interdum molestie. Fusce rhoncus laoreet nisi vel tempor. Sed vestibulum nec libero non placerat.</p>
                <div className="flex flex-row gap-3 justify-center items-center">
                    <a className="custom-button py-2 px-4  rounded inline-flex gap-3  items-center"> Repository </a>
                    <a className="custom-button py-2 px-4  rounded inline-flex gap-3  items-center"> Deploy </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;