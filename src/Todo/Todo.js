import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate'
import React, { useRef, useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 제작',
      checked: false,
    }
  ]);
  //고유값으로 사용될 id값
  const nextId = useRef(4); //useRef 해당 부분을 객체화 시켜서 직접 바꿀수있도록 하는 hooks 
  //ex 
  // const inputRef = useRef();
  // <input ref={inputRef}></input>
  // console.log(inputRef.current); // input의 객체가 나타남 iuputRef.current.focus() input에 포커스를 줄수있음

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    // setTodos(todos.concat(todo));
    setTodos(todos =>
      todos.concat(todo)
    );
    nextId.current++;
  }
  const onRemove = (id) => {
    // setTodos(todos.filter(todo=> todo.id !==id));
    setTodos(todos =>
      todos.filter(todo =>
        todo.id !== id)
    );
  }
  const onToggle = (id) => {
    setTodos(todos =>
      todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    )
  }
  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
      </TodoTemplate>
    </>
  );
};
export default Todo;
