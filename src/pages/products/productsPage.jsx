import React from 'react'
import { ProductBanner, ProductSection, ProductsBtnLoad, ProductsContainer } from './productsStyled';
import { ProductsData } from './data/data';

import { IoIosArrowDown } from "react-icons/io";
import { TbShoppingCartUp } from "react-icons/tb";

const Product = ({ product }) => {
  const { id, name, talle, precio, tela, imagen } = product;
  return (
      <div className="product fluid-opacity">
          <h4>{name}</h4>
          <div className="product-img">
              <img src={imagen} alt={name} />
          </div>
          <div className="product-info">
              <div className="product-info-mid">
                  <span>Tela: {tela}</span>
                  <p>Talle: {talle}</p>
              </div>
              <div className="product-info-bottom">
                  <span>Precio:</span>
                  <p> ${precio}</p>
              </div>
          </div>
          <div className="product-btn-container">
              <button data-id={id}
                  data-name={name}
                  data-precio={precio}
                  data-imagen={imagen} className="btn-add"><TbShoppingCartUp style={{ color: 'white', fontSize: '1.5rem' }} /></button>    
          </div>
      </div>
  );
};

export const ProductsPage = () => {
  const products = ProductsData;

  return (
    <>
    <ProductBanner>
      <h2>Products #1 Drop</h2>
    </ProductBanner>
    <ProductSection>
      <ProductsContainer>
        {products.map(product => <Product key={product.id} product={product} />)}
      </ProductsContainer>
      <ProductsBtnLoad className='btn-products-load'><IoIosArrowDown style={{ color: 'grey', fontSize: '2rem' }} /></ProductsBtnLoad>
    </ProductSection>

    
    </>
  )
}

export default ProductsPage;