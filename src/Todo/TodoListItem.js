import React, { useState } from 'react';
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from 'react-icons/md'
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;


    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};
// memo로 감쌀시에는 해당클레스 내부에있는요소들(여기선 todo,onRemove,onToggle이 바뀌지않을시 렌더링을 하지않음!) 데이터 낭비줄이기
export default React.memo(TodoListItem);