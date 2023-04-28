import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import ChatPage from "./chatPage/ChatPage";
function App() {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  return (
    <BrowserRouter>
      <div className="container">
      
  

      {/*add logic to check if the user is logged in */}
      <Routes>
        <Route path="/" exact Component={ChatPage} />
        <Route path="/login" element={<Login registered={registeredUsers}></Login>}></Route>
        <Route path="/register" element={<Register registered={registeredUsers}></Register>}></Route>

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
