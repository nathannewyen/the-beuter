import {
    DELETE_SOME_ITEM
} from './type'

export const deleteItem = (id) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_SOME_ITEM,
            payload: id
        })
    }
}