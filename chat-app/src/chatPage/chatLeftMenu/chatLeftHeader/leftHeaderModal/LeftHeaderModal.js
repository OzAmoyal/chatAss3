import { useRef,useState } from "react";
import AddUserError from "./addUserError/AddUserError";
function LeftHeaderModal({authenticated, chats,setChats, token,fetchChats}){
  const errorMessage = useRef("");
  const [error,setError]=useState("")
  
  const createChat = async (username) => {
    const data = { "username": username };
    try {
      const createdChat = await fetch("http://localhost:50000/api/Chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(data)
      });
      if(createdChat.status===400){
      setError("username not exists");
      return;
      }
      const createdChatJson = await createdChat.json();
      const getChats = await fetchChats(token);
      setChats(getChats);
    } catch (error) {
      // Handle the error silently without logging it
      setError("username not exists");
      return;
    }
  };
  

  const handleSubmit=function(event){
    event.preventDefault()
    
    const username=event.target.name.value
    if (username==="") {
      setError("please enter username");
      return
    }

    if(chats.some(chat=>chat.user.username===username)){
      setError("you already have a chat with this user")
      return
    }
    if(username===authenticated.username){
      setError("you can't chat with yourself")
      return
    }
    setError("")

    createChat(username);
    event.target.name.value=""
  }
    return(
       <span id="add-user-span">
    <svg
      data-bs-toggle="modal"
      data-bs-target="#exampleModalCenter"
      xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
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
            <button onClick={()=>{setError("")}}
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
            {error !== "" && (
              <AddUserError errorMessage={errorMessage} error={error}></AddUserError>
            )}

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