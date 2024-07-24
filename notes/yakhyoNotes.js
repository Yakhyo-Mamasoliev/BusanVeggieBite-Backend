/* train.ts from Martin`s notes

 PROJECT STANDARDS
-Login Standards (Morgan P)
-Naming Standards
    function, method, variables =>  Camel case: addNumbers
    class => Pascal:MyProfile
    folder file => kebab:api-service.js
    css => snake:header_container
-Error handling 


types of API (REQUEST):
    Traditional API
    Rest API
    GraphQL API
    ...


TYPES OF BUILDING FRONTEND DEVELOPMENT
        1. TRADITIONAL FD => BSSR(ADMIN) => EJS
        2. MODERN FD => SPA(Users` application) => REACT LIBRARY



Cookies
 request join (can attach to each req)
 self destroy

Validation(Database): 
    Frontend Validation (Client)
    Backend Validation(Server)
    Database Validation(Schema)

BURAK: Client | Server | Schema
Nestar: Client | DTO(Data Transfer Object | Server | Schema

DTO CLIENT <=> SERVER  

Authentication built 2 types
1. Session
2. Token


Web Browser Storage
1. local storage        => 
2. session storage      => 
3. cookie storage       => sessions
4. cage storage         => images, files







app file = Express file


```javascript
1; .env Storing sensitive information

2; dependency => we need in production
devdependency => in development and testing

3; Moment.js is js library commonly used for handling date and time manipulation in JavaScript. It provides functionalities such as parsing, validating, manipulating, and formatting dates and times.

4; Static vs Dynamic Typing
Static vs. Dynamic defines how a language expects you to declare data types. Static typed languages require explicit definition of a data type when they create a piece of data (e.g. variable, parameter, return value). Dynamic languages are the opposite and can infer, or at least try to guess, the type that we're using.

5; .env file is commonly used to store environment variables in a project. These variables typically contain sensitive information or configuration settings that may vary between different environments (e.g., development, staging, production).

6; Git comments =
git add .
git commit -m "comment"
git push origin or master

git status
git reset --hard => (discards last changes)
git log --oneline => shows git commits
git commit --amend => is used in Git to modify the most recent commit (not yet pushed one only)

res.render("home");, it's telling the server to use a template named "home" to create a web page.

7; mvm- minimum final product ( minimum features necessary to satisfy)

8; mongoose is a package for using MongoDB in Node.js applications. It provides a straight-forward, schema-based solution to model

8; file path directory

One-Dot- current path from "./types/common";

Two-Dot- parent path from "../types/common";

Three-Dot- parent-parent path from "../../types/common";

9; static method
we cannot create instance for static methods

10; Chained Query in Mongoose
adding additional queries for queries
```







HTTP Requests: On the internet, your web browser sends requests to servers when you visit websites. These requests ask for specific information, like a webpage or data.

Why Express: Express is a toolbox for building web applications in JavaScript. It provides tools and rules to handle requests and send responses. Express makes managing interactions, like viewing webpages or using app features, easier.

Creating an Express App: Writing const app = express(); means "Let's create a web app using Express." Think of app as our workspace for building the website or app.

HTTP Methods: These are actions for requests. For instance, GET gets information from a server, while POST adds data to a server.

Routing: In Express, we use routes to direct requests to different parts of our app. If someone asks for /about, we show them info about our website using routes.

Middleware: Middleware acts like a filter for requests, performing actions before they reach their final destination. It's useful for tasks like checking if a user is logged in or logging request info.
*/

/* 





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


POSTMAN
    - post request has 
        body
        header



    44 - LESSON
    SPA: login va signup 
    
    2 
        
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

48-Lesson: PRoduct Schema Model


49-LESSON 

- Auto migration using your project refers to the process of automatically updating your database schema based on changes made to your TypeScript models.

5-LESSON: Product - Service Model (getAllProducts)


51-LESSON Service Model (getUsers, updateChosenUser)
- develop getUsers API
- develop updateChosenUser API

52-LESSON EJS - Publishing Admin Frontend
- uploading CSS, JS, and image files to adminka frontend
- uploading ejs files to adminka project
- learning some animation packages which can be useful in frontend

Lesson-53: EJS - Admin Login jarayoni tahlili 
- types of Request
- Admin login jarayoni tahlili
- Admin logout jarayoni tahlili

LESSON54 - EJS - Frontend signup jarayonini develop qilamiz
 - Learn jQuery
 - Validation and frontend validation
 - Build Image Preloading 
 - Completing Adminka Signup

types of API (REQUEST):
    - Traditional API (html elementlari asosida amalga oshiriladi, eg: request in form format )
    - Rest API (React Project, (exchange of JSON data))
    - GraphQL API
    ...




LESSON 55 Develop Products Frontend Page


*/

// nested rooting - creating roots inside roots

// Lesson 66- ordersPage
// -Material UIning Tap Panel Component
// -Publishing ordersPage screen components and sectional components.

// Accordion (mui)
// The Accordion component lets users show and hide sections of related content on a page.

// Lesson 66- ordersPage
// member - signup, login process and Token Authentication

// SSR: The server generates and sends a ready HTML file to the users.
// SPA: The server sends minimal HTML and JavaScript files. The React (or other frameworks) in the browser fetches data (usually in JSON format) from APIs and dynamically generates the HTML.

// Authentication Process
// 1. Sessions(using Cookies)
// 2. Tokens (using Cookies)
// 3. Tokens (using Headers)

// Cookie parser => Used to save tokens in cookies so they can persist in the browser after user login, allowing the token to travel with the browser for subsequent requests. It acts as middleware.

// Aggregation - pipelines for database to perform queries. 

// Query
    // const  query = req.query;
    // console.log("query", query);
    // postman. localhost:3003/product/all?name=david&age=28
    
// Param
    // postman. localhost:3003/product/all/david
    // router.ts "/product/all/:id"


// GET only has Headers (sending data to backend through url in postman)
// POST has header and body