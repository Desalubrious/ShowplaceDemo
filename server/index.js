// Set up express
const expres = require('express');
const db = require('./config/db');
const cors = require('cors');
const app = expres();
require ('dotenv').config();

var mysql = require('mysql');

const port = process.env.PORT || 3001;

// Parse to json
app.use(cors());
app.use(expres.json());

app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM posts", (err, result) => {
        if(err) throw err;
        res.send(result);
    }
    )
});

app.post('/api/create', (req, res) => {
    
    // Get data from frontend
    const userName = req.body.userName;
    const title = req.body.title;
    const text = req.body.text;
    db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,userName], (err, result) => {
        if(err) throw err;
        res.send(result);
    }
    )
    console.log(userName + " " + title + " " + text);

}); 

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});