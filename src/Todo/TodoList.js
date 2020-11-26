import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos,onRemove,onToggle}) => {
    return (
        <div className='TodoList'>
                {todos.map((todo)=>{
                    return  <TodoListItem onToggle={onToggle} onRemove={onRemove} todo={todo} key={todo.id}></TodoListItem>
                })}
        </div>
    );
};

export default React.memo(TodoList);