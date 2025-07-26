import { todoActionTypes } from '../action_types/todoActionTypes';

const initialState = {
    tasks: [],
    error: null
};

export const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case todoActionTypes.FETCH_TODO_SUCCESS:
            return { ...state, tasks: payload };
        case todoActionTypes.ADD_TODO_SUCCESS:
            return { ...state, tasks: [...state.tasks, payload] };

        case todoActionTypes.DELETE_TODO_SUCCESS:
            return { ...state, tasks: payload };

        case todoActionTypes.TOGGLE_TODO_SUCCESS:
            return { ...state, tasks: payload };

        case todoActionTypes.UPDATE_TODO_SUCCESS:
            return { ...state, tasks: payload };

        case todoActionTypes.TODO_ACTION_FAILED:
            return { ...state, error: action.payload };

        default:
            return state;
    }
};
