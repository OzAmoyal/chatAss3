import "./ChatPage.css"
import ChatLogoutButton from "./chatLogoutButton/ChatLogoutButton";
import ChatLeftMenu from "./chatLeftMenu/ChatLeftMenu"
import ChatRightMenu from "./chatRightMenu/ChatRightMenu";
import { useState } from "react";

function ChatPage(props){
 const [selectedUser, setSelectedUser] = useState(null);
const [change,setChange]=useState(false);
    return (
        <>
        <ChatLogoutButton authSetter={props.setAuthenticated} setToken={props.setToken} ></ChatLogoutButton>
      <div className="row justify-content-center">
      <ChatLeftMenu setSelectedUser={setSelectedUser} setChange={setChange} change={change} token={props.token} authenticated={props.authenticated}></ChatLeftMenu>

       <ChatRightMenu selectedUser={selectedUser} setChange={setChange} token={props.token}authenticated={props.authenticated}></ChatRightMenu>
      </div>
        </>
    );
}
export default ChatPage;
