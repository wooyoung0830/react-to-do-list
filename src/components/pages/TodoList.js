import React from "react";
import styled from "styled-components";
import {AiFillDelete } from "react-icons/ai";
import {FaPlus} from "react-icons/fa";

const TodoIput = styled.div`
    display:flex;
    flex-direction:colunm;
    padding-left:32px;
    width:90%;
    input{
        margin-right:4px;
        width:80%;
        font-size:24px;
    }

    input:focus{
        outline: none;
    }
`

const TodoItemStyle = styled.ul`
    list-style:none;
    padding-left:32px;

    li{
        margin:4px;
        font-size:24px;
        width:85%;
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
    }
`

function plusTodo(){
    
}
function TodoItem(){
    return(
        // todos.map((item, i) => {
        //     return (
        //         <ul>
        //             <li>
        //                 <div>
        //                     {item}
        //                     <button>delete</button>
        //                 </div>
        //             </li>
        //         </ul>
        //     )
        // })
        <TodoItemStyle>
            {/* 체크박스 만들기, delete는 hover되면 보이기 그 전에는 display:none; */}
            <li>밥먹기 <AiFillDelete size="24px" color="#4d4e60"/></li> 
            <li>책읽기 <AiFillDelete size="24px" color="#4d4e60"/></li>
            <li>잠자기 <AiFillDelete size="24px" color="#4d4e60"/></li>
        </TodoItemStyle>
    )
}

function TodoList(){
    const todos = localStorage.getItem('todos')
    return(
        <div>
            <TodoIput>
            <input placeholder="todo 입력란"></input>
            <FaPlus  size="36px" color="#3b549c" onClick={plusTodo}/>
            </TodoIput>
            <TodoItem />
        </div>
    )
}

export default TodoList;