import LoginPassword from "./loginPassword/LoginPassword";
import LoginSubmitButton from "./loginSubmitButton/LoginSubmitButton";
import LoginUsername from "./loginUsername/LoginUsername";
import { Navigate } from 'react-router-dom';

function LoginForm(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = props.registered.find((user)=>user.username === props.username && user.password === props.password);
        if(user!=null){
          props.setAuthenticated(user)
           
        }
        else{
          const element=document.getElementById("loginError");
          element.textContent="Username or Password are incorrect."
        }
      };
      
  return (<>
    {(props.authenticated!=null) && (
      <Navigate
        to="/"
      />
    )}
    <form onSubmit={handleSubmit}>
      <LoginUsername userValue={props.username} setter={props.usernameSetter}></LoginUsername>
      <LoginPassword
        passwordValue={props.password}
        setter={props.passwordSetter}
      ></LoginPassword>
      <div>
        <br></br>
      </div>
      <LoginSubmitButton ></LoginSubmitButton>
      <div id="loginError" className="errorField"></div>
    </form>
  </>);

}
export default LoginForm;