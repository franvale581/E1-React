import styled from 'styled-components';

export const ProductSection = styled.section`
    height: 300vh;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--card-hero);
@media (max-width: 1160px) {
    height: 470vh;
}
@media (max-width: 751px) {
    height: 850vh;
}
`

export const ProductBanner = styled.div`
    width: 100%;
    height: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Cinzel', serif;
    background: var(--card-hero);
    & h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e2711d;
        font-size: 2.3rem;
        letter-spacing: 10px;
        border: 1px solid var(--card-txt-gold);
        height: 5rem;
        width: 80%;
        border-radius: 40px;
        transform-style: preserve-3d;
    }

@media (max-width: 1200px) {
    margin: 0;
    justify-content: center;
    & h2 {
        font-size: 2.5rem;
    }
}

@media (max-width: 740px) {
    & h2 {
        font-size: 1.7rem;
    }
}
/* mobile */
@media (max-width: 576px) {
    & h2 {
        height: 3.3rem;
        font-size: 1rem;
        width: 100%;
        border-radius: 0;
        border-left: none;
        border-right: none;
    }
}
`

export const ProductsContainer = styled.div`
    margin-top: -8rem;
    padding: 0 2rem 4rem 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;

@media (max-width: 1160px) {
         grid-template-columns: repeat(2, 1fr);
}
@media (max-width: 751px) {
         grid-template-columns: repeat(1, 1fr);
}

        .product {
            width: 20rem;
            height: 37rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Cinzel', serif;
            gap: 1rem;
            background-image: linear-gradient(to top, #0d1b2a, #162637, #1f3146, #293d54, #334963, #334963, #334963, #334963, #293d54, #1f3146, #162637, #0d1b2a);
            border: 1px solid var(--card-txt-gold);
            border-right: 3px solid var(--card-txt-gold);
            border-left: 2px solid var(--card-txt-gold);
            border-bottom: 3px solid var(--card-txt-gold);
            box-shadow: 2px 2px 4px 4px black;
            border-radius: 5px;
        }
        .product-img {
            display:flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 22rem;
            border-top: 3px solid var(--card-txt-gold);
            border-bottom: 2px solid var(--card-txt-gold);
            border-bottom-left-radius:  2px;
            background-image: linear-gradient(to left top, #001219, #09161c, #10191f, #151d22, #1a2025, #1a2025, #1a2025, #1a2025, #151d22, #10191f, #09161c, #001219);

            }
            & img {
                width: 12rem;
                height: 20rem;
                border-radius: 2px;
                z-index: 1;
            }
        & h4 {
            padding-top: .8rem;
            font-size: .9rem;
            font-weight: 800;
            color: var(--card-txt-gold);
            letter-spacing: 1px;
            text-shadow: 2px 2px #ae2012;
        }
        
        .product-info-mid {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: .8rem;
        }
        .product-info-mid span {
            color: grey;
            font-weight: 800;
            font-size: .9rem;
        }
        .product-info-mid p {
            color: grey;
            font-weight: 800;
            font-size: .9rem;
        }
        .product-info-bottom {
            position: relative;
            bottom: -3.7rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .4rem;
        }
        .product-info-bottom span {
            color: var(--card-txt-gold);
            font-weight: 800;
            font-size: .9rem;
        }
        .product-info-bottom p {
            color: grey;
            font-weight: 800;
            font-size: .9rem;
        }

        .btn-add {
            position: relative;
            bottom: -.7rem;
            left: 7.4rem;
            height: 2.7rem;
            width:  2.7rem;
            border-radius: 50%;
            cursor: pointer;
            background: var(--card-txt-gold);
            &:active {
                transform: scale(0.95);
            }
        }
`

export const ProductsBtnLoad = styled.button`
    height: 3rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    background: var(--bg-dark);
    border-radius: 25px;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:active {
        transform: scale(0.95);
    }
    &:hover {
        border: 1px solid var(--card-txt-gold);
        transition: all 0.2s ease-in;
    }

`