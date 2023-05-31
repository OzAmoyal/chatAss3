import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import ChatPage from "./chatPage/ChatPage";
import io from "socket.io-client";

function App() {
  const [authenticated, setAuthenticated] = useState(null);
  const [token,setToken]=useState(null);
  //const [socket,setSocket]=useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const socket = io('http://localhost:50000', {
  withCredentials: true,
});

  return (
    <BrowserRouter>
      <div className="container">

        <Routes>
          
        <Route 
          path="/" 
          element={
            token !== null ? (
              <ChatPage setAuthenticated={setAuthenticated} authenticated={authenticated} token={token} socket={socket} setToken={setToken}/>
            ) : (
              <Login 
                registered={registeredUsers} 
                authenticated={authenticated} 
                setAuthenticated={setAuthenticated} 
                setToken={setToken}
                
              />
            )
          }
        />
          <Route
            path="/login"
            element={<Login registered={registeredUsers} authenticated={authenticated} setAuthenticated={setAuthenticated} setToken={setToken}></Login>}
          ></Route>
          <Route
            path="/register"
            element={<Register authenticated={authenticated} registered={registeredUsers} setRegisteredUsers={setRegisteredUsers}></Register>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


