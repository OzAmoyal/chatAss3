import "./ChatPage.css"
import ChatLogoutButton from "./chatLogoutButton/ChatLogoutButton";
import ChatLeftMenu from "./chatLeftMenu/ChatLeftMenu"
import ChatRightMenu from "./chatRightMenu/ChatRightMenu";
import { useState } from "react";
import { set } from "mongoose";

function ChatPage(props){
 const [selectedUser, setSelectedUser] = useState(null);
const [change,setChange]=useState(false);
const [update,setUpdate]=useState(false);
props.socket.on('identify', (data) => {
props.socket.emit('token', "bearer "+props.token);
});
props.socket.on('update', (data) => {
  setChange(true)
  if(selectedUser===data){
    setUpdate(true)
  }
});

    return (
        <>
        <ChatLogoutButton authSetter={props.setAuthenticated} setToken={props.setToken} ></ChatLogoutButton>
      <div className="row justify-content-center">
      <ChatLeftMenu setSelectedUser={setSelectedUser} setChange={setChange} change={change} token={props.token} authenticated={props.authenticated}></ChatLeftMenu>

       <ChatRightMenu selectedUser={selectedUser} setChange={setChange} update={update} setUpdate={setUpdate} token={props.token}authenticated={props.authenticated} socket={props.socket}></ChatRightMenu>
      </div>
        </>
    );
}
export default ChatPage;
