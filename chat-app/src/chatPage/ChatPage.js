import "./ChatPage.css"
import ChatLogoutButton from "./chatLogoutButton/ChatLogoutButton";
import ChatLeftMenu from "./chatLeftMenu/ChatLeftMenu"
import ChatRightMenu from "./chatRightMenu/ChatRightMenu";
import { useState } from "react";

function ChatPage(props){
 const [selectedUser, setSelectedUser] = useState(null);


  
    return (
        <>
        <ChatLogoutButton authSetter={props.setAuthenticated}></ChatLogoutButton>
      <div className="row justify-content-center">
      <ChatLeftMenu setSelectedUser={setSelectedUser} token={props.token} authenticated={props.authenticated}></ChatLeftMenu>

       <ChatRightMenu selectedUser={selectedUser} token={props.token}authenticated={props.authenticated}></ChatRightMenu>
      </div>
        </>
    );
}
export default ChatPage;
