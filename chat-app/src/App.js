import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import ChatPage from "./chatPage/ChatPage";
function App() {
  const [authenticated, setAuthenticated] = useState(null);
  console.log(authenticated)
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      username: "user1",
      password: "password1",
      users: ["user2", "user3", "user4"],
    },
    {
      username: "user2",
      password: "password1",
      users: ["user2", "user3", "user4"],
    }
  ]);
  return (
    <BrowserRouter>
      <div className="container">
        {/*add logic to check if the user is logged in */}
        <Routes>
          
        <Route 
          path="/" 
          element={
            authenticated !== null ? (
              <ChatPage setAuthenticated={setAuthenticated} authenticated={authenticated} />
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
