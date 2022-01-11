export const APP_SET_SIZE = 'APP_SET_SIZE';
export const ADD_PRODUCT_ON_BASKET = 'ADD_PRODUCT_ON_BASKET';
export const CATEGORIES = 'CATEGORIES';
export const PRODUCTS = 'PRODUCTS';
export const IMAGES = 'IMAGES';

export const categories = (payload) => ({type: CATEGORIES, payload});
export const products = (payload) => ({type: PRODUCTS, payload});
export const images = (payload) => ({type: IMAGES, payload});

export const setSize = (payload = '') => ({
    type: APP_SET_SIZE,
    payload,
});

export const setProduct = (payload ) => ({
    type: ADD_PRODUCT_ON_BASKET,
    payload,
});

export const getAllCategories = () => (dispatch, getState, apiService) => {
    apiService.getAllCategories()
        .then(res => {
            dispatch(categories(res.data));
        })
};

export const getAllImages = () => (dispatch, getState, apiService) => {
    apiService.getAllImages()
        .then(res => {
            dispatch(images(res.data));
        })
};


export const getAllProducts = () => (dispatch, getState, apiService) => {
    apiService.getAllProduct()
        .then(res => {
            dispatch(products(res.data))
            dispatch(getAllImages())
        })
};
