import React from 'react';
import styled  from 'styled-components';

//定義CSS (包含props)
const StyledTodo = styled.span<{compleled: boolean}>`
    text-decoration: ${(props)=>(props.compleled ? "line-through": "none")}
`;


//定義props
interface Props{
    todo: Todo;  //React專案會自動讀取.d.ts檔案
    index: number;
    onToggleTodo: ToggleTodo;
    onDeleteTodo: DeleteTodo;
}


//建立Function Component
const TodoItem = ({todo, index, onToggleTodo, onDeleteTodo}: Props) =>{
    return (
        <div className='form-check border border-bottom-secondary rounded py-3 m-0 d-flex justify-content-between align-items-center'>
            <div>
                <input 
                    className=''
                    type="checkbox"
                    checked={todo.complete}
                    onClick={(e)=>{
                        onToggleTodo && onToggleTodo(index)
                    }}
                    ></input>
                <StyledTodo
                    className='todo'
                    compleled={todo.complete}
                >{todo.text}</StyledTodo>
            </div>
            <button
                className='btn btn-outline-danger me-3'
                onClick={()=> onDeleteTodo && onDeleteTodo(index)}
                >
                X
            </button>
        </div>
    )
}

export default TodoItem;