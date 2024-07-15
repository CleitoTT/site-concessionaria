import AreaPesquisa from "../AreaPesquisa"
import AreaResultado from "../AreaResultado"

export default function AreaCentro(){
    return(
        <div className="w-10/12 h-fit bg-white my-auto rounded-3xl flex flex-col justify-center items-center cursor-default lg:h-[70%] xl:w-8/12 xl:h-[70%] lg:flex-row ">
            <AreaPesquisa/>
            <AreaResultado/>
        </div>
    )
}