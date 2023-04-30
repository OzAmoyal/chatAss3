import "./ChatPage.css"

import nymar from "../images/nymar.jpg";
import ronaldo from "../images/ronaldo.jpg";
import messi from "../images/messi.jpg";
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
       <ChatLeftMenu setSelectedUser={setSelectedUser} authenticated={props.authenticated} registered={props.registered}></ChatLeftMenu>
       <ChatRightMenu selectedUser={selectedUser} setAuthenticated={props.setAuthenticated} authenticated={props.authenticated} registered={props.registeredUsers} setter={props.setRegisteredUsers}></ChatRightMenu>
      </div>
        </>
    );
}
export default ChatPage;
