import React from 'react';
import { useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from './pages/MainPage';
import CreatePost from './pages/CreatePost';
import Login from "./pages/Login";

// App has a persistent navigation bar
function App() {
  
  return (
  <>
  <div className="navBar">
  <div className="links">
  <a href="/">Main Page</a> 
  <a href="/createpost">Create Post</a>
  </div>
  </div>
  <Router> 
    
    <Route path="/createPost"  exact render={(props) => <CreatePost />}/> 
    <Route path="/" exact render={(props) => <MainPage />}/> 
    </Router>
  </>
  );
}

export default App;
