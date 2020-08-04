import {
    ADD_PRODUCT_BASKET
} from './type'

export const addBasket = (productInfo) => {
    return (dispatch) => {
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productInfo
        })
    }
}