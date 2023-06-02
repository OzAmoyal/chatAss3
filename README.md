# Chat-Application

## Introduction
This repository contains a chatbot application created using HTML, CSS, Bootstrap, JS, and the React framework. The chatbot allows users to register, log in, and engage in chat conversations with other contacts. The application utilizes a client-server architecture, with the server running on port 50000 and storing data in a MongoDB database. The static files for the React application are served by the server itself.

## Description
The Chat-Application is a web-based chatbot that provides a user-friendly interface for seamless communication. It offers the following features:
<br><br><br>
💥 <b> Login Page: </b>Users can authenticate themselves by entering their credentials.

💥 <b> Registration Page: </b> New users can create an account by providing the necessary details.

💥 <b> Chat Page: </b>  Once logged in, users can view their contacts and engage in real-time chat conversations.
<br><br><br>
The frontend is developed using HTML, CSS, and Bootstrap, with JavaScript for interactive functionality. React is utilized as the frontend framework for building reusable UI components. The backend is powered by Node.js and Express.js, providing the server-side logic and API endpoints. MongoDB serves as the database for storing user information and chat data. The server also serves the static files for the React application, eliminating the need for a separate build step.
<br><br>
## Repository Description
Inside the cloned repository, you will find two additional folders, namely "chat-app" and "MVCnodeJS."
<br><br>
<b>chat-app:</b> This folder contains all the React application code and related files. It is responsible for the frontend of the chatbot application. Within the "chat-app" folder, you can expect to find components, styles, scripts, and other assets necessary for building the user interface of the chatbot.
<br><br>
<b>MVCnodeJS:</b> This folder contains all the server-side code for the chatbot application, following the Model-View-Controller (MVC) architecture. It encompasses the backend logic required for handling user authentication, managing chat conversations, and interacting with the database. You can expect to find files related to models, views, controllers, routes, and any additional server configuration or utility files within the "MVCnodeJS" folder.
<br><br>
## Screenshots

### Register page
 ![image|400](https://user-images.githubusercontent.com/93612510/236449333-dc6534d6-e7df-4233-8f31-811270ad7a12.png)

### Login page
 ![image|400](https://user-images.githubusercontent.com/93612510/236449251-fde7723f-38aa-4bce-a9b2-7af7e954c7cd.png)

### Chat page
 ![image|400](https://user-images.githubusercontent.com/93612510/236449017-2860f855-cb1c-468e-b2dc-b79e9fc142c1.png)



## Installation
1. Make sure you have nodeJS and npm installed on your local machine.

2. Clone the repository to your local machine:
    ```
    git clone https://github.com/OzAmoyal/chatAss3
    ```
4. Navigate to the folder where you cloned the repository.
5. Navigate to the folder of the server by executing the command ``` cd MVCnodeJS ```
6. execute the command ``` npm install ``` to download node_modules folder.
7. execute the command ``` npm start ``` to start the server.
8. Access the chatbot interface in your browser by visiting http://localhost:50000
9. Register a new account, log in, add contacts and start chatting with them.


## Built With

### Frontend
- HTML
- CSS
- Bootstrap
- JavaScript
- React

The frontend is developed using HTML, CSS, Bootstrap, and JavaScript. React is used as the frontend framework for building reusable UI components, managing state, and handling user interactions.

### Backend (MVC)
- Node.js
- Express.js
- MongoDB

The backend of the application follows the Model-View-Controller (MVC) architectural pattern and is built using Node.js, Express.js, and MongoDB.

<br />
