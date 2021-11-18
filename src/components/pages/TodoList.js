import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {AiFillDelete } from "react-icons/ai";
import {FaRegCircle, FaRegCheckCircle, FaPlus} from "react-icons/fa";

const TodoIput = styled.div`
    display:flex;
    flex-direction:colunm;
    padding-left:32px;
    width:90%;
    margin-bottom:8px;

    input{
        margin-right:12px;
        width:80%;
        font-size:24px;
    }

    input{
        border-color:#8984b4;
    }

    input:focus{
        outline: none;
    }
`

const TodoItemStyle = styled.ul`
    list-style:none;
    padding-left:32px;
    margin:0px;

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

const ItemBlock = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    width:90%;
`
const Content = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
`
const Text =styled.p `
    margin-left:12px;
    &.finish{
        text-decoration: line-through;
        opacity:0.8;
        color:gray;
    }
`

const Delete = styled.div`

    &:hover{
        cursor: pointer; 
    }
`
function plusTodo(todoContent){
    let todos;
    let todo = todoContent;
    if(localStorage.getItem('todos') === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    todos = 
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

function removeLocalTodos(todo){
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(todos.indexOf(todo),1);
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

function TodoItem(props){
    const [done, setDone] = useState(false);

    return(
        <ItemBlock>
            <Content>
                { done ?  <FaRegCheckCircle size="18px" color="#4d4e60" onClick={() => {setDone(!done)}} /> 
                :  <FaRegCircle size="18px" color="#4d4e60" onClick={() => {setDone(!done)}}/>}
                <Text className={ done ? "finish" : null}>{props.text}</Text>
            </Content>
            <Delete>
                <AiFillDelete size="24px" color="#4d4e60" 
                onClick={() =>removeLocalTodos(props.text)}
                />
            </Delete>
        </ItemBlock>
    )
}
function TodoItems(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    return(
        todos.map((todoContent, i) => {
            return (
                <TodoItemStyle>
                    <TodoItem text={todoContent} key={i}/>
                </TodoItemStyle>
        )}
        
    )
    )
}

function TodoList(){
    const [todoContent, setTodoContent] = useState("");
    useEffect(() => {
        
    },[])
    return(
        <>
            <TodoIput>
                <input placeholder="할 일을 입력하세요" onBlur={(e) => setTodoContent(e.target.value)} />
                <FaPlus size="36px" color="#3b549c" onClick={() => plusTodo(todoContent)} />
            </TodoIput>
            <TodoItems />
        </>
    )
}

export default TodoList;