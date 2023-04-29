function RegisterFormConfirmPassword(props){
    return(
        <div className="mb-3">
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              placeholder="Confirm password"
              required
            />
          </div>
    );
}

export default RegisterFormConfirmPassword;
