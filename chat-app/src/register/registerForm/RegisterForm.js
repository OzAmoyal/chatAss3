import React from "react";
import RegisterFormUsername from "./registerFormUsername/RegisterFormUsername";
import RegisterFormPassword from "./registerFormPassword/RegisterFormPassword";
import RegisterFormConfirmPassword from "./registerFormConfirmPassword/RegisterFormConfirmPassword";
import RegisterFormDisplayName from "./registerFormDisplayName/RegisterFormDisplayName";
import RegisterFormSubmitButton from "./registerFormSubmitButton/RegisterFormSubmitButton";
import RegisterFormPicture from "./registerFormPicture/RegisterFormPicture";

function RegisterForm(props) {
  console.log(props.formData);

  return (
    <form>
    <RegisterFormUsername registered = {props.registered} formData={props.formData} setter={props.setFormData} ></RegisterFormUsername>
    <RegisterFormPassword formData={props.formData} setter={props.setFormData}></RegisterFormPassword>
    <RegisterFormConfirmPassword formData={props.formData} setter={props.setFormData}></RegisterFormConfirmPassword>
    <RegisterFormDisplayName ></RegisterFormDisplayName>
    <RegisterFormPicture formData={props.formData} setter={props.setFormData}></RegisterFormPicture>
    <RegisterFormSubmitButton></RegisterFormSubmitButton>
    </form>

  );
}
export default RegisterForm;