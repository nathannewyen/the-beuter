export function getProductAPI() {
    return function (dispatch) {
        fetch('/api/products')
            .then(res => {
                return res.json()
                    .then(json => dispatch({
                        type: "FETCH_PRODUCTS",
                        json
                    }));
            })
    }
}