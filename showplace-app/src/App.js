import React from 'react';
import { useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';
import SignIn from './pages/auth/Signin';
import ProtectedRoute from './components/ProtectedRoute';

// App has a persistent navigation bar
function App() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = '/';
  };
  if(localStorage.getItem("isAuthenticated") === "false"){
    document.getElementById("logoutbtn").style.display = "none";
  }
  return (
  <>
  <div className="navBar">
  <div className="links">
  <a href="/">Main Page</a> 
  <a href="/createpost">Create Post</a>
  {localStorage.getItem("isAuthenticated") === "true" ? <a href="/" onClick={handleLogout} id="logoutbtn">Logout</a> : <a href="/signin">Sign In</a>}
  </div>
  </div>
  <Router> 
    
    {/* <ProtectedRoute path="/createPost"  exact render={(props) => <CreatePost />}/>  */}
    <ProtectedRoute exact path="/createPost" component={CreatePost}/>
    <Route path="/" exact render={(props) => <MainPage />}/> 
    <Route exact path="/signin" component={SignIn} />
    </Router>
  </>
  );
}

export default App;
