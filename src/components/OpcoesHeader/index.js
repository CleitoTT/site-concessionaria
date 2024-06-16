const textos = ['HOME', 'EXPLORAR', 'MINHA GARAGEM']

export default function OpcoesHeader(){
    return(
        <>
            <ul className="list-none flex text-center text-[#E10029] font-medium text-xl cursor-pointer">
                {textos.map(item => (
                    <li className="mr-5 hover:border-b-2 hover:border-[#E10029]">{item}</li>
                ))}
            </ul>
        </>
    )
}