import perfil from '../../images/perfil.svg'
import carrinho from '../../images/carrinho.svg'

export default function IconsHeader(){
    return(
        <div>
            <ul className='list-none flex text-center text-[#E10029] mb-4 lg:mb-0'>
                    <li><img src={perfil} className='size-8 mr-3 cursor-pointer hover:scale-125 duration-500' alt='icon'></img></li>
                    <li><img src={carrinho} className='size-8 cursor-pointer hover:scale-125 duration-500' alt='icon'></img></li>
            </ul>
        </div>
    )
}