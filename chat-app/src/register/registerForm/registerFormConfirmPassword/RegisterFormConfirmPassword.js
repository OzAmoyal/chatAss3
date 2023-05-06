import { useState, useEffect } from 'react';

function RegisterFormConfirmPassword({ formData, setter }) {
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleConfirmChange = (event) => {
    const confirmPassword = event.target.value;
    const password = formData.password;

    setter({ ...formData, confirm: confirmPassword });

    if (password !== "") {
      if (password !== confirmPassword) {
        setConfirmPasswordError("Passwords are not identical");
        setter(prevState => ({
          ...prevState,
          allowedSubmit: {
            ...prevState.allowedSubmit,
            confirm: false
          }
        }));
      } else {
        setConfirmPasswordError("");
        setter(prevState => ({
          ...prevState,
          allowedSubmit: {
            ...prevState.allowedSubmit,
            confirm: true
          }
        }));
      }
    }
  };

  useEffect(() => {
    const element = document.getElementById("confirmPasswordError");
    element.textContent = confirmPasswordError;
  }, [confirmPasswordError]);

  return (
    <div className="mb-3">
      <label htmlFor="confirm_password">Confirm Password:</label>
      <input
        type="password"
        className="form-control"
        id="confirm_password"
        onChange={handleConfirmChange}
        placeholder="Confirm password"
        required
      />
      <span id="confirmPasswordError" className="errorField"></span>
    </div>
  );
}

export default RegisterFormConfirmPassword;

