import { useRef,useState } from "react";
import AddUserError from "./addUserError/AddUserError"
function LeftHeaderModal({authenticated, setAuthenticated, registered}){
  const errorMessage = useRef("");
  const [error,setError]=useState("")


  const handleSubmit=function(event){
    event.preventDefault()

    const username=event.target.name.value
    if (username==="") {
      setError("please enter username");
      return
    }
    if (!registered.some(user=>user.username===username)) {
      setError("username not exists")
      return
    }
    if(authenticated.users.some(user=>user.username===username)){
      setError("you already have a chat with this user")
      return
    }
    if(username===authenticated.username){
      setError("you can't chat with yourself")
      return
    }
    setError("")
    const userChosen= registered.find(user=>user.username===username)
    
    authenticated.users.push({username:userChosen.username, messages:[]})
    userChosen.users.push({username:authenticated.username, messages:[]})
    setAuthenticated({...authenticated})
    event.target.name.value=""
  }
    return(
       <span id="add-user-span">
    <svg
      data-bs-toggle="modal"
      data-bs-target="#exampleModalCenter"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      className="bi bi-person-add"
      viewBox="0 0 16 16"
    >
      <path
        d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"
      />
    </svg>
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Add new contact
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
            </button>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="modal-body">
            
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Contact's Username"
            />
            <AddUserError errorMessage={errorMessage} error={error}></AddUserError>

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            
          </div>
          </form>
        </div>
      </div>
    </div>
  </span>
  );
}
export default LeftHeaderModal;