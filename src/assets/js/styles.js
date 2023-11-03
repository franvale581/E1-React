import styled from 'styled-components';

//Hero Section

export const  HeroStyles = styled.section`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #9b9999;
`

export const HeroCard = styled.div`
    height: 400px;
    width: 230px;
    background-color: #0f0f0f;
    transform-style: preserve-3d;
    border-radius: 20px;
    box-shadow: 0 0 50px 0px, inset 0 0 90px 0px;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`

export const HeroLogo = styled.h2`
    font-size: 1.4rem;
    color: #fb8500;
    letter-spacing: 1px;
`
export const HeroLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 9rem;
    width: 6rem;
    height: 2rem;
    border-radius: 10px;
    border: 1px solid #fb86006e;
    opacity: 0;
    transition: .2s ease-in;
    text-decoration: none;
`
//Hero Section

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
`

export const NavContainer = styled.ul`
    display: flex;
    gap: 5rem;
`


export const NavLink = styled.li`
    font-size: 1.2rem;
    font-family: 'Cinzel', serif;
    font-weight: 400;
    letter-spacing: 1px;
    transition: all .3s ease-out;
`


export const NavFeatured = styled.span`
    font-weight: 800;
`

export const CartToggle = styled.div`
    margin: 0 2rem;
    border: 2px solid var(--bg-grey);
    height: 3.8rem;
    width: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s ease-out;
`

//Header & Nav

//Second Hero Section

export const SecondHeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 665px;
    background: var(--card-hero);
`
export const SHeroContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30rem;
    box-shadow: 0 0 3px 1px var(--card-txt-gold);
    &:hover {
        height: 100%;
        transition: all 0.2s ease-in;
    }

// mediaqueris hero 2 
@media (max-width: 1200px) {
    height: 100%;
    flex-direction: column-reverse;
}
`

export const SHeroImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: #0000;
    padding: 2rem;
`

export const SHeroImg = styled.img`
    transform: translateX(-400px);
    height: 24rem;
    border-radius: 50%;
    box-shadow: 3px 2px 5px 2px black;
    transition: all 0.5s ease-out;

@media (max-width: 1200px) {
    transform: none;
    height: 12rem;
}
`

export const SHeroInfoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    align-items: start;
    padding: 2rem;
    & h2 {
        opacity: 0;
        transform: translateX(-300px);
        font-family: 'Cinzel', serif;
        font-size: 1.8rem;
        color: var(--card-txt-gold);
        text-shadow: 1px 1px 0px white;
        letter-spacing: 1px;
        transition: all 0.5s ease-out;
    }

    & p {
        opacity: 0;
        transform: translateX(-300px);
        font-family: 'Cinzel', serif;
        font-size: 1.2rem;
        font-weight: 600;
        color: white;
        line-height: 40px;
        text-shadow: 1px 1px 0px var(--card-txt-gold);
        transition: all 0.5s ease-out;
    }

@media (max-width: 1200px) {
    align-items: center;
    gap: 3rem;
    padding: 0;

        & h2 {
            margin-top: 4rem;
            transform: none;
            opacity: 1;
            font-size: 1.3rem;
        }

        & p {
            opacity: 1;
            transform: none;
            font-size: 1rem;
            text-align: center;
        }


}
`
export const BoldText = styled.span`
    color: var(--card-txt-gold);
    text-shadow: 1px 1px 0px #202020;
`
//Second Hero Section

//Featured Section

export const FeaturedContainer = styled.section`
width: 100%;
height: 900px;
gap: 5rem;
background: var(--card-hero);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 1200px) {
    height: 125rem;
}
`

export const FeaturedTitle = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: end;
    align-items: center;
    font-family: 'Anton', sans-serif;
    margin-right: 5rem;
    & h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 3rem;
        letter-spacing: 10px;
        background: var(--bg-dark);
        border: 1px solid var(--card-txt-gold);
        height: 4rem;
        width: 20rem;
        border-radius: 30px;
        transform-style: preserve-3d;
    }

@media (max-width: 1200px) {
    & h2 {
        font-size: 2.5rem;
    }}
`

export const FeaturedProductsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
gap: 3rem;

@media (max-width: 1200px) {
    flex-direction: column;
}
`

export const FeaturedCard = styled.div`
width: 18rem;
height: 32rem;
background: var(--card-txt-grey);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 5px;
overflow: hidden;
filter: invert(20%);
transition: all 0.3s ease-out;
    &:hover {
        filter: invert(0%);
        transition: all 0.3s ease-in;    
    }

@media (max-width: 1200px) {
    width:  22rem;
}
`

export const FeaturedImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
transition: all 0.3s ease-out;

& img {
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: blur(2px);
  transition: transform 0.3s ease-out;
}

`

export const FeaturedInfo = styled.div`
font-family: 'Cinzel', serif;
transform: translateY(200px);
background: var(--ft-bg-light);
opacity: 0;
position: absolute;
bottom: 0;
width: 100%;
padding: 1rem;
color: white;
display: flex;
gap: 1rem;
flex-direction: column;
align-items: center;
justify-content: center;
border-top: 1px solid var(--ft-bg-green);
transition: all 0.4s ease-out;

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 800;
  width: 100%;
  height: 2rem;
  color: var(--ft-bg-green);
  text-shadow: 1px 1px 0px black;
  letter-spacing: 1px;
}

p {
  font-size: 0.8rem;
}
`

export const FeaturedButton = styled.button`
text-transform: uppercase;
font-size: 0.7rem;
font-weight: 800;
width: 70%;
background: var(--bg-dark);
color: var(--ft-bg-green);
box-shadow: 0 0 1px 1px var(--ft-bg-green);
padding: 0.5rem 1rem;
border: none;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease-out;

&:hover {
  background: var(--ft-bg-green);
  color: white;
  text-shadow: 1px 1px 0px black;
  box-shadow: 0 0 2px 1px var(--ft-bg);
  transition: all 0.3s ease-in;
}
`

//Featured Section

//footer 
export const FooterContainer = styled.footer`
    width: 100%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--card-hero);
    border-top: 2px solid #202020;
    gap: 4rem;    
`

export const FooterTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 4rem;
    & img {
        height: 6rem;
        border-radius: 50%;
        border: 1px solid var(--card-txt-gold);
    }
    & small {
        width: 40%;
        height: 2px;
        background: #202020;
    }
`

export const FooterMid = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    & a {
        display: flex;
        align-items: center;
        justify-content: center; 
        width: 2.9rem;
        height: 2.9rem;
        border-radius: 20%;
        border: 1px solid var(--bg-grey);
        transition: all 0.3s ease-out;
    }

    & i {
        transition: all 0.3s ease-out;
    }
`

export const FooterBottom = styled.div`
    width: 100%;
    height: 3rem;
    background: #050505;
    display: flex;
    justify-content: center;
    align-items: center;
    & h3 {
        text-transform: italic;
        color: #202020;
        font-size: 1.1rem;
        font-style: italic;
    }
`

//footer 

