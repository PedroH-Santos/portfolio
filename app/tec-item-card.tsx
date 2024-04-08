

const TecItemCard = ({ name , years , children }: any) => {


    return (
        <li className="py-3 sm:py-4 mx-auto">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    {children}
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                    </p>
                    
                    <p className="text-sm dark:text-gray-200">
                        <span className="dark:text-yellow-500"> {years} years </span> <span className="">  of experience </span>
                    </p>
                </div>
            </div>
        </li>




    );
}

export default TecItemCard;

