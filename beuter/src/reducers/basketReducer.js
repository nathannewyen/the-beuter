import {
    ADD_PRODUCT_BASKET,
    GET_NUMBERS_BASKET,
    LOADING,
    SUCCESS
} from '../actions/type';

const initialState = {
    products: [],
    loading: false,
    basketNumbers: 0,
    cartCost: 0,
    numbers: 0,
    inCart: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                products: [],
                    loading: true,
                    err: ''
            };

        case SUCCESS:
            return {
                ...state,
                products: action.payload,
                    loading: false,
                    err: ''
            };
        case ADD_PRODUCT_BASKET:
            let numbers = (state.numbers += 1);
            let inCart = (state.inCart = true);
            let products = state.products;
            let foundProduct = products.find(prod => prod.title === action.payload.title);

            if (foundProduct) {
                foundProduct.quantity++;
            } else {
                action.payload.quantity = 1;
                products.push(action.payload);
            }
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                    cartCost: state.cartCost + action.payload.price,
                    product: products,
                    numbers: numbers,
                    inCart: inCart
            };
        case GET_NUMBERS_BASKET:
            return {
                ...state
            };
        default:
            return state;
    }
};