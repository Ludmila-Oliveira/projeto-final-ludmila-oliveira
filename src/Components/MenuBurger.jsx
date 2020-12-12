import '../Styles/menuBurger.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {BiBuildingHouse, BiDonateHeart, BiSpreadsheet} from "react-icons/bi"
import  {slide as Menu} from 'react-burger-menu'    

const MenuBurger = () =>  { 
   
    return ( 
        <Menu> 
            {/* <AnchorLink className='' href='#institutions'>
                <h2>Instituições</h2>
            </AnchorLink>
            <AnchorLink className='' href='#about'>
                <h2>Sobre o nós</h2>
            </AnchorLink>
            <AnchorLink className='' href='#form'>
                <h2>Cadastre-se</h2> 
            </AnchorLink>   */}

            <div id='container-menu-burger'>
                <div className='bm-item'>
                    <AnchorLink className='icon-menu' href='#institutions'>
                        <BiBuildingHouse size={40} color="#ffffff"/>
                    </AnchorLink>
                    <h2>Instituições</h2>
                </div>

                <div className='bm-item'>
                    <AnchorLink className='icon-menu' href='#about'>
                        <BiDonateHeart size={40} color="#ffffff"/>
                    </AnchorLink>
                    <h2>Sobre o nós</h2>
                </div>

                <div className='bm-item'>
                    <AnchorLink className='icon-menu' href='#form'>
                        <BiSpreadsheet size={40} color="#ffffff"/>
                    </AnchorLink>  
                    <h2>Cadastre-se</h2>   
                </div>                 
            </div>
        </Menu> 
    )    
}

export default MenuBurger