import { app as appActions } from '../../actions';
import Types from '../../../classes/types';

const { appSizesMap } = Types;

const initialState = {
    appSize: appSizesMap.get('desktop').key,
    basket:[],
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case appActions.APP_SET_SIZE:
        return {
            ...state,
            appSize: action.payload,
        };

        case appActions.ADD_PRODUCT_ON_BASKET:
            console.log(action.payload)

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
