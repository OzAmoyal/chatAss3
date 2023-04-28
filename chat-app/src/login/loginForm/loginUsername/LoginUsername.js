function LoginUsername(props) {
    const handleUsernameChange = (event) => {
    props.setter(event.target.value);
      };
  return (
    <div className="mb-3">
      <label htmlFor="name">Username:</label>
      <input
        type="text"
        className="form-control"
        value={props.userValue}
        id="name"
        onChange={handleUsernameChange}
        placeholder="Enter username"
        required
      />
    </div>
  );
}
export default LoginUsername;