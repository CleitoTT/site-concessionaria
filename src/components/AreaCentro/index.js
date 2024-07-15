import AreaPesquisa from "../AreaPesquisa"
import AreaResultado from "../AreaResultado"

export default function AreaCentro(){
    return(
        <div className="w-10/12 h-10/12 bg-white rounded-3xl mb-5 mt-5 flex flex-col justify-center items-center cursor-default lg:h-[70%] xl:w-8/12 xl:h-[70%] lg:flex-row lg:my-auto">
            <AreaPesquisa/>
            <AreaResultado/>
        </div>
    )
}