import { Link } from "react-router-dom"

const textos = ['EXPLORAR', 'MINHA GARAGEM']

export default function OpcoesHeader(){
    return(
        <>
            <div className="list-none flex text-center text-[#E10029] font-medium text-xl cursor-pointer mb-5 lg:mb-0">
                <Link to={`/`}>
                        <p className="mr-5 hover:scale-110 duration-500">HOME</p>
                </Link>
                {textos.map(item => (
                    <Link to={`/${item.toLowerCase()}`}>
                        <p className="mr-5 hover:scale-110 duration-500">{item}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}