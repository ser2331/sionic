export const APP_SET_SIZE = 'APP_SET_SIZE';
export const ADD_PRODUCT_ON_BASKET = 'ADD_PRODUCT_ON_BASKET';

export const setSize = (payload = '') => ({
    type: APP_SET_SIZE,
    payload,
});

export const setProduct = (payload = '') => ({
    type: ADD_PRODUCT_ON_BASKET,
    payload,
});