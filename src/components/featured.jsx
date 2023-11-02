import { FeaturedCard, FeaturedContainer, FeaturedProductsContainer, FeaturedImg, FeaturedInfo, FeaturedButton, FeaturedTitle } from "../assets/js/styles";

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
              <img src="../src/assets/featured/buzo-vintage-2000s.jpeg" alt="Imagen del producto" />
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
              <img src="../src/assets/featured/parachute-cargo.jpeg" alt="Imagen del producto" />
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
              <img src="../src/assets/featured/pollera-Y2K-jean.jpeg" alt="Imagen del producto" />
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