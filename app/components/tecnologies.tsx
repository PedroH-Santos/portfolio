import TecCard from "./cards/tec-card";



export default function Tecnologies() {

    return (
        <div id="container-technologies" className=" flex flex-wrap flex-col items-center justify-center  p-3  ">
            <h3 className="mb-8 text-3xl dark:text-gray-200"> Tecnologias  </h3>
            <div className="flex   flex-row   ">
                <TecCard type="1" title="BackEnd"> </TecCard>
                <TecCard type="2" title="FrontEnd" > </TecCard>
                <TecCard type="3" title="Infraestrutura" > </TecCard>
                <TecCard type="4" title="Banco de Dados" > </TecCard>



            </div>


        </div>

    )
}
