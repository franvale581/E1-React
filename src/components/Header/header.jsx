import { CartToggle, HeaderStyles, MenuToggleContainer, NavContainer, NavFeatured, NavLink, NavLogo, ToggleContainer } from "./headerStyles"
import NavLogoImg from "../../assets/images/logo/logo-nav.png"

import { AiOutlineMenu } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'


export function HeaderNav() {
    return(

        <HeaderStyles className="header">

        <div className="nav-logo-container">
            <NavLogo src={NavLogoImg} alt="logo" className="nav-logo"/>
        </div>

        <nav >
            <NavContainer>

                <NavLink className="nav-link">
                    <a href="#second-hero">Home</a>
                </NavLink>
                <NavLink className="nav-link">
                    <a href="#featured-section"><NavFeatured>Featured</NavFeatured></a>
                </NavLink>
                <NavLink className="nav-link">
                    <a href="#">Products</a>
                </NavLink>
                <NavLink className="nav-link">
                    <a href="#">Contact</a>
                </NavLink>

            </NavContainer>
        </nav>

        <ToggleContainer>
        <MenuToggleContainer>
            <AiOutlineMenu style={{ fontSize: '1.2em' }}/>
        </MenuToggleContainer>
            <CartToggle className="cart-toggle">
            <GiShoppingCart style={{ fontSize: '1.4em' }}/>
            </CartToggle>
        </ToggleContainer>
    </HeaderStyles>

    )
}