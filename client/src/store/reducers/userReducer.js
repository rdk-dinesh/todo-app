import { userActionTypes } from "../action_types/userActionTypes";

const initialState = {
  userDetails: {
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      zipcode: ''
    }
  },
  error: null
};

export const userReducer =(state = initialState, action)=>{
    const { type, payload } = action;
    switch(type){
        case userActionTypes.FETCH_USER_DETAILS:
            return { ...state, userDetails: payload }
        case userActionTypes.UPDATE_USER_DETAILS:
            return { ...state, userDetails: payload }
        case userActionTypes.USER_ACTION_FAILED:
            return { ...state, error: payload }
        default:
            return state;
    }
}