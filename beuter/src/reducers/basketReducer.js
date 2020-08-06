import {
    ADD_PRODUCT_BASKET,
    GET_NUMBERS_BASKET,
    DELETE_SOME_ITEM,
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
    const nf = new Intl.NumberFormat();
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
                    products: products,
                    inCart: inCart
            };
        case GET_NUMBERS_BASKET:
            return {
                ...state
            };
        case DELETE_SOME_ITEM:
            let items = state.products.filter(itemDelete => itemDelete.title != action.payload);
            console.log(items);
            return {
                ...state,
                products: items,
                    cartCost: state.cartCost - items.price,
                    basketNumbers: state.basketNumbers - items.quantity,

            };
        default:
            return state;
    }
};