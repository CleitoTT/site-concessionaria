import logo from "../../images/logo-reviveauto.png"

export default function Logo(){
    return(
        <div className="flex items-center cursor-pointer">
            <img src={logo} alt="Imagem logo"  className="w-16 h-20 mr-[-15px]"/>
            <p className="text-3xl text-[#FE0000] font-medium">evive<b>Auto</b></p>
        </div>
    )
}