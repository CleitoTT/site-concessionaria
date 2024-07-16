import Inputs from "../Inputs"
import Button from "../Button"

const input = ['Nome', 'Marca', 'Modelo']

export default function AreaPesquisa(){
    return(
        <div className="w-5/6 flex flex-col justify-center items-center mt-5 ml-5 lg:w-3/6 lg:mb-5">
            <h1 className="font-bold text-3xl text-[#E10029] mb-3  font-sans text-center">Encontre seu carro dos sonhos !</h1>
            <p className="w- text-[#E10029] text-lg text-center mb-6">Procure pela marca, modelo ou pelo <br/> nome do carro que deseja!!</p>
            {input.map(input =>(
                <Inputs placeholder={input} />
            ))}
            <Button nome={"PESQUISAR"} />
        </div>
    )
}