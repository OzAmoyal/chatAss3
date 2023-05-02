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
  //console.log(authenticated)
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
              content: "Hi, user1!",
              sender: "user2",
              receiver: "user1",
              timestamp: new Date("2022-05-01T12:34:14")
            },
            {
              content: "I'm good, thanks. How about you?",
              sender: "user1",
              receiver: "user2",
              timestamp: new Date("2022-05-01T12:32:15")
            },
            {
              content: "ani yeled gadol",
              sender: "user2",
              receiver: "user1",
              timestamp: new Date("2022-05-01T12:34:15")
            },
            {
              content: "dammmm!!",
              sender: "user1",
              receiver: "user2",
              timestamp: new Date("2022-05-01T12:35:15")
            },
            {
              content: "toda raba gever",
              sender: "user2",
              receiver: "user1",
              timestamp: new Date("2022-05-01T12:40:15")
            }
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
                timestamp: new Date("2022-05-01T12:39:15")
              },
              {
                content: "I'm good, thanks. How about you?",
                sender: "user1",
                receiver: "user2",
                timestamp: new Date("2022-05-01T12:44:15")
              },
              {
                content: "ani yeled gadol",
                sender: "user2",
                receiver: "user1",
                timestamp: new Date("2022-05-01T12:54:15")
              },
              {
                content: "dammmm!!",
                sender: "user1",
                receiver: "user2",
                timestamp: new Date("2022-05-01T12:04:15")
              },
              {
                content: "toda raba gever",
                sender: "user2",
                receiver: "user1",
                timestamp: new Date("2022-05-01T13:39:15")
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


