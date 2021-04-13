import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utilities";

const initialState = {
    userId: null,
    token: null,
    error: null,
    loading: null,
    authRedirectPath: '/login'
};

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        token: action.idToken,
        userId: action.userId,
        authRedirectPath: '/'
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.err.message,
        loading: false,
    });
};

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null,
        authRedirectPath: '/login'
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default reducer;