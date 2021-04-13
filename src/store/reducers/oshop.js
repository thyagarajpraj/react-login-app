import { updateObject } from "../../shared/utilities";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    categories: null,
    error: false
};

const startGetCategories = (state, action) => {
    return updateObject(state, {
        error: false
    });
};

const successGetCategories = (state, action) => {
    return updateObject(state, {
        categories: action.data,
        error: false
    });
};

const failGetCategories = (state, action) => {
    return updateObject(state, {
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_GET_CATEGORIES: return startGetCategories(state, action);
        case actionTypes.FAIL_GET_CATEGORIES: return failGetCategories(state, action);
        case actionTypes.SUCCESS_GET_CATEGORIES: return successGetCategories(state, action);
        default: return state;
    }
};

export default reducer;