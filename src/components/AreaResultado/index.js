import carro from "../../images/Sedan.png"
import Button from "../Button"

export default function AreaResultado(){
    return(
        <div className="w-[350px] h-[350px] ml-16 mr-5 border-4 boder-solid rounded-3xl border-[#E10029] bg-transparent flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl text-[#E10029] mb-3  font-sans">Nome do carro</h1>
            <p className="text-[#E10029] text-lg text-center font-medium mb-6">Modelo do carro</p>
            <img src={carro} alt="imagem do carro"/>
            <p className="text-[#E10029] text-lg text-center font-medium mt-6">Marca do carro</p>
            <Button nome={'VER MAIS'} />
        </div>
    )
}