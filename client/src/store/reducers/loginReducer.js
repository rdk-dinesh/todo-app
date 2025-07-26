import { loginActionTypes } from '../action_types/loginActionTypes';

const initialState = {
  user: null,
  isLoggedIn: false,
  userId: null,
  error: null
};

export const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case loginActionTypes.LOGGED_USER:
      return {
        ...state,
        user: payload.user,
        userId: payload.userId,
        error: null
      };

    case loginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
      };

    case loginActionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
        user: null,
        userId: null
      };

    case loginActionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        error: null,
        userId: null
      };

    default:
      return state;
  }
};
