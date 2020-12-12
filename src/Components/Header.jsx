import {BiBuildingHouse, BiDonateHeart, BiSpreadsheet} from "react-icons/bi"
import logoAbraceOProximo from '../Images/logoAbraceOProximo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../Styles/header.css'

const Header = () => {
 
    return(
        <div className='container-header'>
            <img id='logo' src={logoAbraceOProximo} alt='Logo Abrace o Próximo'/>


            <div id='container-menu'>
                <section className='info-menu'>
                    <AnchorLink className='icon-menu' href='#institutions'>
                        <BiBuildingHouse size={40} color="#ffffff"/>
                    </AnchorLink>
                    <h2>Instituições</h2>
                </section>

                <section className='info-menu'>
                    <AnchorLink className='icon-menu' href='#about'>
                        <BiDonateHeart size={40} color="#ffffff"/>
                    </AnchorLink>
                    <h2>Sobre o nós</h2>
                </section>

                <section className='info-menu'>
                    <AnchorLink className='icon-menu' href='#form'>
                        <BiSpreadsheet size={40} color="#ffffff"/>
                    </AnchorLink>  
                    <h2>Cadastre-se</h2>   
                </section>                 
            </div>
        </div>
    )
}

export default Header
