import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";

export default function Header(){
    return(
        <header className="w-full h-20 bg-white flex justify-around items-center">
            <Logo />
            <OpcoesHeader />
            <IconsHeader />
        </header>
    )
}