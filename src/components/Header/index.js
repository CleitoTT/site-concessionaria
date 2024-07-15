import { Link } from "react-router-dom";
import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";

export default function Header(){
    return(
        <header className="w-full h-max bg-white flex flex-col justify-around items-center lg:flex-row">
            <Link to={'/'}>
                <Logo />
            </Link>
                <OpcoesHeader />
                <IconsHeader />
        </header>
    )
}