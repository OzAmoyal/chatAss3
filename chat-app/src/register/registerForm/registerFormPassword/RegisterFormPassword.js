import { useState, useEffect } from 'react';

function RegisterFormPassword({ formData, setter }) {
  const [passwordErrors, setPasswordErrors] = useState(['']);

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const errors = [];

    if (password.length < 8) {
      errors.push("Password should be at least 8 characters long.");
    }

    if (!/\d/.test(password)) {
      errors.push("Password should contain at least one number.");
    }

    if (!/[a-zA-Z]/.test(password)) {
      errors.push("Password should contain at least one letter.");
    }
  

    setPasswordErrors(errors);
    setter({ ...formData, password });
  };

  useEffect(() => {
    const empty = passwordErrors.length === 1 && passwordErrors[0] === '';
    const element = document.getElementById("passwordError");
    
    const allValid = passwordErrors.length === 0;

    if(empty){
      element.innerHTML = ["Password requirements:",
                           "Password should be at least 8 characters long",
                          "Password should contain at least one number.",
                          "Password should contain at least one letter"].join("<br>")
    }
    else if (allValid) {
      
      element.textContent = 'your password is ok';
    } else {
      element.innerHTML = "Password requirements:<br>" + passwordErrors.join("<br>");
    }
  }, [passwordErrors]);

  return (
    <div id="passwordField" className="mb-3">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Enter password"
        required
        onChange={handlePasswordChange}
      />
      <span id="passwordError" className="errorField">
       </span>
    </div>
  );
}

export default RegisterFormPassword;
