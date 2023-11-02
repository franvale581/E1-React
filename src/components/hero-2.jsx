import { BoldText, SHeroContainer, SHeroImageContainer, SHeroImg, SHeroInfoContainer, SecondHeroSection } from "../assets/js/styles"

export function SecondHero() {
    return(

        <SecondHeroSection id="second-hero">

        <SHeroContainer className='second-hero-container'>
  
          <SHeroImageContainer>
            <SHeroImg src="./src/assets/logo/logo-fondo.jpg" alt="hero-logo"></SHeroImg>
          </SHeroImageContainer>
          
          <SHeroInfoContainer>
            <h2>Hidden Garden Indumentaria</h2>
            <p>En <BoldText>Hidden Garden</BoldText>, la moda y la artesanía se entrelazan de manera sublime, fusionando la <BoldText>belleza de la naturaleza</BoldText> con la destreza y creatividad de Mateo.
            Inspirado por los secretos de la naturaleza, Mateo teje su <BoldText>propia magia</BoldText> en cada diseño.</p>
          </SHeroInfoContainer>
  
  
        </SHeroContainer>
  
      </SecondHeroSection>

    )
}