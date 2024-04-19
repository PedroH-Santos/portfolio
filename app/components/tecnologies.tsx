import TecCard from "./cards/tec-card";



export default function Tecnologies() {

    return (
        <div id="container-technologies" className=" flex flex-wrap flex-col items-center justify-center  p-3 mt-10 gap-[3rem]  ">
            <h3 className="text-3xl dark:text-gray-200"><span className="dark:text-custom-blue">Tecnol</span><span className="dark:text-custom-yellow">ogies</span></h3>
            <div className="flex   flex-row flex-wrap sm:flex-nowrap gap-5 sm:gap-0  ">
                <TecCard type="1" title="Backend"> </TecCard>
                <TecCard type="2" title="Frontend" > </TecCard>
                <TecCard type="3" title="Devops" > </TecCard>
                <TecCard type="4" title="Database" last={true}> </TecCard>



            </div>


        </div>

    )
}
