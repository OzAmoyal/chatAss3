
function LoginPassword(props){
    const handlePasswordChange = (event) => {
        props.setter(event.target.value);
      };
    return(
        <div className="mb-3">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      onChange={handlePasswordChange}
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      required
                    />
                  </div>
    );
}
export default LoginPassword;