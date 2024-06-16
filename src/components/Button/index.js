export default function Button({nome, click, width}){
    return(
        <button onClick={click} className="w-80 h-14 text-center text-lg font-extrabold rounded-3xl text-white bg-[#E10029] mt-4">{nome}</button>
    )
}