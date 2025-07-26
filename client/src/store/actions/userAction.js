import axios from "axios";
import { URL_BASE_PREFIX } from "../../RestURLConstant"
import { userActionTypes } from "../action_types/userActionTypes";

export const fetchUserDetails =(userId)=>async(dispatch)=>{
    try{
        const { data } = await axios.get(`${URL_BASE_PREFIX}/api/user/details/${userId}`);
        console.log(data)
        dispatch({type: userActionTypes.FETCH_USER_DETAILS, payload: data });
    }
    catch(e){
        const error = e.response?.data?.error || 'Unable to fetch the data.';
        dispatch({type: userActionTypes.USER_ACTION_FAILED, payload: error })
    }
} 

export const updateUserDetails =({userId, details})=>async(dispatch)=>{
    try{
        const { data } = await axios.patch(`${URL_BASE_PREFIX}/api/user/details/${userId}`, { details });
        console.log(data)
        dispatch({type: userActionTypes.FETCH_USER_DETAILS, payload: data });
    }
    catch(e){
        const error = e.response?.data?.error || 'Unable to update the data.';
        dispatch({type: userActionTypes.USER_ACTION_FAILED, payload: error })
    }
}