import "./ChatPage.css"
import ChatLogoutButton from "./chatLogoutButton/ChatLogoutButton";
import ChatLeftMenu from "./chatLeftMenu/ChatLeftMenu"
import ChatRightMenu from "./chatRightMenu/ChatRightMenu";
import { useState } from "react";


function ChatPage(props){
 const [selectedUser, setSelectedUser] = useState(null);
const [change,setChange]=useState(false);
const [update,setUpdate]=useState(false);
const [showPopover, setShowPopover] = useState(false);
const [notification,setNotification]=useState("");
props.socket.on('identify', (data) => {
props.socket.emit('token', "bearer "+props.token);
});
props.socket.on('update', (data) => {
  //data=JSON.parse(data)
  setChange(true)
  showNotification(data.content,data.sender)
  if(selectedUser===data.chatID){
    setUpdate(true)
    
  }
});

const showNotification=(content,sender)=>{
  setNotification(sender+" sent you a message: "+content)
  setShowPopover(true)
  setTimeout(() => {
    setShowPopover(false);
  },3000);
}

    return (
        <>
        <div className="row justify-content-center">
          <div className="row">
            <div className="col col-2">
        <ChatLogoutButton authSetter={props.setAuthenticated} socket={props.socket} token={props.token} setToken={props.setToken} ></ChatLogoutButton>
        </div>

        <div className="col col-10 popover-container">
      {showPopover && (
        <div className="popover">
          <div className="popover-content">{notification}</div>
        </div>)}</div></div>

      
      <ChatLeftMenu setSelectedUser={setSelectedUser} setChange={setChange} change={change} token={props.token} authenticated={props.authenticated}></ChatLeftMenu>

       <ChatRightMenu selectedUser={selectedUser} setChange={setChange} update={update} setUpdate={setUpdate} token={props.token}authenticated={props.authenticated} socket={props.socket}></ChatRightMenu>
      </div>
        </>
    );
}
export default ChatPage;
