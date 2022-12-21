import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ToDoList from './pages/ToDoList';

import Container from '@mui/material/Container';

function App() {
  return ( 
    <Container maxWidth = "sm">
      <Router>
        <Routes>
          <Route path={"/"} element = {<ToDoList />}></Route>
        </Routes>
      </Router> 
    </Container>
  );
}

export default App;