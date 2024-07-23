export default function Button({nome, onClick}){
    return(
        <button onClick={onClick} className="w-9/12 h-14 text-center text-lg font-extrabold rounded-3xl text-white bg-[#E10029] hover:bg-[#B10029] duration-500 mt-4 mb-5 lg:mb-0">{nome}</button>
    )
}