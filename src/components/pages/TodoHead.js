import React,{useState} from "react";
import styled from "styled-components";


const Header = styled.div`
    font-family: 'Gaegu', cursive;
    padding-top:48px;
    padding-left:32px;

    input{
        padding:0px;
        border-style:none;
        width:100%;
        margin:0;
        font-size:36px;

        &.day{
            padding-top:12px;
            padding-bottom:8px;
            border-style:none;
            width:100%;
            margin:0;
            font-size:18px;
            color:#868e96;
        }
    }

    input:focus{
        outline: none;
    }
    
    h4{
        color: #3b549c;
        border: 1px soild #868396;
    }
`

const Date = styled.div`
    width:90%;
    border-bottom: 1px solid #8984b4;
`

function TodoHead(){
    return(
        <Header>
            <Date>
            <input placeholder="오늘 날짜 입력" />
            <input className="day" placeholder="요일을 입력하세요." />
            </Date>
        </Header>
    )
}

export default TodoHead;

