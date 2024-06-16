import perfil from '../../images/perfil.svg'
import carrinho from '../../images/carrinho.svg'

const icons = [perfil,carrinho]

export default function IconsHeader(){
    return(
        <div>
            <ul className='list-none flex text-center text-[#E10029]'>
                {icons.map(icon=>(
                    <li><img src={icon} className='w-8 h-8 mr-3 cursor-pointer' alt='icon'></img></li>
                ))}
            </ul>
        </div>
    )
}