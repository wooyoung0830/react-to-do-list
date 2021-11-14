import React,{useState} from "react";
import styled from "styled-components";

const Header = styled.div`
    padding-top:48px;
    padding-left:32px;

    input{
        padding:0px;
        border-style:none;
        width:100%;
        margin:0;
        font-size:36px;
    }

    p{
        color:#868e96;
    }

    h4{
        color: #20c997;
        border: 1px soild #868396;
    }
`

function TodoLeft(){
    return(
        <h4>남은 할 일 4개</h4>
    )
}

function TodoHead(){
    return(
        <Header>
            <input placeholder="오늘 날짜 입력" />
            <p>월요일</p>
            <TodoLeft />
        </Header>
    )
}

export default TodoHead;