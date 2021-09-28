import React, { useEffect } from "react";
import Axios from "axios";
import "../App.css"
import { useState } from "react";
// import Login from "../components/Login";
// Create Post Page
export default function CreatePost() {
  

const [userName, setUserName] = React.useState("");
const [title, setTitle] = React.useState("");
const [text, setText] = React.useState("");

  const submitPost = () => {
    Axios.post("http://localhost:3001/api/create", {userName : userName, title : title, text : text})
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