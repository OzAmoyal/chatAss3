
function RegisterFormPassword(props){
    const handlePasswordChange = (event) => {
        props.setter(event.target.value);
      };
    return(
        <div className="mb-3">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          required
        />
      </div>
    );
}
export default RegisterFormPassword;