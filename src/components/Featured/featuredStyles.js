import styled from 'styled-components'

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
    height: 5rem;
    display: flex;
    justify-content: start;
    align-items: start;
    font-family: 'Anton', sans-serif;
    margin-left: 5rem;
    & h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 2.3rem;
        letter-spacing: 10px;
        background: var(--bg-dark);
        border: 1px solid var(--card-txt-gold);
        height: 4rem;
        width: 20rem;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        transform-style: preserve-3d;
    }

@media (max-width: 1200px) {
    margin: 0;
    justify-content: center;
    & h2 {
        font-size: 2.5rem;
        border-radius: 0;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
}

@media (max-width: 740px) {
    & h2 {
        font-size: 1.7rem;
    }
}
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