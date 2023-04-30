import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import ChatPage from "./chatPage/ChatPage";
import ronaldo from "./images/ronaldo.jpg"
import messi from "./images/messi.jpg"

function App() {
  const [authenticated, setAuthenticated] = useState(null);
  console.log(authenticated)
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      username: "user1",
      password: "password1",
      display: "user1",
      picture: ronaldo,
      users: [
        {
          username: "user2",
          messages: [
            { 
              content: "Hello, user2!",
              sender: "user1",
              receiver: "user2",
              timestamp: "2022-05-01 12:30:45"
            },
            {
              content: "How are you?",
              sender: "user2",
              receiver: "user1",
              timestamp: "2022-05-01 12:31:22"
            },
          ]
        }]
      },
      {
        username: "user2",
        password: "password2",
        display: "user2",
        picture: messi,
        users: [
          {
            username: "user1",
            messages: [
              {
                content: "Hi, user1!",
                sender: "user2",
                receiver: "user1",
                timestamp: "2022-05-01 12:32:15"
              },
              {
                content: "I'm good, thanks. How about you?",
                sender: "user1",
                receiver: "user2",
                timestamp: "2022-05-01 12:33:09"
              }
            ]
          }
        ]
      },
      {
        "username": "user3",
        "password": "password3",
        "display": "user3",
        "picture": "https://example.com/user3.png",
        "users": [
          {
            "username": "user1",
            "messages": [
              {
                "content": "Hello, user1!",
                "sender": "user3",
                "receiver": "user1",
                "timestamp": "2022-05-01 12:30:45"
              },
              {
                "content": "How are you?",
                "sender": "user1",
                "receiver": "user3",
                "timestamp": "2022-05-01 12:31:22"
              }
            ]
          },
          {
            "username": "user2",
            "messages": [
              {
                "content": "Hi, user2!",
                "sender": "user3",
                "receiver": "user2",
                "timestamp": "2022-05-01 12:32:12"
              }
            ]
          }
        ]
      }
    ]);
  return (
    <BrowserRouter>
      <div className="container">
        {/*add logic to check if the user is logged in */}
        {/*add logic to check if the usacader is logged in */}
        <Routes>
          
        <Route 
          path="/" 
          element={
            authenticated !== null ? (
              <ChatPage setAuthenticated={setAuthenticated} authenticated={authenticated} registered={registeredUsers} setter={setRegisteredUsers} />
            ) : (
              <Login 
                registered={registeredUsers} 
                authenticated={authenticated} 
                setAuthenticated={setAuthenticated} 
              />
            )
          }
        />
          <Route
            path="/login"
            element={<Login registered={registeredUsers} authenticated={authenticated} setAuthenticated={setAuthenticated}></Login>}
          ></Route>
          <Route
            path="/register"
            element={<Register registered={registeredUsers} setRegisteredUsers={setRegisteredUsers}></Register>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


