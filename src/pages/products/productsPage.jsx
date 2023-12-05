import React from 'react'
import { useState } from 'react';
import { ProductBanner, ProductFilterBtn, ProductFilters, ProductSection, ProductsBtnLoad, ProductsContainer } from './productsStyled';
import { ProductsData } from './data/data';

import { IoIosArrowDown } from "react-icons/io";
import { TbShoppingCartUp } from "react-icons/tb";

const Product = ({ product }) => {
  const { id, name, talle, precio, tela, imagen, category } = product;
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
          data-imagen={imagen}
          data-category={category} className="btn-add"><TbShoppingCartUp style={{ color: 'white', fontSize: '1.5rem' }} /></button>
      </div>
    </div>
  );
};

export const ProductsPage = () => {
  const [productsToShow, setProductsToShow] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('todos'); // Estado para la categoría seleccionada
  const products = ProductsData;

  // Carga 3 productos más al hacer clic
  const loadMoreProducts = () => {
    setProductsToShow(prev => prev + 3);
  };

  // Función para actualizar la categoría seleccionada
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    setProductsToShow(6);
  };

  // Filtrar los productos
  const filteredProducts = products.filter(product => 
    selectedCategory === 'todos' ? true : product.category === selectedCategory
  );

  return (
    <>
      <ProductBanner>
        <h2>Products #1 Drop</h2>
      </ProductBanner>
      <ProductSection>
        <ProductFilters>
          <ProductFilterBtn
          className={selectedCategory === 'todos' ? 'selected' : ''} 
          onClick={() => filterByCategory('todos')}>Todos</ProductFilterBtn>

          <ProductFilterBtn
          className={selectedCategory === 'Pantalon' ? 'selected' : ''} 
          onClick={() => filterByCategory('Pantalon')}>Pantalones</ProductFilterBtn>

          <ProductFilterBtn
          className={selectedCategory === 'Buzo' ? 'selected' : ''} 
          onClick={() => filterByCategory('Buzo')}>Buzos</ProductFilterBtn>

          <ProductFilterBtn
          className={selectedCategory === 'Pollera' ? 'selected' : ''} 
          onClick={() => filterByCategory('Pollera')}>Polleras</ProductFilterBtn>
          
        </ProductFilters>
        <ProductsContainer>
          {filteredProducts.slice(0, productsToShow).map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsContainer>
        {productsToShow < filteredProducts.length && (
          <ProductsBtnLoad className='btn-products-load' onClick={loadMoreProducts}>
            <IoIosArrowDown style={{ color: 'grey', fontSize: '2rem' }} />
          </ProductsBtnLoad>
        )}
      </ProductSection>
    </>
  )
}

export default ProductsPage;