import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterFormSubmitButton({ formData, registered, setRegisteredUsers}) {
    const enableButton = (formData) =>Object.values(formData["allowedSubmit"]).some((value) => value === false);
    const isButtonDisabled = enableButton(formData);
   
    return (
        <button
            type="submit"
            className="btn btn-info text-white"
            onClick={(event) => handleSubmit(event)}
            disabled={isButtonDisabled}
        >
            Submit
        </button>
    );
}

export default RegisterFormSubmitButton;
