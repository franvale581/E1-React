import styled from 'styled-components';

const CartContainer = styled(({ isOpen, ...props }) => <div {...props} />)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  width: 19rem;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(40px);
  z-index: 2;
  border-left: 2px solid var(--card-txt-gold);
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.15);
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
    .cart-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: -13rem;
        width: 100%;
        height: 7rem;
        font-family: 'Cinzel', serif;
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 3px;
        color: var(--card-txt-gold);
        border-bottom: 2px solid var(--card-txt-gold);
    }
`;

export function Cart({ isOpen }) {
  return (
    <CartContainer isOpen={isOpen}>
        <div className='cart-title'>
            <span>Tus Productos</span>
        </div>
    </CartContainer>
  );
}