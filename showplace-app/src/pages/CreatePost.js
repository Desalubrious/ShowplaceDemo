import React, { useEffect } from "react";
import { useState } from "react";

import Axios from "axios";
import "../App.css"


// Create Post Page
export default function CreatePost() {
// Makes a user login if they are not logged in to create a post.





const [userName, setUserName] = React.useState("");
const [title, setTitle] = React.useState("");
const [text, setText] = React.useState("");

  const submitPost = () => {
    Axios.post("http://localhost:3001/api/create", {userName : userName, title : title, text : text});
    window.location.pathname = "/";
  }

  return (
    <div className="CreatePost">
      <div className="uploadPost">
        <label>Posted By (For anonymous posting)</label>
        <input type="text" onChange={(e)=>{setUserName(e.target.value)}}/>
        <label>Title</label>
        <input type="text"  onChange={(e)=>{setTitle(e.target.value)}}/>
        <label>Content</label>
        <textarea  onChange={(e)=>{setText(e.target.value)}}/>
        <button className="submit" onClick={submitPost}>Submit</button>
      </div>
    </div>
  );

}