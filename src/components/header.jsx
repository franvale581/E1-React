import { CartToggle, HeaderStyles, NavContainer, NavFeatured, NavLink, NavLogo } from "../assets/js/styles"

export function HeaderNav() {
    return(

        <HeaderStyles className="header">

        <div className="nav-logo-container">
            <NavLogo src="./src/assets/logo/logo-nav.png" alt="logo" className="nav-logo"/>
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

        <CartToggle className="cart-toggle">
            <i className="fa-brands fa-shopify fa-2x" ></i>
        </CartToggle>

    </HeaderStyles>

    )
}