import axios from 'axios';

export const getProductsAPI = () => {
    return function (dispatch) {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                dispatch({
                    type: "SAVE_API_RESPONSE",
                    payload: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
};