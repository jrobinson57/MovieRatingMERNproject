<pre>
<h1>MovieRatingMERNwebapp</h1>
This was a full stack project for my web programming course at Rowan in the spring of 2024
It is a movie rating app using the MERN stack and other various technologies like vite, axios, cors, bcrypt, jwts

It contains a secure account creation page, login page, a page for all CRUD operations, about page and dummy contact us page

<h2>Quick start</h2>
If you'd like to try this out for yourself, follow these instructions:
1.) Download the project files into a folder, and open the folder in your IDE
2.) Make sure you install the required packages
    - Client: "npm install bootstrap axios react-router-dom"
    - Server: "npm install express mongoose cors nodemon jsonwebtoken bcrypt cookie-parser"
3.) You will have to create your own MongoDB cluster, but it is fairly simple to set up. 
    - Head over to https://www.mongodb.com/ and either sign in or sign up, create a cluster and call it whatever you'd like.
    - Under the secuity tab in Atlas, you'll see a database access button where you can create a new database user, set one up with a user/pass of your choosing
    - Make sure you authorize your IP adress, there should be a yellow warning popup towards the top of the screen if your IP isn't authorized for the cluster
    - Go into \server\index.js and change the variables under the "Mongo" comment to your values, should be around line 12
4.) I recommend splitting your terminal and on one side cd into \client and cd into \server on the other
    - In the client, type "npm run dev"
    - In the server, type "npm start"
5.) You can now visit http://localhost:5173/ in your browser to see the website in action!
</pre>
