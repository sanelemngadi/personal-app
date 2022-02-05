import React from 'react'
import Todo from "./components/todos/Todo";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './hocs/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/todos/" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
