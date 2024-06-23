1; // .env Storing sensitive information

2; // dependency => we need in production
// devdependency => in development and testing

3; //  Moment.js is js library commonly used for handling date and time manipulation in JavaScript. It provides functionalities such as parsing, validating, manipulating, and formatting dates and times.

4; // Static vs Dynamic Typing
// Static vs. Dynamic defines how a language expects you to declare data types. Static typed languages require explicit definition of a data type when they create a piece of data (e.g. variable, parameter, return value). Dynamic languages are the opposite and can infer, or at least try to guess, the type that we're using.

5; // .env  file is commonly used to store environment variables in a project. These variables typically contain sensitive information or configuration settings that may vary between different environments (e.g., development, staging, production).

6; // Git comments =
// git add .
// git commit -m "comment"
// git push origin or master

// git status
// git reset --hard => (discards last changes)
// git log --oneline => shows git commits
// git commit --amend =>  is used in Git to modify the most recent commit (not yet pushed one only)

7; // mvm- minimum final product ( minimum features necessary to satisfy)

8; // mongoose is a package for using MongoDB in Node.js applications. It provides a straight-forward, schema-based solution to model

8; // file path directory

// One-Dot- current path from "./types/common";

// Two-Dot- parent path from "../types/common";

// Three-Dot- parent-parent path from "../../types/common";

9; // static method
// we cannot create instance for static methods

10; // Chained Query in Mongoose
// adding additional queries for queries

11; /*
HTTP Requests: On the internet, your web browser sends requests to servers when you visit websites. These requests ask for specific information, like a webpage or data.

Why Express: Express is a toolbox for building web applications in JavaScript. It provides tools and rules to handle requests and send responses. Express makes managing interactions, like viewing webpages or using app features, easier.

Creating an Express App: Writing const app = express(); means "Let's create a web app using Express." Think of app as our workspace for building the website or app.

HTTP Methods: These are actions for requests. For instance, GET gets information from a server, while POST adds data to a server.

Routing: In Express, we use routes to direct requests to different parts of our app. If someone asks for /about, we show them info about our website using routes.

Middleware: Middleware acts like a filter for requests, performing actions before they reach their final destination. It's useful for tasks like checking if a user is logged in or logging request info.
*/

/* 


PROJECT STANDARDS
-Login Standards (Morgan P)
-Naming Standards
    function, method, variables =>  Camel case  
    class => Pascal
    folder file => kebab
    css => snake
-Error handling 


Notes
- Browser only accepts get, not update or delete methods. 
- get only used for providing pages, while post is used for creating or updating data.
- We mostly use get and post from postman:  
    -get(requesting data from database), 
    -post(creating, delete). This is most common case in many companies. 


Lesson 41 - Member Service Model (Admin Signup)

Plans
 - What is API snf its types
 - We develop complete signup API for Adminka

Notes
- API stands for Application Programming Interface. It is kinda waiter takes orders from customer and go to chef and takes food and gives it to customer.

types of API (REQUEST):
    Traditional API
    Rest API
    GraphQL API
    ...

POSTMAN
    - post request has 
        body
        header



    44 - LESSON
    SPA: login va signup 
    
    2 TYPES OF BUILDING FRONTEND DEVELOPMENT
        1. TRADITIONAL FD => BSSR(ADMIN) => EJS
        2. MODERN FD => SPA(Users` application) => REACT LIBRARY
        
        - refactoring: simplifying algorithm

45 LESSON: EJS - ADMIN FRONTEND DEVELOPMENT
Plans: 
- create admin frontend pages
- create frontend css, image, javascript folder and files
- call external packages in frontend and use bootstrap for css design
- create header and footer

Note: 
- 


46 LESSON: Authentication - Sessions*
1. development of authentication process
2. developing checkAuthSessions API as a test
3. discussing how sessions work
4. create logout API 

1.1 Authentication: 
- we install connect-mongodb-session(^3.1.1) and express-session(^3.1.1)  in dependency, and install their types in dev dependency.
    - "express-session" - A middleware for Express that manages user sessions by storing session data on the server side. It provides a way to create, manage, and destroy user sessions.     
    - "connect-mongodb-session"  with express-session to store session data in MongoDB.

- MongoDBStore - Exports a single function that returns a MongoDBStore class for storing sessions in MongoDB.


47-Lesson: Product Controller
Plan: 
 - Create MVC related to Product
 - Create restaurant verification middleware algorithm 
 - learn how to create browser local variables 
 - create algorithm of how to upload fil;es to server

Notes: 
- 







*/
