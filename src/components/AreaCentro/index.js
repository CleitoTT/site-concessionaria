import AreaPesquisa from "../AreaPesquisa"
import AreaResultado from "../AreaResultado"

export default function AreaCentro(){
    return(
        <div className="w-11/12 h-10/12 bg-white rounded-3xl mb-5 mt-5 flex flex-col justify-center items-center cursor-default xl:w-8/12 xl:h-[65%] lg:flex-row lg:my-auto ">
            <AreaPesquisa/>
            <AreaResultado/>
        </div>
    )
}