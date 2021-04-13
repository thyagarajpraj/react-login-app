import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (tokenId, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: tokenId,
        userId: userId
    };
};

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        err: err
    };
};

export const logOut = () => {
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

const checkAuthTimeout = (expiryTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expiryTime);
    }
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBscWwPHSloIh6rmLhnPHJK6SaK4N2kNpk';
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBscWwPHSloIh6rmLhnPHJK6SaK4N2kNpk';
        }
        axios.post(url, authData)
            .then(response => {
                const expireDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('expirationDate', expireDate);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('tokenId', response.data.idToken);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn * 1000));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error));
            })
    }
};