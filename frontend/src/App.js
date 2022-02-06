import React, { useEffect, useRef, useState } from 'react'
import Todo from "./components/todos/Todo";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './hocs/NavigationBar';
import Login from './components/authentication/Login';
import { useFetchAPI } from './hooks';
import Logout from './components/authentication/Logout';
import Registration from './components/authentication/Registration';
import CompleteRegistration from './components/authentication/CompleteRegistration';

function App() {
  const [user, setUser] = useState({});
  const loggedInUser = useFetchAPI("users/user/", {});
  console.log(loggedInUser.resp);

  useEffect(() => {
    setUser(loggedInUser.resp);
  }, [loggedInUser]);

  const countRenders = useRef(0);
  console.log(user);

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
  console.log("App renders: ", countRenders.current++);
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
