import "./ChatPage.css"
import ChatLogoutButton from "./chatLogoutButton/ChatLogoutButton";
import ChatLeftMenu from "./chatLeftMenu/ChatLeftMenu"
import ChatRightMenu from "./chatRightMenu/ChatRightMenu";
import { useState } from "react";


async function ChatPage(props){
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(props.authenticated);
  
    return (
        <>
        <ChatLogoutButton authSetter={props.setAuthenticated}></ChatLogoutButton>
      <div className="row justify-content-center">
       <ChatLeftMenu setSelectedUser={setSelectedUser} setAuthenticated={props.setAuthenticated} authenticated={props.authenticated} registered={props.registered}></ChatLeftMenu>
       <ChatRightMenu selectedUser={selectedUser} setAuthenticated={props.setAuthenticated} authenticated={props.authenticated}></ChatRightMenu>
      </div>
        </>
    );
}
export default ChatPage;
