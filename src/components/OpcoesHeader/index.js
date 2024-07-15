import { Link } from "react-router-dom"

export default function OpcoesHeader(){
    return(
        <>
            <div className="list-none flex text-center text-[#E10029] font-medium text-xl cursor-pointer mb-5 lg:mb-0">
                <Link to={`/`}>
                        <p className="mr-5 hover:scale-110 duration-500">HOME</p>
                </Link>
                <Link to='/explorar'>
                    <p className="mr-5 hover:scale-110 duration-500">EXPLORAR</p>
                </Link>
                <Link to='/garagem'>
                    <p className="hover:scale-110 duration-500">MINHA GARAGEM</p>
                </Link>
            </div>
        </>
    )
}