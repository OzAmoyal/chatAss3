import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterFormSubmitButton({ formData, registered, setRegisteredUsers}) {
    const enableButton = (formData) =>Object.values(formData["allowedSubmit"]).some((value) => value === false);
    const isButtonDisabled = enableButton(formData);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        if(formData["allowedSubmit"]["username"] && formData["allowedSubmit"]["password"] && 
            formData["allowedSubmit"]["confirm"] && formData["allowedSubmit"]["display"] &&
            formData["allowedSubmit"]["picture"]){
            setRegisteredUsers(prevState => [...prevState, {username: formData["username"], password: formData["password"], picture: formData["picture"], display: formData["display"]}]);        
            navigate('/login');
        }
        else{
            event.preventDefault();
        }
    }
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
