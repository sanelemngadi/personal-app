import React from 'react'
import Todo from "./components/todos/Todo";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './hocs/NavigationBar';
import Login from './components/authentication/Login';
import { useFetchAPI } from './hooks';

function App() {
  const user = useFetchAPI("users/user/");
  console.log(user);
  console.log(localStorage.getItem("access_token"));
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/todos/" element={<Todo />} />
        <Route path="/login/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
