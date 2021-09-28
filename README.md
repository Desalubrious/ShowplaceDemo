# Showplace Project

I created a react app with a MySQL backend. For Showplace.

## Installation



Download/Clone/Fork this app, then run npm i / yarn install in both the showplace-app folder and server folder.

Create a .env file in the server root directory (secure), or optionally manually input connection information (not secure for uploading to github/sharing).

If you have any problems getting the app running- reach out to me and I can help troubleshoot. For the purposes of this demonstration, I have included a (low-quality) demonstration of the app functioning below.


## Usage

When in the app, a user is able to view blog posts while not signed in. 

A user must sign in to create a blog post, which is stored in the MySQL database.

Once signed in, the user can view and create blogs.

## Acceptance Criteria
```
Create a basic user log in.

Upon log in, have a page where that user can submit something or perform an action where something is stored in a MySQL database on the backend. This page should only be accessed if a user is logged in.

Create migrations or sql scripts to create the tables to store the data that the user submitted in a good way. 

Create a page where that displays what the user submitted in an intuitive way for other users. Users do not need to be logged in for this page. 
```
## Technologies used
```
NodeJS
React
Yarn
Npm
MySQL
Express
Javascript
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
