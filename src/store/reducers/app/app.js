import {app as appActions} from '../../actions';
import Types from '../../../classes/types';

const {appSizesMap} = Types;

const initialState = {
    appSize: appSizesMap.get('desktop').key,
    categories: [],
    images:[],
    products: [],
    basket: [],
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case appActions.APP_SET_SIZE:
            return {
                ...state,
                appSize: action.payload,
            }

        case appActions.CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };

        case appActions.IMAGES:
            return {
                ...state,
                images: action.payload,
            };

        case appActions.PRODUCTS:
            // const arrProduct = state.images.map((item) => {
            //     item.productId === action.payload
            // });
            // console.log(arrProduct)
            return {
                ...state,
                products: action.payload,
            };

        case appActions.ADD_PRODUCT_ON_BASKET:
            return {
                ...state,
                basket: [
                    ...state.basket,
                    action.payload
                ],
            };
        default:
            return state;
    }
};

export default app;
