import { useEffect } from 'react';

function RegisterFormUsername({ registered, formData, setter }) {
  const handleUsernameChange = (event) => {
    setter({ ...formData, username: event.target.value });
  };

  useEffect(() => {
    const exists = registered.some((user) => user.username === formData.username);
    const element = document.getElementById("userError");

    if (exists) {
      element.textContent = "The username is already taken, please select another one";
      setter(prevState => ({
        ...prevState,
        allowedSubmit: {
          ...prevState.allowedSubmit,
          username: false
        }
      }));
    } else {
      if (formData.username !== "") {
        setter(prevState => ({
          ...prevState,
          allowedSubmit: {
            ...prevState.allowedSubmit,
            username: true
          }
        }));
      }
      element.textContent = "";
    }
  }, [registered, formData.username, setter]);

  return (
    <div id="userField" className="mb-3">
      <label htmlFor="name">Username:</label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter username"
        required
        onBlur={handleUsernameChange}
      />
      <span id="userError" className="errorField"></span>
    </div>
  );
}

export default RegisterFormUsername;
