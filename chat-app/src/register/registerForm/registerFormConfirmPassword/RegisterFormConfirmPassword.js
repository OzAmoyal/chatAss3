


function RegisterFormConfirmPassword({ formData,setter }){
  const handleConfirmChange = (event) => {
    if(formData.password !== ""){
      if(formData.password!==event.target.value){
        const element = document.getElementById("confirmPasswordError");
        element.textContent="Passwords are not identical";
        setter(prevState => ({
          ...prevState,
          allowedSubmit: {
          ...prevState.allowedSubmit,
          confirm: false
        }}))
        
      }else{
        const element = document.getElementById("confirmPasswordError");
        element.textContent="";
        setter(prevState => ({
          ...prevState,
          allowedSubmit: {
          ...prevState.allowedSubmit,
          confirm: true
        }}))
      }
    }

  
  }
    return(
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
            <span id="confirmPasswordError" className="errorField">
            </span>
          </div>
    );
}

export default RegisterFormConfirmPassword;
