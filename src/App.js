import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookDetail from "./components/BookDetail/BookDetail";
import Admin from "./components/Admin/Admin";
import Orders from "./components/Orders/Orders";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <PrivateRoute path="/orders">
              <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admin">
              <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/bookdetail/:key">
              <BookDetail />
          </PrivateRoute>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
