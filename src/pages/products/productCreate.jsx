//funcion que crea el template con los datos del producto
export const createProductTemplate = (product) => {
    const { id, name, talle, precio, tela, imagen } = product;
    return`
    <div class="product">
                    <div class="product-img">
                        <img src=${imagen} alt=${name}>
                    </div>
                    <div class="product-info">
                        <h4>${name}</h4>
                        <div class="product-info-mid">
                            <span>Autor:</span>
                            <p>${talle}</p>
                        </div>
                        <div class="product-info-bottom">
                            <span>Precio:</span>
                            <p> $${precio}</p>
                        </div>
                    </div>
                    <div class="product-btn-container">
                        <button data-id='${id}'
                        data-name='${name}'
                        data-precio='${precio}'
                        data-bookImg='${imagen}' class="btn-add">Añadir</button>    
                    </div>
                    
                </div>

    `;
};


const renderProducts = (productsList) => {
    ProductsContainer.innerHTML += productsList
        .map(createProductTemplate)
        .join("");
};

const isLastIndexOf = () => {
    return appState.currentProductsIndex === appState.productsLimit -1;
}


//funcion para mostrar mas productos a traves del boton ver mas
const showMoreProducts = () => {
    appState.currentProductsIndex += 1;
    let { products, currentProductsIndex } = appState;
    renderProducts(products[currentProductsIndex]);
    if (isLastIndexOf()) {
        BtnLoad.classList.add("hidden")};
    };

//metodo llamado para inicializar el objeto creado
const init = () => {
    renderProducts(appState.products[0]);
    BtnLoad.addEventListener("click", showMoreProducts);
};

init();