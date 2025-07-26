import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo, fetchTodo, toggleTodo, updateTodo } from '../../store/actions/todoActions';
import { useSelector } from 'react-redux';
import TodoContent from './TodoContent';
import './Todo.css';
import SearchBar from '../../components/search/SearchBar';

const Todo = () => {
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const userTasks = useSelector(state => state.todo.tasks);
    const inputRef = useRef(null);
    const editRef = useRef(null);

    useEffect(() => {
        dispatch(fetchTodo({ userId }))
    }, [dispatch, userId]);

    const handleAddTask = () => {
        if (inputRef?.current?.value.trim()) {
            dispatch(addTodo({ userId, task: inputRef.current.value }))
        }
        inputRef.current.value = ''
    }

    const handleDelete = (taskId) => {
        dispatch(deleteTodo({ userId, taskId }))
    }

    const handleToggle = (taskId) => {
        dispatch(toggleTodo({ userId, taskId }));
    }

    const handleUpdate =(taskId)=>{
        const currentValue = editRef?.current?.value;
        if(currentValue){
            dispatch(updateTodo({userId, taskId, task: currentValue }))
        }
    }

const filteredTodos = userTasks.filter(todo =>
    todo.task.toLowerCase().includes(searchString.toLowerCase())
  );

    return (
        <div className='todo'>
            <div className='todo__header'>
            <h1 className='todo__title'>Todos</h1>
            <SearchBar searchTerm={searchString} setSearchTerm={setSearchString}/>
            </div>
            <div className="todo__add">
                <input type="text" placeholder='Add a new todo!' className='todo__add__input' ref={inputRef} />
                <button className="todo__add_button" onClick={handleAddTask}>Add</button>
            </div>
            <div className="todo__content__box">
                {
                    filteredTodos && filteredTodos.map((todo) => (
                        <TodoContent todo={todo} handleDelete={handleDelete} handleToggle={handleToggle} handleUpdate={handleUpdate} ref={editRef}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo