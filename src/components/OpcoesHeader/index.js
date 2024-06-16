const textos = ['HOME', 'EXPLORAR', 'MINHA GARAGEM']

export default function OpcoesHeader(){
    return(
        <>
            <ul className="list-none flex text-center text-[#E10029] font-medium text-xl cursor-pointer">
                {textos.map(item => (
                    <li className="mr-5">{item}</li>
                ))}
            </ul>
        </>
    )
}