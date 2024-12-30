import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await axios.post('http://localhost:4000/api/auth/login', userCredentials)

        if (res.data) {
            localStorage.setItem('username', JSON.stringify(res.data))
        };

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};

export const logoutCall = async (dispatch) => {
    dispatch({ type: "LOGOUT_START" })
    try {
        localStorage.removeItem('username');

        dispatch({ type: "LOGOUT_SUCCESS" });
    } catch (err) {
        dispatch({ type: "LOGOUT_FAILURE", payload: err })
    }
};
//register call
export const registerCall = async (userCredentials, dispatch) => {
    dispatch({ type: "REGISTER_START" });
    try {
        const res = await axios.post('http://localhost:4000/api/auth/register', userCredentials);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", payload: err });
    }
};