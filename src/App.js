import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoHead from './components/pages/TodoHead';
import TodoList from './components/pages/TodoList';
import PlusButton from './components/pages/PlusButton';
import Main from './components/pages/main';
import Write from './components/pages/write';

// function App() {
//   return (
//     <div>
//       <Main />
//       <Router>
//         <Routes>
//           <Route path="/"  component={Main}  exact={true}  />
//           <Route path="/write"  component={Write}  exact={true} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



const Background = styled.div`
    background : #e9ecef;
    display:flex;
    justify-content: center;
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
                <PlusButton />
            </Mainbox>
        </Background>
    )
}

export default App;
