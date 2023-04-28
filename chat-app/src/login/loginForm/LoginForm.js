import LoginPassword from "./loginPassword/LoginPassword";
import LoginSubmitButton from "./loginSubmitButton/LoginSubmitButton";
import LoginUsername from "./loginUsername/LoginUsername";
function LoginForm(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        //check if user is registered and if so move him to chat
      };
  return (
    <form onSubmit={handleSubmit}>
      <LoginUsername userValue={props.username} setter={props.usernameSetter}></LoginUsername>
      <LoginPassword
        passwordValue={props.password}
        setter={props.passwordSetter}
      ></LoginPassword>
      <div>
        <br></br>
      </div>
      <LoginSubmitButton></LoginSubmitButton>
    </form>
  );
}
export default LoginForm;