import carro from "../../images/Sedan.png"
import Button from "../Button"

export default function AreaResultado(){
    return(
        <div className="w-5/6 h-4/5 mt-16 mb-5 border-4 boder-solid rounded-3xl border-[#E10029] bg-transparent flex flex-col justify-evenly items-center lg:w-2/6 lg:my-0 lg:ml-16 lg:mr-5" >
            <h1 className="font-bold text-3xl text-[#E10029] mb-8 mt-8 font-sans lg:mb-3 lg:mt-0">Nome do carro</h1>
            <div className="justify-between">
                <p className="text-[#E10029] text-xl text-center font-medium mb-6">Modelo do carro</p>
                <img src={carro} alt="imagem do carro"/>
                <p className="text-[#E10029] text-xl text-center font-medium mt-6">Marca do carro</p>
            </div>
            <Button nome={'VER MAIS'} />
        </div>
    )
}