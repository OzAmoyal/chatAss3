function AddUserError({errorMessage,error}){
    return(
        <div className="errorField" ref={errorMessage}>
        {error}
        </div>
    );
}
export default AddUserError;