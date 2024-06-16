const textos = ['HOME', 'EXPLORAR', 'MINHA GARAGEM']

export default function OpcoesHeader(){
    return(
        <>
            <ul className="list-none flex text-center text-[#E10029] font-medium text-xl cursor-pointer">
                {textos.map(item => (
                    <li className="mr-5 hover:scale-110 duration-500">{item}</li>
                ))}
            </ul>
        </>
    )
}