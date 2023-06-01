import React from "react";
import RegisterFormUsername from "./registerFormUsername/RegisterFormUsername";
import RegisterFormPassword from "./registerFormPassword/RegisterFormPassword";
import RegisterFormConfirmPassword from "./registerFormConfirmPassword/RegisterFormConfirmPassword";
import RegisterFormDisplayName from "./registerFormDisplayName/RegisterFormDisplayName";
import RegisterFormSubmitButton from "./registerFormSubmitButton/RegisterFormSubmitButton";
import RegisterFormPicture from "./registerFormPicture/RegisterFormPicture";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm(props) {
  const [registeredError, setRegisteredError] = useState("");
  const navigate = useNavigate();
    const handleSubmit = async (event) => {
      event.preventDefault();
      
        if(props.formData["allowedSubmit"]["username"] && props.formData["allowedSubmit"]["password"] && 
            props.formData["allowedSubmit"]["confirm"] && props.formData["allowedSubmit"]["display"] &&
            props.formData["allowedSubmit"]["picture"]){
            const data={username:props.formData["username"],password:props.formData["password"],profilePic:(props.formData["picture"]),displayName:props.formData["display"]}
            const statusRegister= await fetch("/api/Users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            if(statusRegister.status===200){
              navigate('/login');
            }
            else{
              setRegisteredError("username already taken")
            }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <RegisterFormUsername registered = {props.registered} formData={props.formData} setter={props.setFormData} ></RegisterFormUsername>
    <RegisterFormPassword formData={props.formData} setter={props.setFormData}></RegisterFormPassword>
    <RegisterFormConfirmPassword formData={props.formData} setter={props.setFormData}></RegisterFormConfirmPassword>
    <RegisterFormDisplayName formData={props.formData} setter={props.setFormData}></RegisterFormDisplayName>
    <RegisterFormPicture formData={props.formData} setter={props.setFormData}></RegisterFormPicture>
    <div id="registerError" className="errorField">{registeredError}</div>
    <RegisterFormSubmitButton formData={props.formData} registered = {props.registered} setRegisteredUsers={props.setRegisteredUsers}></RegisterFormSubmitButton>
    </form>

  );
}
export default RegisterForm;