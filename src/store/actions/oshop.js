import axios from "axios";
import * as actionTypes from "./actionTypes";

export const startGetCategories = () => {
    return {
        type: actionTypes.START_GET_CATEGORIES
    }
};

export const successGetCategories = (data) => {
    return {
        type: actionTypes.SUCCESS_GET_CATEGORIES,
        data: data
    }
}

export const failGetCategories = (error) => {
    return {
        type: actionTypes.FAIL_GET_CATEGORIES,
        error: error
    }
}

export const getCategories = (val) => {
    return dispatch => {
        dispatch(startGetCategories());
        axios.get('https://oshop-b553e.firebaseio.com/categories.json')
            .then(res => {
                var data = res.data;
                for (var key in data) {
                    if (key.indexOf(val) === -1)
                        delete data[key];
                }
                if (Object.keys(data).length === 0)
                    data['empty'] = {
                        name: 'No Data to Show'
                    }
                dispatch(successGetCategories(data));
            })
            .catch(err => {
                dispatch(failGetCategories(err));
            });

    }
};