import CompleteRegistration from './components/authentication/CompleteRegistration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/authentication/Registration';
import React, { useEffect, useRef, useState } from 'react'
import Logout from './components/authentication/Logout';
import Login from './components/authentication/Login';
import NavigationBar from './hocs/NavigationBar';
import Todo from "./components/todos/Todo";
import Home from "./components/home/Home";
import { useFetchAPI } from './hooks';

function App() {
  const loggedInUser = useFetchAPI("users/user/", {});
  const [user, setUser] = useState({});
  console.log(loggedInUser.resp);

  useEffect(() => {
    setUser(loggedInUser.resp);
  }, [loggedInUser]);

  const isAuthenticated = () => {
    if (Object.keys(user).length > 0 || Object.keys(loggedInUser.resp).length > 0) {
      console.log("The user is logged in");
      return true
    } else {
      console.log("The user is not logged in");
      return false
    }
  }
  const isAuth = isAuthenticated();
  return (
    <Router>
      <NavigationBar isAuth={isAuth} />
      <Routes>
        <Route exact path="/" element={<Home setUser={setUser} />} />
        {isAuth && <Route path="/todos/" element={<Todo />} />}
        {isAuth && <Route path='/logout/' element={<Logout setUser={setUser} />} />}
        {!isAuth && <Route path="/login/" element={<Login />} />}
        {!isAuth && <Route path="/register/" element={<Registration />} />}
        <Route path="/complete-registration/:id/" element={<CompleteRegistration id={user.id} />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
