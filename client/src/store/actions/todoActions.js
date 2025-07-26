import axios from "axios";
import { todoActionTypes } from "../action_types/todoActionTypes";
import { URL_BASE_PREFIX } from "../../RestURLConstant";

export const fetchTodo = ({ userId }) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL_BASE_PREFIX}/api/tasks?userId=${userId}`);
    dispatch({ type: todoActionTypes.FETCH_TODO_SUCCESS, payload: data });
  } catch (e) {
    const message = e.response?.data?.error || 'Data not found!';
    dispatch({ type: todoActionTypes.TODO_ACTION_FAILED, payload: message });
  }
};

export const addTodo = ({ userId, task }) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${URL_BASE_PREFIX}/api/tasks`, { userId, task });
    dispatch({ type: todoActionTypes.ADD_TODO_SUCCESS, payload: data });
  } catch (e) {
    const message = e.response?.data?.error || 'Could not add todo';
    dispatch({ type: todoActionTypes.TODO_ACTION_FAILED, payload: message });
  }
};


export const deleteTodo = ({ userId, taskId }) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${URL_BASE_PREFIX}/api/tasks/${taskId}`, { data: { userId } });
    dispatch({ type: todoActionTypes.DELETE_TODO_SUCCESS, payload: data });
  } catch (e) {
    const message = e.response?.data?.error || 'Could not delete todo';
    dispatch({ type: todoActionTypes.TODO_ACTION_FAILED, payload: message });
  }
};

export const toggleTodo = ({ userId, taskId }) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${URL_BASE_PREFIX}/api/tasks/${taskId}`, { userId });
    dispatch({ type: todoActionTypes.TOGGLE_TODO_SUCCESS, payload: data });
  } catch (e) {
    const message = e.response?.data?.error || 'Could not update todo';
    dispatch({ type: todoActionTypes.TODO_ACTION_FAILED, payload: message });
  }
};

export const updateTodo = ({ userId, taskId, task }) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${URL_BASE_PREFIX}/api/tasks/${taskId}`, { userId, task });
    dispatch({ type: todoActionTypes.UPDATE_TODO_SUCCESS, payload: data });
  } catch (e) {
    const message = e.response?.data?.error || 'Could not update task';
    dispatch({ type: todoActionTypes.TODO_ACTION_FAILED, payload: message });
  }
};