import React, { useState } from "react";
import styled from "styled-components";
import TodoHead from './components/pages/TodoHead';
import TodoList from './components/pages/TodoList';


const Background = styled.div`
    height:100vh;
    background : #eee8f0;
    display:flex;
    justify-content: center;
    align-items: center
`
const Mainbox = styled.div`
    background:#fff;
    width:450px;
    height:600px;
    border-radius:16px;
    box-shadow:0 0 8px 0 rgba(0,0,0,0.04);

    display:flex;
    flex-direction:column;
`


function App(){

    return(
        <Background>
            <Mainbox>
                <TodoHead />
                <TodoList />
            </Mainbox>
        </Background>
    )
}

export default App;
