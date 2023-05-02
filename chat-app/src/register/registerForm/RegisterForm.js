import React from "react";
import RegisterFormUsername from "./registerFormUsername/RegisterFormUsername";
import RegisterFormPassword from "./registerFormPassword/RegisterFormPassword";
import RegisterFormConfirmPassword from "./registerFormConfirmPassword/RegisterFormConfirmPassword";
import RegisterFormDisplayName from "./registerFormDisplayName/RegisterFormDisplayName";
import RegisterFormSubmitButton from "./registerFormSubmitButton/RegisterFormSubmitButton";
import RegisterFormPicture from "./registerFormPicture/RegisterFormPicture";
import { useNavigate } from "react-router-dom";

function RegisterForm(props) {
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      
        if(props.formData["allowedSubmit"]["username"] && props.formData["allowedSubmit"]["password"] && 
            props.formData["allowedSubmit"]["confirm"] && props.formData["allowedSubmit"]["display"] &&
            props.formData["allowedSubmit"]["picture"]){
        
            props.setRegisteredUsers(prevState => [...prevState, {username: props.formData["username"], password: props.formData["password"], picture: props.formData["picture"], display: props.formData["display"], users: []}]);        
            navigate('/login');
        }
        else{
        }
    }

  return (
    <form onSubmit={handleSubmit}>
    <RegisterFormUsername registered = {props.registered} formData={props.formData} setter={props.setFormData} ></RegisterFormUsername>
    <RegisterFormPassword formData={props.formData} setter={props.setFormData}></RegisterFormPassword>
    <RegisterFormConfirmPassword formData={props.formData} setter={props.setFormData}></RegisterFormConfirmPassword>
    <RegisterFormDisplayName formData={props.formData} setter={props.setFormData}></RegisterFormDisplayName>
    <RegisterFormPicture formData={props.formData} setter={props.setFormData}></RegisterFormPicture>
    <RegisterFormSubmitButton formData={props.formData} registered = {props.registered} setRegisteredUsers={props.setRegisteredUsers}></RegisterFormSubmitButton>
    </form>

  );
}
export default RegisterForm;