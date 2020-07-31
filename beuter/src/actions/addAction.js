import {
    ADD_PRODUCT_BASKET
} from './type'

export const addBasket = (productName) => {
    return (dispatch) => {
        console.log('Added to Basket');
        console.log("Product: ", productName)
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productName
        })
    }
}