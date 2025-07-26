import React, { forwardRef, useState } from 'react';
import './TodoContent.css';

const TodoContent = forwardRef(({todo, handleDelete, handleToggle, handleUpdate}, ref) => {
    const [isEdit, setIsEdit] = useState(false);
    const onClickHandleUpate =(id)=>{
        handleUpdate(id);
        setIsEdit(false);
    }
    return (
        <>
            {isEdit ?
                <>
                    <div className='todo_edit__input'>
                    <input type="text" className="todo__content_input" defaultValue={todo.task} ref={ref} />
                    <button className="todo__content_toggle" onClick={()=>onClickHandleUpate(todo.id)}><i class="fa-solid fa-square-check"></i></button>
                    </div>
                </>
                :
                <>  
                    <div className="todo__content" key={todo.id}>
                    <input type='checkbox' className="todo__content_toggle" onChange={() => handleToggle(todo.id)}/>
                    <p className="todo__content__desc">{todo.task}</p>
                    <button className="todo__content_delete" onClick={() => handleDelete(todo.id)}><i class="fa-solid fa-xmark"></i></button>
                    <button className="todo__content_toggle" onClick={() => setIsEdit(true)}><i class="fa-solid fa-pen-to-square"></i></button>
                    </div>
                </>
            }
        </>
    )
})

export default TodoContent