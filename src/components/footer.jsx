import { FooterBottom, FooterContainer, FooterMid, FooterTop } from "../assets/js/styles"



export function FooterSection() {
    return(
        <>
        
        <FooterContainer className='footer-container'>

      <FooterTop>
        <img src="./src/assets/logo/logo-fondo.jfif" alt="logo" />
        <small></small>
      </FooterTop>

      <FooterMid className='footer-mid'>

      <a href="#">
        <i className="fa-brands fa-instagram fa-2x"></i>
        </a>
      <a href="#">
        <i className="fa-brands fa-tiktok fa-2x"></i>
        </a>
      <a href="#"><i className="fa-brands fa-whatsapp fa-2x"></i> 
      </a>

      </FooterMid>

      
     

    </FooterContainer>
    <FooterBottom>
        <h3>All Rights Reserved 2023 - Hidden Garden</h3>
    </FooterBottom>
        
        </>
        
    )
}