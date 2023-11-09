import styled from 'styled-components';

//Header & Nav

export const HeaderStyles = styled.header`
    width: 100%;
    height: 5.8rem;
    background: var(--card-hero);
    position: sticky;
    top: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 2px 0px var(--card-txt-gold);
`

export const NavLogo = styled.img`
    margin-left: 1rem;
    height: 7rem;
    transition: all 0.5s ease-out;
    cursor: pointer;
@media (max-width: 1200px) {
    height: 5rem; 
}
`

export const NavContainer = styled.ul`
    display: flex;
    gap: 5rem;
@media (max-width: 1200px) {
    gap: 2rem;
    }

`


export const NavLink = styled.li`
    font-size: 1.2rem;
    font-family: 'Cinzel', serif;
    font-weight: 400;
    letter-spacing: 1px;
    transition: all .3s ease-out;
@media (max-width: 1200px) {
    font-size: 1rem;
}

@media (max-width: 768px) {
    display: none;
}
`


export const NavFeatured = styled.span`
    font-weight: 800;
`

export const ToggleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 1rem;
`

export const CartToggle = styled.div`
    margin: 0 2rem;
    border: 2px solid var(--bg-grey);
    height: 3.8rem;
    width: 3.8rem;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s ease-out;
@media (max-width: 1200px) {
    height: 2.8rem;
    width: 2.8rem;
}

@media (max-width: 768px) {
    margin: 0;
}

`
export const MenuToggleContainer = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    height: 2.8rem;
    width: 2.8rem;
    border: 2px solid var(--bg-grey);
    border-radius: 50%;
    color: white;
    cursor: pointer;
    transition: all .3s ease-out;

    &:hover {
    transform: scale(1.05);
    border: 1px solid white;
    box-shadow: 0 0px 6px var(--card-txt-gold);
    background: var(--card-txt-gold);
    transition: all .3s ease-in;
    }

@media (max-width: 768px) {
    display: flex;
    margin-right: 1rem;
}
`

//Header & Nav