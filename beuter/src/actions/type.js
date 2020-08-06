import axios from 'axios';

export const ADD_PRODUCT_BASKET = 'ADD_PRODUCT_BASKET';
export const GET_NUMBERS_BASKET = 'GET_NUMBERS_BASKET';
export const DELETE_SOME_ITEM = 'DELETE_SOME_ITEM';
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getSmurfs = () => dispatch => {
    dispatch({
        type: LOADING
    })
    axios.get('http://localhost:8000/api/products')
        .then(res => dispatch({
            type: SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: FAILURE,
            payload: err
        }))
}