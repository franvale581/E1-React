import styled from 'styled-components';

export const ProductSection = styled.section`
    height: 100vh;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--card-hero);
`

export const ProductBanner = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(to right, #414345, #232526);
    border-bottom: 2px solid var(--card-txt-gold);
    & h2 {
        padding-top: 1rem;
        font-size: 4rem;
        font-family: 'Cinzel', serif;
        font-weight: 800;
        text-shadow: 2px 0 0 var(--card-txt-gold);
        letter-spacing: 4px;
    }
`

export const ProductsContainer = styled.div`
    
`