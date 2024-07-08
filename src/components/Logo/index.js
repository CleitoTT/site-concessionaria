import logo from "../../images/logo-reviveauto.png"

export default function Logo(){
    return(
        <div className="flex">
            <img src={logo} alt="Imagem logo" />
            <p className="text-3xl text-[#FE0000] font-medium">Revive<b>Auto</b></p>
        </div>
    )
}