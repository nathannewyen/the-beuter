import {
    GET_NUMBERS_BASKET
} from './type'

export const getNumbers = () => {
    return (dispatch) => {
        console.log('getting basketNumbers')
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
}