import {
    ADD_PRODUCT_BASKET
} from './type'

export const addBasket = () => {
    return (dispatch) => {
        console.log('Added Basket')
        dispatch({
            type: ADD_PRODUCT_BASKET
        })
    }
}