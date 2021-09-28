import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "../App.css"
// Main Page
export default function MainPage() {

  const[postList, setPostList] = useState([]);
// Axios request to get all posts
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((data) => {
      setPostList(data.data);
    }
    )
  }, []);
  return (
    <div className="MainPage">
        <div className="PostContainer">
          {postList.map((val,key) => {
            return(<div className="Post">
            <h1>{val.title}</h1>
            <p>{val.post_text.length > 200 ? val.post_text.substring(0,200)+ '..' : val.post_text}</p>
            <h4>{val.user_name}</h4>
            </div>)
          })}
            
        </div>
    </div>
  );
}
