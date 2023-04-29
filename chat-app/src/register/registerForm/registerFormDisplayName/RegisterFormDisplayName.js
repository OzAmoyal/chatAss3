function RegisterFormDisplayName({ formData, setter }) {
    const handleDisplayNameChange = (event) => {
      if (event.target.value !== "") {
        setter((prevState) => ({
          ...prevState,
          display: event.target.value,
          allowedSubmit: {
            ...prevState.allowedSubmit,
            display: true,
          },
        }));
      } else {
        setter((prevState) => ({
          ...prevState,
          display: "",
          allowedSubmit: {
            ...prevState.allowedSubmit,
            display: false,
          },
        }));
      }
    };
  
    return (
      <div className="mb-3">
        <label htmlFor="confirm_password">Display name:</label>
        <input
          type="text"
          className="form-control"
          id="Display"
          placeholder="Display name"
          required
          onChange={handleDisplayNameChange}
        />
      </div>
    );
  }
  
  export default RegisterFormDisplayName;
  