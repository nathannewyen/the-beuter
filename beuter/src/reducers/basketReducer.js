import {
    ADD_PRODUCT_BASKET,
    GET_NUMBERS_BASKET
} from '../actions/type'

const initialState = {
    basketNumbers: 0,
    carCost: 0,
    products: {

    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = {
                ...state.products[action.payload]
            }
            console.log(addQuantity)
            return {
                basketNumbers: state.basketNumbers + 1
            };
        case GET_NUMBERS_BASKET:
            return {
                ...state
            };
        default:
            return state;
    }
}