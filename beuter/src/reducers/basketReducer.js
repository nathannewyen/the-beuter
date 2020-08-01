import {
    ADD_PRODUCT_BASKET,
    GET_NUMBERS_BASKET
} from '../actions/type'

let productAPI = {}

fetch('http://localhost:8000/api/products')
    .then((res) => res.json())
    .then(data => console.log(data))


const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {

    }
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
            };
        case GET_NUMBERS_BASKET:
            return {
                ...state
            };
        default:
            return state;
    }
}