import AreaPesquisa from "../AreaPesquisa"
import AreaResultado from "../AreaResultado"

export default function AreaCentro(){
    return(
        <div className="w-9/12 h-[450px] bg-white mt-14 rounded-3xl flex justify-center items-center">
            <AreaPesquisa/>
            <AreaResultado/>
        </div>
    )
}