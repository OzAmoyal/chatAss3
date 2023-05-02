import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import ChatPage from "./chatPage/ChatPage";


function App() {
  const [authenticated, setAuthenticated] = useState(null);

  const [registeredUsers, setRegisteredUsers] = useState([]);
  return (
    <BrowserRouter>
      <div className="container">

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


