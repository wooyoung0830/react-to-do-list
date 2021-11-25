import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {AiFillDelete } from "react-icons/ai";
import {FaRegCircle, FaRegCheckCircle, FaPlus} from "react-icons/fa";

const TodoMain = styled.div`
    width:90%;
    padding-left: 32px;
    height:350px;
    overflow-y:scroll;
    overflow-x:hidden;
`

const TodoIput = styled.div`
    font-family: 'Gaegu', cursive;
    display:flex;
    flex-direction:colunm;
    width:78%;
    margin-bottom:8px;
    padding-left:32px;

    input{
        margin-right:16px;
        width:90%;
        font-size:24px;
    }

    input{
        border-color:#8984b4;
    }

    input:focus{
        outline: none;
    }
`


const ItemBlock = styled.li`
    list-style:none;
    margin:0px;
    width:85%;
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

function TodoLeft(){
    const todos = JSON.parse(localStorage.getItem('todos'));
    let length;
    if (todos === null){
        length=0
    }else{
        length= todos.length
    }
    
    return(
        <h4 style={{color: "#3b549c", paddingLeft:"32px"}}>남은 할 일 {length}개</h4>
    )
}

function plusTodo(todoContent){
    let todos;
    let todo = todoContent;
    if(localStorage.getItem('todos') === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    todos = [...todos];
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

function removeLocalTodos(text){
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(todos.indexOf(text),1);
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
function TodoItems(props){
    return(
        props.todos.map((todoContent, i) => {
            return (
                <TodoItem text={todoContent} key={i}/>
        )}
        
    )
    )
}

function TodoList(){
    const [todoContent, setTodoContent] = useState("");
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')));
    })
    return(
        <>
            <TodoLeft todos={todos}/>
            <TodoIput todos={todos}>
            <input type="text" placeholder="할 일을 입력하세요" onBlur={(e) => setTodoContent(e.target.value)} />
            <FaPlus size="36px" color="#3b549c" onClick={() => plusTodo(todoContent)} />
            </TodoIput>
            <TodoMain>
                <TodoItems todos={todos}/>
            </TodoMain>
        </>
    )
}

export default TodoList;