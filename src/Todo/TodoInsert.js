import React,{useState,useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');
    // const onChange = (e) =>{
    //     setValue(e.target.value);
    // }
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);
    // const onSubmit = useCallback(
    //     e=>{
    //         onInsert(value);
    //         setValue(''); //value값 초기화
    //         e.preventDefault();
    //     },
    //     [onInsert,value]
    // );
    const onSubmit = (e)=>{
            onInsert(value);
            setValue('');
            e.preventDefault();
    }
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
        <input type="text" 
        placeholder="할일을 입력하세요"
        value={value} 
        onChange={onChange}
        />
        <button type="submit">
            <MdAdd/>
        </button>
    </form>
    );
};

export default TodoInsert;