export default function Inputs({placeholder, onBlur}){
    return(
        <input type="text" placeholder={placeholder} onBlur={onBlur} className="w-9/12 h-10 bg-tranparent text-center font-bold text-lg border-[3px] text-[#E1002980] border-solid border-[#E10029BF] rounded-3xl mb-6 placeholder:text-[#E1002980] focus:outline-none" />
    )
}