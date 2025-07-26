import axios from 'axios'
import { loginActionTypes } from '../action_types/loginActionTypes';
import { URL_BASE_PREFIX } from '../../RestURLConstant';

export const loginUser = ({ username, password }) => async (dispatch) => {
    try {
        const { data, status } = await axios.post(`${URL_BASE_PREFIX}/login`, { username, password });
        if (status === 200) {
            dispatch({ type: loginActionTypes.LOGGED_USER, payload: data });
            dispatch({ type: loginActionTypes.LOGIN_SUCCESS })
        }
    } catch (e) {
        const message = e.response?.data?.message || 'Server not reachable. Please try again later.';
        dispatch({ type: loginActionTypes.LOGIN_FAILED, payload: message });
    }

}