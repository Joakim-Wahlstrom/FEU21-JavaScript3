const actiontypes = () => {
    return {
        productCatalog: {
            getProductCatalog: 'GET_PRODUCT_CATALOG',
            getProductCatalogSuccess: 'GET_PRODUCT_CATALOG_SUCCESS',
            getProductCatalogFailure: 'GET_PRODUCT_CATALOG_FAILURE'
        },
        cart: {
            add: 'ADD_TO_CART'
        }
    }
}

export default actiontypes