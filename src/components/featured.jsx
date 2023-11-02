import { FeaturedCard, FeaturedContainer, FeaturedProductsContainer, FeaturedImg, FeaturedInfo, FeaturedButton, FeaturedTitle } from "../assets/js/styles";
import BuzoVintageImg from "../assets/images/featured/buzo-vintage-2000s.jpg"
import ParachuteCargoImg from "../assets/images/featured/parachute-cargo.jpg"
import PolleraY2kImg from "../assets/images/featured/pollera-Y2K-jean.jpg"

export function FeaturedSection() {
    return (
      <FeaturedContainer id="featured-section">

        <FeaturedTitle>
          <h2>Destacado</h2>
        </FeaturedTitle>

        <FeaturedProductsContainer>

        {/*product 1*/}        
          <FeaturedCard className="featured-card">
            <FeaturedImg className="featured-img">
              <img src={BuzoVintageImg} alt="Imagen del producto" />
            </FeaturedImg>
            <FeaturedInfo className="featured-info">
              <h2>Buzo Vintage 2000's</h2>
              <p>Descripción del producto.</p>
              <p>Precio: $XX.XX</p>
              <FeaturedButton>Comprar</FeaturedButton>
            </FeaturedInfo>
          </FeaturedCard>

        {/*product 2*/}
          <FeaturedCard className="featured-card">
            <FeaturedImg className="featured-img">
              <img src={ParachuteCargoImg} alt="Imagen del producto" />
            </FeaturedImg>
            <FeaturedInfo className="featured-info">
              <h2>Parachute Cargo</h2>
              <p>Descripción del producto.</p>
              <p>Precio: $XX.XX</p>
              <FeaturedButton>Comprar</FeaturedButton>
            </FeaturedInfo>
          </FeaturedCard>

        {/*product 3*/}
          <FeaturedCard className="featured-card">
            <FeaturedImg className="featured-img">
              <img src={PolleraY2kImg} alt="Imagen del producto" />
            </FeaturedImg>
            <FeaturedInfo className="featured-info">
              <h2>Pollera Y2K Jean</h2>
              <p>Descripción del producto.</p>
              <p>Precio: $XX.XX</p>
              <FeaturedButton>Comprar</FeaturedButton>
            </FeaturedInfo>
          </FeaturedCard>

        </FeaturedProductsContainer>
      </FeaturedContainer>
    );
  }