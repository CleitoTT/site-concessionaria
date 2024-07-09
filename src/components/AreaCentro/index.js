import AreaPesquisa from "../AreaPesquisa"
import AreaResultado from "../AreaResultado"

export default function AreaCentro(){
    return(
        <div className="w-9/12 h-[450px] bg-white mt-20 rounded-3xl flex justify-center items-center cursor-default">
            <AreaPesquisa/>
            <AreaResultado/>
        </div>
    )
}