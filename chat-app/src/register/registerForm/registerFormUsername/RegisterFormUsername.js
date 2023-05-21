import { useEffect } from 'react';

function RegisterFormUsername({ registered, formData, setter }) {
  const handleUsernameChange = (event) => {
    setter({ ...formData, username: event.target.value });
  };

  useEffect(() => {
    //const exists = registered.some((user) => user.username === formData.username); //fetch from db if username is taken.
    //const element = document.getElementById("userError");

    if (formData.username === "") {
      //element.textContent = "";
      setter(prevState => ({
        ...prevState,
        allowedSubmit: {
          ...prevState.allowedSubmit,
          username: false
        }
      }));
    } else {
        setter(prevState => ({
          ...prevState,
          allowedSubmit: {
            ...prevState.allowedSubmit,
            username: true
          }
        }));
      }
      //element.textContent = "";
    }, [ formData.username, setter]);

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
