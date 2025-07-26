import { combineReducers } from "redux";
import { loginReducer } from "./reducers/loginReducer";
import { todoReducer } from "./reducers/todoReducer";
import { userReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    auth: loginReducer,
    user: userReducer
})