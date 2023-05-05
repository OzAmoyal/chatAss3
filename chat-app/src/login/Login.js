import "./Login.css";
import LoginForm from "./loginForm/LoginForm"
import { useState } from "react";
import { Link } from 'react-router-dom';
function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
  return (
        <div className="row justify-content-center">
          <div className="col-md-6 mt-4">
            <div className="card">
              <div className="card-header bg-secondary text-white">Login</div>
              <div className="card-body">
                <LoginForm authenticated={props.authenticated} setAuthenticated={props.setAuthenticated} registered={props.registered} username={username} password={password} usernameSetter={setUsername} passwordSetter={setPassword}></LoginForm>
                <br />
                Not registered? 
                <Link to='/register'> Click here </Link>
                 to Register
              </div>
            </div>
          </div>
        </div>
  );
}

export default Login;
