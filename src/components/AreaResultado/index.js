import carro from "../../images/Sedan.png"
import Button from "../Button"

export default function AreaResultado({nome, marca, modelo, imagem}){
    return(
        <div className="w-5/6 h-4/5 mt-16 mb-5 border-4 boder-solid rounded-3xl border-[#E10029] bg-transparent flex flex-col justify-center items-center lg:w-2/6 lg:my-0 lg:ml-16 lg:mr-5" >
            <h1 className="font-bold text-3xl text-[#E10029] mb-8 mt-8 font-sans lg:mb-3 lg:mt-0">{nome}</h1>
            <div className="w-fit h-fit justify-center">
                <p className="text-[#E10029] text-xl text-center font-medium mb-6">{marca}</p>
                <img src={imagem} alt="imagem do carro" className="h-3/5 max-h-56"/>
                <p className="text-[#E10029] text-xl text-center font-medium mt-6">{modelo}</p>
            </div>
            <Button nome={'VER MAIS'} />
        </div>
    )
}