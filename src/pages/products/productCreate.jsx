
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